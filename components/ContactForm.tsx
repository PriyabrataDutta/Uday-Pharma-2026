"use client";

import { useState, type FormEvent } from "react";
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
  { name: "email", label: "Email", type: "email" },
  { name: "subject", label: "Subject", type: "text" },
  { name: "message", label: "Message", type: "text", textarea: true },
];

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
        className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-10 text-center"
      >
        <CheckCircle2 aria-hidden="true" size={40} className="text-brand-secondary" />
        <h3 className="text-lg font-semibold text-text-primary">Enquiry Submitted</h3>
        <p className="max-w-sm text-sm text-text-secondary">
          Thank you for reaching out to UDY Healthcare. Our team will get back to you soon.
        </p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
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
            <label htmlFor={inputId} className="text-sm font-medium text-text-primary">
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
                className="min-h-32 resize-y rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary outline-none focus-visible:border-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary/20"
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
                className="min-h-11 rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary outline-none focus-visible:border-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary/20"
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
          Something went wrong. Please try again.
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === "loading"} className="self-start">
        {status === "loading" ? (
          <>
            <Loader2 aria-hidden="true" size={16} className="animate-spin" /> Submitting…
          </>
        ) : (
          "Submit Enquiry"
        )}
      </Button>
    </form>
  );
}
