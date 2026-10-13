"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const fields: { name: keyof FormState; label: string; type: string; textarea?: boolean }[] = [
  { name: "fullName", label: "Full Name", type: "text" },
  { name: "phone", label: "Phone Number", type: "tel" },
  { name: "email", label: "Email Address", type: "email" },
  { name: "subject", label: "Subject / Product Enquiry", type: "text" },
  { name: "message", label: "Message Details", type: "text", textarea: true },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  const [prevProductParam, setPrevProductParam] = useState(productParam);
  const [values, setValues] = useState<FormState>(() => ({
    ...initialState,
    subject: productParam ? `Enquiry regarding ${productParam}` : "",
    message: productParam
      ? `Hello UDY Healthcare team, I would like to request more information regarding ${productParam}.`
      : "",
  }));
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (productParam !== prevProductParam) {
    setPrevProductParam(productParam);
    if (productParam) {
      setValues((v) => ({
        ...v,
        subject: `Enquiry regarding ${productParam}`,
        message:
          v.message ||
          `Hello UDY Healthcare team, I would like to request more information regarding ${productParam}.`,
      }));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
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

      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-teal-100 bg-teal-50/50 p-10 text-center"
      >
        <CheckCircle2 aria-hidden="true" size={44} className="text-teal-600" />
        <h3 className="text-xl font-bold text-slate-900">Enquiry Submitted</h3>
        <p className="max-w-sm text-sm text-slate-600">
          Thank you for reaching out to UDY Healthcare Private Limited. Our team will review your enquiry and respond promptly.
        </p>
        <Button variant="secondary" onClick={() => setStatus("idle")} className="mt-2">
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {fields.map((field) => {
        const error = errors[field.name];
        const inputId = `contact-${field.name}`;
        const errorId = `${inputId}-error`;

        return (
          <div key={field.name} className="flex flex-col gap-1.5">
            <label htmlFor={inputId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
              {field.label}
            </label>
            {field.textarea ? (
              <textarea
                id={inputId}
                required
                rows={5}
                value={values[field.name]}
                onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                className="min-h-32 resize-y rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
              />
            ) : (
              <input
                id={inputId}
                type={field.type}
                required
                value={values[field.name]}
                onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                className="min-h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
              />
            )}
            {error && (
              <p id={errorId} className="text-xs font-medium text-red-600">
                {error}
              </p>
            )}
          </div>
        );
      })}

      {status === "error" && Object.keys(errors).length === 0 && (
        <p role="alert" className="text-sm font-medium text-red-600">
          Something went wrong submitting your form. Please try again.
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === "loading"} className="self-start mt-2">
        {status === "loading" ? (
          <>
            <Loader2 aria-hidden="true" size={16} className="animate-spin" /> Submitting…
          </>
        ) : (
          "Submit Corporate Enquiry"
        )}
      </Button>
    </form>
  );
}
