import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganizationSchema } from "@/components/OrganizationSchema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.udyhealthcare.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UDY Healthcare Private Limited | Pharmaceutical & Healthcare Products",
    template: "%s | UDY Healthcare Private Limited",
  },
  description:
    "UDY Healthcare Private Limited develops, markets and distributes pharmaceutical and healthcare products across pediatric, gynecology, general healthcare and specialized segments.",
  openGraph: {
    type: "website",
    siteName: "UDY Healthcare Private Limited",
    title: "UDY Healthcare Private Limited | Pharmaceutical & Healthcare Products",
    description:
      "UDY Healthcare Private Limited develops, markets and distributes pharmaceutical and healthcare products across pediatric, gynecology, general healthcare and specialized segments.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <OrganizationSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-primary focus:px-5 focus:py-2.5 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
