import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-.\s]{7,15}$/;

// Stub endpoint: validates and acknowledges the enquiry. Wire this up to a
// real email/CRM delivery service once one is chosen for production.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { fullName, phone, email, subject, message } = body as Record<string, unknown>;

  const errors: Record<string, string> = {};
  if (typeof fullName !== "string" || fullName.trim().length < 2)
    errors.fullName = "Enter your full name.";
  if (typeof phone !== "string" || !PHONE_RE.test(phone.trim()))
    errors.phone = "Enter a valid phone number.";
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim()))
    errors.email = "Enter a valid email address.";
  if (typeof subject !== "string" || subject.trim().length < 2)
    errors.subject = "Enter a subject.";
  if (typeof message !== "string" || message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  return NextResponse.json({ success: true });
}
