"use client";

import { useState } from "react";
import { company } from "@/data/company";
import { Building2, Check, Copy, FileCheck2, MapPin, ShieldCheck, UserCheck } from "lucide-react";

export function CompanyInfoCard() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-white p-6 shadow-card transition-all duration-300 hover:shadow-card-hover sm:p-8 lg:p-10">
      {/* Background Accent Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-sky-100/30 blur-3xl"
      />

      {/* Header with Verified Badge */}
      <div className="relative z-10 flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-md shadow-brand-primary/20">
            <Building2 size={24} aria-hidden="true" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                {company.legalName}
              </h3>
              <span className="hidden items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                {company.status}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Registered under the Companies Act, 2013 · ROC Karnataka
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50/80 px-3 py-1 text-xs font-semibold text-sky-800">
            <ShieldCheck size={14} className="text-sky-600" />
            MCA Verified
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 sm:hidden">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            {company.status}
          </span>
        </div>
      </div>

      {/* Key Registry Grid */}
      <div className="relative z-10 mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Incorporation Date */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-colors hover:bg-slate-50">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <FileCheck2 size={15} className="text-brand-primary" />
            Date of Incorporation
          </div>
          <p className="mt-1.5 text-sm font-bold text-slate-900">{company.established}</p>
          <span className="text-[11px] text-slate-500">Private Limited Company</span>
        </div>

        {/* Corporate Director */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-colors hover:bg-slate-50">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <UserCheck size={15} className="text-brand-secondary" />
            Board of Directors
          </div>
          <p className="mt-1.5 text-sm font-bold text-slate-900">{company.director}</p>
          <span className="text-[11px] text-slate-500">Managing Leadership</span>
        </div>

        {/* Corporate Status */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-colors hover:bg-slate-50">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <ShieldCheck size={15} className="text-emerald-600" />
            Operational Standing
          </div>
          <p className="mt-1.5 text-sm font-bold text-emerald-700">Active & Compliant</p>
          <span className="text-[11px] text-slate-500">RoC Bangalore Jurisdiction</span>
        </div>

        {/* CIN */}
        <div className="group rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-colors hover:bg-slate-50 sm:col-span-1 lg:col-span-1">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500">
            <span>Corporate Identity No. (CIN)</span>
            <button
              type="button"
              onClick={() => handleCopy(company.cin, "cin")}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-primary hover:underline cursor-pointer"
              title="Copy CIN"
            >
              {copiedKey === "cin" ? (
                <>
                  <Check size={12} className="text-emerald-600" />
                  <span className="text-emerald-600">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <p className="mt-1.5 font-mono text-xs font-bold text-slate-900 tracking-wide sm:text-sm break-all">
            {company.cin}
          </p>
        </div>

        {/* GSTIN */}
        <div className="group rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-colors hover:bg-slate-50 sm:col-span-1 lg:col-span-2">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500">
            <span>Goods & Services Tax (GSTIN)</span>
            <button
              type="button"
              onClick={() => handleCopy(company.gstin, "gstin")}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-primary hover:underline cursor-pointer"
              title="Copy GSTIN"
            >
              {copiedKey === "gstin" ? (
                <>
                  <Check size={12} className="text-emerald-600" />
                  <span className="text-emerald-600">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <p className="mt-1.5 font-mono text-xs font-bold text-slate-900 tracking-wide sm:text-sm">
            {company.gstin}
          </p>
        </div>
      </div>

      {/* Registered Office Banner */}
      <div className="relative z-10 mt-5 rounded-2xl border border-sky-100/80 bg-sky-50/50 p-5">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-brand-primary shadow-xs">
            <MapPin size={16} aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold tracking-wider uppercase text-brand-primary">
              {company.registeredOffice.label}
            </span>
            <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
              {company.registeredOffice.lines.join(" ")}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Transparency Assurance */}
      <div className="relative z-10 mt-5 flex items-center justify-between text-[11px] text-slate-400">
        <span>Publicly verifiable with Ministry of Corporate Affairs (MCA, Govt. of India).</span>
        <span className="font-medium text-slate-500">Bengaluru, KA 560049</span>
      </div>
    </div>
  );
}
