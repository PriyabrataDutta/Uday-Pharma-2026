import { company } from "@/data/company";

// Factual data only — no ratings, reviews, awards, or certifications.
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.shortName,
    foundingDate: "2020-11-02",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Khata No. 108/1, Abhirudhi Layout, Site No. 16, 2nd Floor, Seegehalli Main Rd, opposite Forties Waterscape Apartment",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560049",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
