import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koneksa Indonesia | Solusi Digital, Mitra Terpercaya",
  description: "Penyedia solusi digital berpusat di Surabaya yang menyederhanakan kerumitan teknologi untuk UMKM, Profesional, dan Korporasi di Indonesia.",
  keywords: [
    "Koneksa Indonesia",
    "Software House Surabaya",
    "Jasa Website Surabaya",
    "ERP System",
    "Aplikasi Mobile",
    "UI UX Design",
    "Solusi Digital",
    "Landing Page UMKM"
  ],
  authors: [{ name: "Koneksa Indonesia" }],
  icons: {
    icon: "/koneksa-logo.jpg",
    apple: "/koneksa-logo.jpg",
  },
  openGraph: {
    title: "Koneksa Indonesia | Solusi Digital, Mitra Terpercaya",
    description: "Menyederhanakan kerumitan teknologi bagi UMKM, profesional, dan korporasi.",
    url: "https://www.koneksaindonesia.com",
    siteName: "Koneksa Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
