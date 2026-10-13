"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Loader2,
  CheckCircle2,
  Send,
  Building2,
  User,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  FileText,
  RotateCcw,
} from "lucide-react";
import { products, type Product } from "@/data/products";
import { SelectedProductPreview } from "./SelectedProductPreview";
import { Button } from "./Button";

type EnquiryFormState = {
  fullName: string;
  phone: string;
  email: string;
  professionalType: string;
  city: string;
  state: string;
  inquiryType: string;
  productSlug: string;
  message: string;
};

const initialFormState: EnquiryFormState = {
  fullName: "",
  phone: "",
  email: "",
  professionalType: "",
  city: "",
  state: "",
  inquiryType: "Product Distribution / Monopoly Franchise",
  productSlug: "",
  message: "",
};

const professionalTypes = [
  "PCD Pharma Franchise / Distributor",
  "Doctor / Pediatrician / Gynecologist",
  "Retail Chemist / Pharmacist",
  "Hospital / Nursing Home / Medical Institution",
  "Wholesale Stockist / C&F Agent",
  "Other Professional",
];

const inquiryTypes = [
  "Product Distribution / Monopoly Franchise",
  "Product Detailing & Doctor Samples",
  "Bulk Procurement & Commercial Rates",
  "Hospital & Institutional Supply",
  "Regulatory / Formulation Information",
  "General Commercial Partnership",
];

