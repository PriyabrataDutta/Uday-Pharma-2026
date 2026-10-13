import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-.\s]{10,16}$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const {
    fullName,
    phone,
    email,
    professionalType,
    city,
    inquiryType,
    productSlug,
    productName,
    message,
  } = body as Record<string, unknown>;

  const errors: Record<string, string> = {};

  if (typeof fullName !== "string" || fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }
  if (typeof phone !== "string" || !PHONE_RE.test(phone.trim())) {
    errors.phone = "Please enter a valid 10-digit phone/mobile number.";
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (typeof professionalType !== "string" || !professionalType.trim()) {
    errors.professionalType = "Please select your professional category.";
  }
  if (typeof city !== "string" || city.trim().length < 2) {
    errors.city = "Please provide your city/district.";
  }
  if (typeof inquiryType !== "string" || !inquiryType.trim()) {
    errors.inquiryType = "Please select an enquiry purpose.";
  }
  if (typeof message !== "string" || message.trim().length < 5) {
    errors.message = "Please include brief details (at least 5 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // In production, dispatch to CRM / email SMTP / notification webhook.
  const referenceId = `UDY-${Date.now().toString(36).toUpperCase()}`;

  return NextResponse.json({
    success: true,
    referenceId,
    product: productName || productSlug || null,
    message: "Thank you for contacting UDY Healthcare. Our commercial team will get in touch promptly.",
  });
}
