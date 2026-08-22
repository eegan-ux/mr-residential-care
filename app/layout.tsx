import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MR Residential Care | Supported Living & Habilitative Support in Oregon",
  description:
    "MR Residential Care provides Supported Living and Habilitative Support services in Clackamas County, Oregon, built on extreme ownership, professional advocacy, and unwavering excellence.",
  metadataBase: new URL("https://mrresidentialcare.com"),
  openGraph: {
    title: "MR Residential Care",
    description:
      "Supported Living and Habilitative Support services in Clackamas County, Oregon.",
    url: "https://mrresidentialcare.com",
    siteName: "MR Residential Care",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-navy-900">{children}</body>
    </html>
  );
}
