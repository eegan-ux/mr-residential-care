import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MR Residential Care | 24-Hour Residential Care in Oregon",
  description:
    "MR Residential Care provides 24-Hour Residential Care, including habilitative, skill-building support, in Clackamas County, Oregon, built on extreme ownership, professional advocacy, and unwavering excellence.",
  metadataBase: new URL("https://mrresidentialcare.com"),
  openGraph: {
    title: "MR Residential Care",
    description:
      "24-Hour Residential Care, including habilitative support, in Clackamas County, Oregon.",
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
