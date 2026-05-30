import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BtoB SaaS Dashboard Catalog",
  description:
    "React / Next.js / TypeScript frontend catalog for BtoB SaaS analytics dashboards."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
