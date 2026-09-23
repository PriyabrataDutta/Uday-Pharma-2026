import { company } from "@/data/company";

const rows = [
  { label: "Established", value: company.established },
  { label: "Company Status", value: company.status },
  { label: "CIN", value: company.cin },
  { label: "Director", value: company.director },
  { label: "GSTIN", value: company.gstin },
];

export function CompanyInfoCard() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-text-muted">
        Company Information
      </h3>
      <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="text-xs font-medium text-text-muted">{row.label}</dt>
            <dd className="mt-1 text-sm font-medium text-text-primary">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