export function EnquiryForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const productParam = searchParams.get("product");
  const [prevProductParam, setPrevProductParam] = useState(productParam);

  const initialMatched = productParam
    ? products.find((p) => p.slug.toLowerCase() === productParam.toLowerCase()) ||
      products.find((p) => p.name.toLowerCase() === productParam.toLowerCase()) ||
      null
    : null;

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(initialMatched);
  const [values, setValues] = useState<EnquiryFormState>(() => ({
    ...initialFormState,
    productSlug: initialMatched ? initialMatched.slug : "",
    message: initialMatched
      ? `Hello UDY Healthcare, I am interested in inquiring about ${initialMatched.name} (${initialMatched.composition || initialMatched.category || "formulation"}) for distribution and availability in my territory.`
      : "",
  }));
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [referenceId, setReferenceId] = useState<string>("");

  if (productParam !== prevProductParam) {
    setPrevProductParam(productParam);
    if (!productParam) {
      setSelectedProduct(null);
      setValues((v) => ({ ...v, productSlug: "" }));
    } else {
      const matched =
        products.find((p) => p.slug.toLowerCase() === productParam.toLowerCase()) ||
        products.find((p) => p.name.toLowerCase() === productParam.toLowerCase()) ||
        null;

      setSelectedProduct(matched);
      if (matched) {
        setValues((v) => ({
          ...v,
          productSlug: matched.slug,
          message:
            v.message ||
            `Hello UDY Healthcare, I am interested in inquiring about ${matched.name} (${matched.composition || matched.category || "formulation"}) for distribution and availability in my territory.`,
        }));
      }
    }
  }

  function handleProductSelect(slug: string) {
    if (!slug) {
      setSelectedProduct(null);
      setValues((v) => ({ ...v, productSlug: "" }));
      router.replace("/enquiry", { scroll: false });
      return;
    }
    const matched = products.find((p) => p.slug === slug);
    if (matched) {
      setSelectedProduct(matched);
      setValues((v) => ({
        ...v,
        productSlug: matched.slug,
        message: `Hello UDY Healthcare, I am interested in inquiring about ${matched.name} (${matched.composition || matched.category || "formulation"}) for distribution and availability in my territory.`,
      }));
      router.replace(`/enquiry?product=${matched.slug}`, { scroll: false });
    }
  }

  function handleClearProduct() {
    setSelectedProduct(null);
    setValues((v) => ({ ...v, productSlug: "" }));
    router.replace("/enquiry", { scroll: false });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    try {
      const payload = {
        ...values,
        productName: selectedProduct?.name || null,
      };

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.status === 422) {
        const data = await res.json();
        setErrors(data.errors ?? {});
        setStatus("error");
        return;
      }

      if (!res.ok) {
        setStatus("error");
        return;
      }

      const data = await res.json();
      setReferenceId(data.referenceId || `UDY-${Date.now().toString(36).toUpperCase()}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50/70 via-white to-sky-50/40 p-8 sm:p-12 text-center shadow-lg"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-lg shadow-teal-600/30">
          <CheckCircle2 size={36} aria-hidden="true" />
        </div>

        <div>
          <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-800">
            Enquiry Received · Reference: {referenceId}
          </span>
          <h3 className="mt-3 text-2xl font-bold text-slate-900">Thank You for Your Enquiry!</h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
            Your commercial request regarding{" "}
            <strong className="text-slate-800">
              {selectedProduct ? selectedProduct.name : "UDY Healthcare Products"}
            </strong>{" "}
            has been successfully routed to our distribution coordination desk.
          </p>
        </div>

        <div className="w-full max-w-sm rounded-2xl border border-slate-100 bg-white p-4 text-left text-xs space-y-1.5 shadow-2xs">
          <div className="flex justify-between">
            <span className="text-slate-400 font-medium">Contact:</span>
            <span className="font-semibold text-slate-800">{values.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400 font-medium">Phone:</span>
            <span className="font-semibold text-slate-800">{values.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400 font-medium">Territory:</span>
            <span className="font-semibold text-slate-800">
              {values.city}
              {values.state ? `, ${values.state}` : ""}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400 font-medium">Response SLA:</span>
            <span className="font-bold text-teal-700">Within 24 business hours</span>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="secondary"
            onClick={() => {
              setStatus("idle");
              setValues(initialFormState);
              setSelectedProduct(null);
            }}
            className="text-xs"
          >
            <RotateCcw size={14} /> Submit Another Enquiry
          </Button>

          <Button href="/products" variant="primary" className="text-xs">
            Browse All Products →
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Selected Product Banner */}
      {selectedProduct && (
        <SelectedProductPreview product={selectedProduct} onClear={handleClearProduct} />
      )}

      {/* Product Selection Dropdown (if no product selected or switching) */}
      {!selectedProduct && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="enquiry-product" className="text-xs font-bold text-slate-700">
            Target Product <span className="text-slate-400 font-normal">(Optional — choose one or general inquiry)</span>
          </label>
          <select
            id="enquiry-product"
            value={values.productSlug}
            onChange={(e) => handleProductSelect(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs font-medium text-slate-800 transition-all focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20"
          >
            <option value="">-- General Enquiry (All Products / Full Portfolio) --</option>
            <optgroup label="Pediatric Healthcare">
              {products
                .filter((p) => p.category === "pediatric")
                .map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name} {p.form ? `(${p.form})` : ""}
                  </option>
                ))}
            </optgroup>
            <optgroup label="Gynecology & Women's Health">
              {products
                .filter((p) => p.category === "gynecology")
                .map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name} {p.form ? `(${p.form})` : ""}
                  </option>
                ))}
            </optgroup>
          </select>
        </div>
      )}

      {/* Row 1: Full Name & Professional Role */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="enquiry-fullName" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <User size={13} className="text-slate-400" /> Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="enquiry-fullName"
            type="text"
            required
            value={values.fullName}
            onChange={(e) => setValues({ ...values, fullName: e.target.value })}
            placeholder="Dr. / Mr. / Ms. Name"
            className={`w-full rounded-xl border px-3.5 py-2.5 text-xs font-medium text-slate-900 transition-all focus:outline-none focus:ring-2 ${
              errors.fullName
                ? "border-rose-300 bg-rose-50/30 focus:border-rose-500 focus:ring-rose-500/20"
                : "border-slate-200 bg-slate-50/60 focus:border-sky-500 focus:bg-white focus:ring-sky-500/20"
            }`}
          />
          {errors.fullName && <span className="text-[11px] font-medium text-rose-600">{errors.fullName}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="enquiry-professionalType" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Building2 size={13} className="text-slate-400" /> Professional Category <span className="text-rose-500">*</span>
          </label>
          <select
            id="enquiry-professionalType"
            required
            value={values.professionalType}
            onChange={(e) => setValues({ ...values, professionalType: e.target.value })}
            className={`w-full rounded-xl border px-3.5 py-2.5 text-xs font-medium text-slate-900 transition-all focus:outline-none focus:ring-2 ${
              errors.professionalType
                ? "border-rose-300 bg-rose-50/30 focus:border-rose-500 focus:ring-rose-500/20"
                : "border-slate-200 bg-slate-50/60 focus:border-sky-500 focus:bg-white focus:ring-sky-500/20"
            }`}
          >
            <option value="">-- Select Your Role --</option>
            {professionalTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.professionalType && (
            <span className="text-[11px] font-medium text-rose-600">{errors.professionalType}</span>
          )}
        </div>
      </div>

      {/* Row 2: Phone & Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="enquiry-phone" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Phone size={13} className="text-slate-400" /> Phone / WhatsApp <span className="text-rose-500">*</span>
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            required
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className={`w-full rounded-xl border px-3.5 py-2.5 text-xs font-medium text-slate-900 transition-all focus:outline-none focus:ring-2 ${
              errors.phone
                ? "border-rose-300 bg-rose-50/30 focus:border-rose-500 focus:ring-rose-500/20"
                : "border-slate-200 bg-slate-50/60 focus:border-sky-500 focus:bg-white focus:ring-sky-500/20"
            }`}
          />
          {errors.phone && <span className="text-[11px] font-medium text-rose-600">{errors.phone}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="enquiry-email" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Mail size={13} className="text-slate-400" /> Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="enquiry-email"
            type="email"
            required
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            placeholder="name@example.com"
            className={`w-full rounded-xl border px-3.5 py-2.5 text-xs font-medium text-slate-900 transition-all focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-rose-300 bg-rose-50/30 focus:border-rose-500 focus:ring-rose-500/20"
                : "border-slate-200 bg-slate-50/60 focus:border-sky-500 focus:bg-white focus:ring-sky-500/20"
            }`}
          />
          {errors.email && <span className="text-[11px] font-medium text-rose-600">{errors.email}</span>}
        </div>
      </div>

      {/* Row 3: City & State (Territory) */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="enquiry-city" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <MapPin size={13} className="text-slate-400" /> City / District <span className="text-rose-500">*</span>
          </label>
          <input
            id="enquiry-city"
            type="text"
            required
            value={values.city}
            onChange={(e) => setValues({ ...values, city: e.target.value })}
            placeholder="e.g. Pune / Mumbai / Delhi"
            className={`w-full rounded-xl border px-3.5 py-2.5 text-xs font-medium text-slate-900 transition-all focus:outline-none focus:ring-2 ${
              errors.city
                ? "border-rose-300 bg-rose-50/30 focus:border-rose-500 focus:ring-rose-500/20"
                : "border-slate-200 bg-slate-50/60 focus:border-sky-500 focus:bg-white focus:ring-sky-500/20"
            }`}
          />
          {errors.city && <span className="text-[11px] font-medium text-rose-600">{errors.city}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="enquiry-state" className="text-xs font-bold text-slate-700">
            State / Region
          </label>
          <input
            id="enquiry-state"
            type="text"
            value={values.state}
            onChange={(e) => setValues({ ...values, state: e.target.value })}
            placeholder="e.g. Maharashtra"
            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-xs font-medium text-slate-900 transition-all focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20"
          />
        </div>
      </div>

      {/* Enquiry Purpose */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="enquiry-type" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
          <HelpCircle size={13} className="text-slate-400" /> Enquiry Purpose <span className="text-rose-500">*</span>
        </label>
        <select
          id="enquiry-type"
          required
          value={values.inquiryType}
          onChange={(e) => setValues({ ...values, inquiryType: e.target.value })}
          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 text-xs font-medium text-slate-900 transition-all focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20"
        >
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Message Details */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="enquiry-message" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
          <FileText size={13} className="text-slate-400" /> Enquiry Details / Territory Specifications{" "}
          <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="enquiry-message"
          required
          rows={4}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          placeholder="Please mention your territory coverage, existing distribution networks, or specific product quantities needed..."
          className={`w-full rounded-xl border p-3.5 text-xs font-medium text-slate-900 transition-all focus:outline-none focus:ring-2 ${
            errors.message
              ? "border-rose-300 bg-rose-50/30 focus:border-rose-500 focus:ring-rose-500/20"
              : "border-slate-200 bg-slate-50/60 focus:border-sky-500 focus:bg-white focus:ring-sky-500/20"
          }`}
        />
        {errors.message && <span className="text-[11px] font-medium text-rose-600">{errors.message}</span>}
      </div>

      {/* General Error Alert */}
      {status === "error" && Object.keys(errors).length === 0 && (
        <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-3 text-xs font-semibold text-rose-700">
          An error occurred while submitting your enquiry. Please check your details or call our office directly.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-sky-700 shadow-md shadow-sky-600/25 active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Transmitting Commercial Enquiry...
          </>
        ) : (
          <>
            <Send size={16} /> Submit Product Enquiry
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-slate-400">
        Confidential commercial transmission for UDY Healthcare Private Limited. No SPAM.
      </p>
    </form>
  );
}
