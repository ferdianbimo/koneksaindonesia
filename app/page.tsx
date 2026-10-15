"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Data types
type ServiceCategory = "semua" | "web" | "app" | "enterprise";

interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  features: string[];
  deliverable: string;
  badge: string;
}

export default function Home() {
  // Client state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ServiceCategory>("semua");
  const [selectedPackage, setSelectedPackage] = useState<string>("Pro");
  
  // Interactive consultation form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "Website Development",
    packageChoice: "Paket Pro (Rp 2.600.000)",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Services data (8 services requested)
  const services: ServiceItem[] = [
    {
      id: "web-dev",
      title: "Website Development",
      category: "web",
      shortDesc: "Pembangunan situs web kustom dengan performa tinggi, struktur SEO optimal, dan kompatibilitas multi-perangkat.",
      features: ["Next.js & React", "Optimasi Core Web Vitals", "Integrasi Database & API"],
      deliverable: "Source code lengkap, setup hosting, dan panduan teknis",
      badge: "Flagship",
    },
    {
      id: "landing-page",
      title: "Landing Page",
      category: "web",
      shortDesc: "Halaman arahan dengan fokus konversi tinggi untuk promosi produk, campaign iklan, dan akuisisi pelanggan baru.",
      features: ["Copywriting terarah", "Loading super cepat", "Integrasi WhatsApp & Form"],
      deliverable: "Desain responsif, domain .com, dan tracking analytics",
      badge: "High Conversion",
    },
    {
      id: "erp-system",
      title: "ERP System (Enterprise)",
      category: "enterprise",
      shortDesc: "Sistem perencanaan sumber daya terintegrasi untuk mengelola inventaris, keuangan, SDM, dan rantai pasok bisnis.",
      features: ["Manajemen modul terpadu", "Multi-user role & audit log", "Laporan analitik real-time"],
      deliverable: "Arsitektur database aman, deployment cloud, dan pelatihan staf",
      badge: "Enterprise",
    },
    {
      id: "ui-ux",
      title: "UI / UX Design",
      category: "app",
      shortDesc: "Riset pengguna, pembuatan arsitektur informasi, wireframe, hingga desain antarmuka interaktif di Figma.",
      features: ["Design system konsisten", "Interactive prototype", "Uji keterbacaan & aksesibilitas"],
      deliverable: "File master Figma, design token, dan aset grafis siap koding",
      badge: "Human Centered",
    },
    {
      id: "mobile-app",
      title: "Aplikasi Mobile",
      category: "app",
      shortDesc: "Pengembangan aplikasi smartphone Android dan iOS yang responsif, stabil, dan terintegrasi dengan backend modern.",
      features: ["Cross-platform efisien", "Offline caching & sync", "Integrasi Push Notification"],
      deliverable: "Build APK/AAB siap publikasi dan dokumentasi REST API",
      badge: "iOS & Android",
    },
    {
      id: "company-profile",
      title: "Company Profile",
      category: "web",
      shortDesc: "Situs profil perusahaan yang dirancang elegan untuk membangun reputasi profesional di mata klien dan investor.",
      features: ["Katalog produk/jasa", "Struktur legalitas & visi misi", "Koneksi media sosial resmi"],
      deliverable: "Email bisnis korporat, SSL aktif, dan panduan maintenance",
      badge: "Corporate Trust",
    },
    {
      id: "software-custom",
      title: "Software Custom",
      category: "enterprise",
      shortDesc: "Pembuatan perangkat lunak khusus yang disesuaikan secara presisi dengan alur kerja unik operasional bisnis Anda.",
      features: ["Spesifikasi tailored-fit", "Skalabilitas arsitektur", "Keamanan enkripsi data"],
      deliverable: "Hak milik kode sumber, SLA pemeliharaan, dan garansi teknis",
      badge: "Tailored",
    },
    {
      id: "crm-system",
      title: "Customer Relationship Management (CRM)",
      category: "enterprise",
      shortDesc: "Platform digital untuk melacak prospek, automasi follow-up penjualan, dan merawat hubungan pelanggan jangka panjang.",
      features: ["Pipeline deals visual", "Riwayat interaksi pelanggan", "Notifikasi otomatis WhatsApp/Email"],
      deliverable: "Setup dashboard admin, migrasi data kontak, dan pelatihan tim sales",
      badge: "Growth Engine",
    },
  ];

  const filteredServices =
    activeTab === "semua"
      ? services
      : services.filter((s) => s.category === activeTab);

  // Tech stack items
  const techStack = [
    { name: "Next.js", category: "Framework", tag: "Fullstack" },
    { name: "React", category: "Frontend", tag: "UI Library" },
    { name: "TypeScript", category: "Language", tag: "Type Safety" },
    { name: "JavaScript", category: "Language", tag: "Core Web" },
    { name: "HTML5", category: "Markup", tag: "Semantic" },
    { name: "CSS3", category: "Styling", tag: "Modern Layout" },
    { name: "Laravel", category: "Backend", tag: "PHP Framework" },
    { name: "PHP", category: "Backend", tag: "Server Side" },
    { name: "Python", category: "Backend", tag: "Data & Scripting" },
    { name: "MySQL", category: "Database", tag: "Relational DB" },
    { name: "Docker", category: "DevOps", tag: "Containerization" },
    { name: "Figma", category: "Design", tag: "UI/UX & Prototyping" },
    { name: "Git", category: "Version Control", tag: "Collaboration" },
  ];

  // Pricing packages data
  const pricingPackages = [
    {
      name: "Paket Lite",
      price: "Rp 1.500.000",
      description: "Solusi hemat dan cepat untuk memulai kehadiran digital bisnis Anda dengan standar profesional.",
      idealFor: "UMKM, Portfolio Pribadi, & Profil Usaha Awal",
      features: [
        "Maksimal 5 Halaman Web",
        "Hosting Cloud 1 Tahun Penuh",
        "Domain .com Gratis 1 Tahun",
        "Maintenance & Monitoring 1 Tahun",
        "Modul Dokumentasi Lengkap",
        "Halaman Responsif di Semua Layar",
        "Basic Copywriting Terarah",
        "Custom UI/UX Khusus Brand Anda",
        "Setup Email Bisnis Resmi",
        "Sertifikat Keamanan SSL Aktif",
        "Website Statis Cepat (Tanpa CMS)",
        "Full Source Code Diberikan (.zip)",
        "Maksimal Revisi 2x",
      ],
      highlight: false,
      whatsappText: "Halo Koneksa Indonesia, saya tertarik memesan Paket Lite (Rp 1.500.000). Bisakah kita jadwalkan konsultasi?",
    },
    {
      name: "Paket Pro",
      price: "Rp 2.600.000",
      description: "Pilihan paling populer untuk bisnis yang ingin mengelola konten mandiri dan memaksimalkan traffic pencarian.",
      idealFor: "Bisnis Berkembang, Lembaga, & Korporasi Menengah",
      features: [
        "Maksimal 10 Halaman Web",
        "Admin Panel (CMS) untuk Edit Konten",
        "Integrasi Google Analytics 4 (GA4)",
        "Advanced Copywriting Penjualan",
        "Optimasi SEO Teknis & On-Page",
        "Hosting Cloud 1 Tahun Penuh",
        "Domain .com Gratis 1 Tahun",
        "Maintenance & Monitoring 1 Tahun",
        "Custom UI/UX & Responsive Design",
        "Email Bisnis & Sertifikat SSL",
        "Full Source Code Diberikan (.zip)",
        "Maksimal Revisi 4x",
      ],
      highlight: true,
      whatsappText: "Halo Koneksa Indonesia, saya ingin berkonsultasi mengenai Paket Pro (Rp 2.600.000) untuk kebutuhan website perusahaan kami.",
    },
    {
      name: "Paket Max",
      price: "Rp 5.000.000",
      description: "Paket lengkap dengan integrasi transaksi digital dan kapasitas halaman luas untuk skala bisnis yang lebih mapan.",
      idealFor: "Katalog Toko Online, Korporasi, & Sistem Transaksi",
      features: [
        "Maksimal 15 Halaman Web",
        "Integrasi Payment Gateway Otomatis",
        "Semua Fitur Paket Pro Termasuk",
        "Admin Panel (CMS) Khusus & Multi-Role",
        "Integrasi GA4 & Google Search Console",
        "Optimasi Kecepatan Ekstra (CDN & Cache)",
        "Hosting & Domain .com 1 Tahun",
        "Maintenance & Backup Terjadwal 1 Tahun",
        "Email Bisnis Multi Akun & SSL",
        "Full Source Code (.zip) + Deployment",
        "Maksimal Revisi 5x",
      ],
      highlight: false,
      whatsappText: "Halo Koneksa Indonesia, saya ingin mendiskusikan implementasi Paket Max (Rp 5.000.000) termasuk Payment Gateway.",
    },
  ];

  // Handler for form submit to WhatsApp
  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMsg = encodeURIComponent(
      `Halo Koneksa Indonesia!\n\n` +
      `Nama: ${formData.name}\n` +
      `Perusahaan/Institusi: ${formData.company || "-"}\n` +
      `Layanan yang Diminati: ${formData.service}\n` +
      `Pilihan Paket: ${formData.packageChoice}\n` +
      `Pesan/Kebutuhan: ${formData.message}\n\n` +
      `Mohon info tindak lanjut dan estimasi waktu konsultasi. Terima kasih!`
    );
    window.open(`https://wa.me/6288217139228?text=${encodedMsg}`, "_blank");
    setFormSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* =========================================================================
          NAVIGATION BAR
         ========================================================================= */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo & Brand Name */}
          <a
            href="#beranda"
            className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xs transition-transform group-hover:scale-105">
              <Image
                src="/koneksa-logo.jpg"
                alt="Logo Koneksa Indonesia"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-950">
                KONEKSA
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-blue-700 uppercase">
                INDONESIA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#beranda"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 focus:outline-none focus-visible:text-blue-700"
            >
              Beranda
            </a>
            <a
              href="#tentang-kami"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 focus:outline-none focus-visible:text-blue-700"
            >
              Tentang Kami
            </a>
            <a
              href="#layanan"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 focus:outline-none focus-visible:text-blue-700"
            >
              Layanan
            </a>
            <a
              href="#klien"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 focus:outline-none focus-visible:text-blue-700"
            >
              Klien & Tech
            </a>
            <a
              href="#tim"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 focus:outline-none focus-visible:text-blue-700"
            >
              Tim
            </a>
            <a
              href="#harga"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 focus:outline-none focus-visible:text-blue-700"
            >
              Paket Harga
            </a>
            <a
              href="#kontak"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 focus:outline-none focus-visible:text-blue-700"
            >
              Kontak
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://wa.me/6288217139228?text=Halo%20Koneksa%20Indonesia,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20teknologi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-blue-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-98"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-4 pt-2 pb-6 shadow-xl md:hidden">
            <div className="flex flex-col space-y-3 pt-2">
              <a
                href="#beranda"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50"
              >
                Beranda
              </a>
              <a
                href="#tentang-kami"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50"
              >
                Tentang Kami
              </a>
              <a
                href="#layanan"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50"
              >
                Layanan
              </a>
              <a
                href="#klien"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50"
              >
                Klien & Tech
              </a>
              <a
                href="#tim"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50"
              >
                Tim
              </a>
              <a
                href="#harga"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50"
              >
                Paket Harga
              </a>
              <a
                href="#kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50"
              >
                Kontak
              </a>
              <a
                href="https://wa.me/6288217139228?text=Halo%20Koneksa%20Indonesia,%20saya%20ingin%20berkonsultasi."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex h-11 w-full items-center justify-center rounded-lg bg-blue-700 text-center font-semibold text-white shadow-xs"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          HERO SECTION (Beranda Utama)
         ========================================================================= */}
      <section
        id="beranda"
        className="relative overflow-hidden border-b border-slate-200 bg-white pt-16 pb-24 lg:pt-24 lg:pb-32"
      >
        {/* Subtle geometric background motif */}
        <div className="absolute inset-0 bg-tech-dots opacity-60 pointer-events-none" />
        <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none animate-pulse-subtle" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Content Column */}
            <div className="text-center lg:col-span-7 lg:text-left">
              {/* Regional Anchor Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-800 shadow-2xs">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Berpusat di Surabaya, Melayani Seluruh Indonesia</span>
              </div>

              {/* Main Headline & Tagline */}
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Solusi Digital,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-600">
                  Mitra Terpercaya.
                </span>
              </h1>

              {/* Sub-copy */}
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl">
                Koneksa Indonesia hadir untuk menyederhanakan kerumitan teknologi bagi UMKM, profesional, dan korporasi. Kami membangun sistem informasi, website, dan aplikasi yang berstandar tinggi, efisien, serta dirancang untuk pertumbuhan bisnis nyata.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#layanan"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 text-base font-semibold text-white shadow-sm transition-all hover:bg-blue-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-98"
                >
                  Jelajahi Layanan
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href="#kontak"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 text-base font-semibold text-slate-800 shadow-2xs transition-all hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-98"
                >
                  Hubungi Kami
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 sm:max-w-lg lg:max-w-none">
                <div>
                  <div className="text-xl font-bold text-slate-900 sm:text-2xl">100%</div>
                  <div className="mt-1 text-xs font-medium text-slate-500">Source Code Milik Klien</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900 sm:text-2xl">Surabaya</div>
                  <div className="mt-1 text-xs font-medium text-slate-500">Basis Markas Operasional</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900 sm:text-2xl">End-to-End</div>
                  <div className="mt-1 text-xs font-medium text-slate-500">Desain hingga Maintenance</div>
                </div>
              </div>
            </div>

            {/* Right Visual Card Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative Backing Frame */}
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl lg:p-8">
                  {/* Card Header with Logo */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-slate-100 bg-white p-1">
                        <Image
                          src="/koneksa-logo.jpg"
                          alt="Koneksa Indonesia"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h2 className="text-base font-bold text-slate-900">Koneksa Indonesia</h2>
                        <p className="text-xs text-slate-500">Digital Solutions Engine</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Aktif Siaga
                    </span>
                  </div>

                  {/* Architecture Blueprint Mockup */}
                  <div className="mt-6 space-y-4">
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Cakupan Solusi Utama
                      </div>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        <span className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200">
                          Web App
                        </span>
                        <span className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200">
                          Mobile App
                        </span>
                        <span className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200">
                          ERP System
                        </span>
                        <span className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200">
                          CRM
                        </span>
                        <span className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-slate-700 border border-slate-200">
                          UI/UX
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                      <div className="flex items-center justify-between text-xs font-medium text-slate-600">
                        <span>Standar Rekayasa Kode</span>
                        <span className="font-semibold text-blue-700">Optimal</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full w-11/12 rounded-full bg-blue-600" />
                      </div>
                    </div>

                    {/* Quick Support Card */}
                    <div className="flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                      <div>
                        <div className="text-xs font-bold text-blue-950">Konsultasi Langsung</div>
                        <div className="text-xs text-blue-800">Respons cepat via WhatsApp</div>
                      </div>
                      <a
                        href="https://wa.me/6288217139228"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-800 transition-colors"
                      >
                        Chat Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TENTANG KAMI (About Us)
         ========================================================================= */}
      <section id="tentang-kami" className="border-b border-slate-200 bg-slate-50/70 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              Tentang Kami
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Menghadirkan Solusi Digital yang Menyederhanakan Kerumitan
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Koneksa Indonesia berpusat di Surabaya, Jawa Timur. Kami didirikan dengan tekad untuk menjembatani tantangan digitalisasi bagi UMKM, profesional perorangan, hingga korporasi agar memiliki infrastruktur teknologi yang tangguh dan mudah dikelola.
            </p>
          </div>

          {/* Visi & Misi Cards */}
          <div className="mt-16 grid gap-8 lg:grid-cols-12">
            {/* Visi Column */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">Visi Perusahaan</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Menjadi mitra teknologi penyedia layanan di Indonesia yang memberdayakan UMKM, Profesional, dan Korporasi melalui adopsi teknologi yang terjangkau, berkelanjutan, dan berdampak nyata pada efektivitas bisnis.
                </p>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Lokasi: Surabaya, Jawa Timur
                </div>
              </div>
            </div>

            {/* Misi Column (3 Poin Misi) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xs lg:col-span-7">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-950">Misi Perusahaan</h3>
              <p className="mt-2 text-sm text-slate-500">Tiga komitmen inti kami dalam setiap pekerjaan:</p>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 font-bold text-blue-700 text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Penyediaan Layanan Berstandar Tinggi</h4>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      Mengembangkan sistem berbasis teknologi modern yang aman, cepat, dan mudah dipelihara sesuai standar rekayasa perangkat lunak internasional.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 font-bold text-blue-700 text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Efisiensi Sistem & Proses Kerja</h4>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      Menghadirkan otomasi dan integrasi data yang memangkas waktu kerja manual, meminimalisir kesalahan, dan menaikkan produktivitas klien.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 font-bold text-blue-700 text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Kepuasan Klien Jangka Panjang</h4>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      Menjaga komunikasi transparan, memberikan pelatihan komprehensif, dan siap sedia memberikan asistensi teknis berkelanjutan pasca rilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LAYANAN (Services - 8 Layanan Lengkap)
         ========================================================================= */}
      <section id="layanan" className="border-b border-slate-200 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
                Layanan Kami
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Solusi Perangkat Lunak Terintegrasi
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Pilih dari 8 layanan terarah yang dirancang untuk menjawab kebutuhan digitalisasi bisnis Anda dari tahap rancangan hingga implementasi skala penuh.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="mt-6 flex flex-wrap gap-2 md:mt-0">
              {(["semua", "web", "app", "enterprise"] as ServiceCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold capitalize transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    activeTab === cat
                      ? "bg-blue-700 text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat === "semua" ? "Semua Layanan" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredServices.map((svc) => (
              <div
                key={svc.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                      {svc.badge}
                    </span>
                    <span className="text-xs font-medium text-slate-400 capitalize">
                      {svc.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {svc.shortDesc}
                  </p>

                  <div className="mt-4 border-t border-slate-100 pt-3">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Fitur Kunci:
                    </div>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-700">
                      {svc.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <svg className="h-3.5 w-3.5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <a
                    href={`https://wa.me/6288217139228?text=Halo%20Koneksa%20Indonesia,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(svc.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 py-2 text-xs font-semibold text-slate-800 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    Konsultasi Layanan Ini
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          KLIEN & TEKNOLOGI (Clients & Tech Stack)
         ========================================================================= */}
      <section id="klien" className="border-b border-slate-200 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Client Trust Section */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              Kepercayaan Klien
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Telah Dipercaya oleh Berbagai Institusi & Bisnis
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Berikut adalah beberapa institusi dan entitas bisnis yang telah mempercayakan kebutuhan sistem dan solusi teknologinya kepada Koneksa Indonesia:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {/* SMA N 14 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-xs transition-all hover:shadow-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-800 font-extrabold text-xl">
                14
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">SMA N 14</h3>
              <p className="mt-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                Institusi Pendidikan
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Pengembangan sistem informasi dan platform digital pendukung kegiatan operasional serta komunikasi institusi pendidikan.
              </p>
            </div>

            {/* ATM Studio */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-xs transition-all hover:shadow-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-800 font-extrabold text-xl">
                ATM
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">ATM Studio</h3>
              <p className="mt-2 text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                Creative & Digital Studio
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Kolaborasi teknologi digital, optimasi website profil kreatif, dan sistem manajemen portfolio interaktif.
              </p>
            </div>

            {/* PLN Icon Plus */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-xs transition-all hover:shadow-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-800 font-extrabold text-xl">
                PLN
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">PLN Icon Plus</h3>
              <p className="mt-2 text-xs font-semibold text-sky-700 uppercase tracking-wider">
                Telekomunikasi & Energi
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Kemitraan solusi teknologi informasi, digitalisasi alur kerja, dan keandalan sistem berstandar korporasi skala nasional.
              </p>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="mt-24">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Teknologi yang Dikuasai
              </span>
              <h3 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                Tech Stack Modern & Teruji
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Kami menggunakan bahasa pemrograman, framework, dan perkakas terdepan untuk memastikan performa yang cepat dan aman.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-4 text-center transition-all hover:border-blue-400 hover:shadow-xs"
                >
                  <span className="font-bold text-slate-900 text-sm">{tech.name}</span>
                  <span className="mt-1 text-[11px] text-slate-500">{tech.category}</span>
                  <span className="mt-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                    {tech.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TIM KAMI (Our Team)
         ========================================================================= */}
      <section id="tim" className="border-b border-slate-200 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              Struktur Organisasi
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Tim Inti Koneksa Indonesia
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Dipimpin oleh praktisi teknologi yang berkomitmen menghadirkan eksekusi proyek tepat waktu dengan standar profesional tinggi.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {/* Wahyu Firmansyah */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 text-center transition-all hover:border-slate-300 hover:shadow-md">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-blue-700 to-indigo-800 text-white font-extrabold text-2xl shadow-md">
                WF
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-950">Wahyu Firmansyah</h3>
              <div className="mt-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                Founder
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Memimpin visi strategis, kemitraan bisnis, dan arah pengembangan jangka panjang Koneksa Indonesia untuk selalu relevan dengan kebutuhan industri.
              </p>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <a
                  href="https://wa.me/6281328884628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  Hubungi Wahyu (+6281328884628)
                </a>
              </div>
            </div>

            {/* Ferdian Bimo Surya Putra, S.Kom. */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 text-center transition-all hover:border-slate-300 hover:shadow-md">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-700 to-sky-700 text-white font-extrabold text-2xl shadow-md">
                FB
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-950">Ferdian Bimo Surya Putra, S.Kom.</h3>
              <div className="mt-1 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800">
                Full Stack Developer
              </div>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Bertanggung jawab atas arsitektur perangkat lunak, pengembangan antarmuka, backend API, keamanan data, dan integrasi teknis sistem menyeluruh.
              </p>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <a
                  href="https://wa.me/6288217139228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  Hubungi Bimo (+6288217139228)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAKET LAYANAN & HARGA (Pricing - 3 Kartu Paket)
         ========================================================================= */}
      <section id="harga" className="border-b border-slate-200 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              Paket Layanan
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Investasi Transparan Tanpa Biaya Tersembunyi
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Pilihan paket pembuatan website dan sistem dengan rincian fitur jelas, hosting 1 tahun, dan source code penuh.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col justify-between rounded-2xl bg-white p-8 transition-all ${
                  pkg.highlight
                    ? "border-2 border-blue-600 shadow-xl ring-4 ring-blue-100 lg:-translate-y-2"
                    : "border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-700 px-4 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-sm">
                    Paling Direkomendasikan
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-950">{pkg.name}</h3>
                    <span className="text-xs font-semibold text-slate-500">{pkg.idealFor}</span>
                  </div>

                  <div className="mt-5">
                    <span className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-500 ml-1">/ project</span>
                  </div>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-6">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Spesifikasi & Fasilitas Termasuk:
                    </div>
                    <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <svg
                            className={`h-4 w-4 shrink-0 mt-0.5 ${
                              pkg.highlight ? "text-blue-600" : "text-emerald-600"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <a
                    href={`https://wa.me/6288217139228?text=${encodeURIComponent(pkg.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      pkg.highlight
                        ? "bg-blue-700 text-white hover:bg-blue-800 shadow-sm hover:shadow-md focus-visible:ring-blue-600"
                        : "border border-slate-300 bg-slate-50 text-slate-800 hover:border-slate-400 hover:bg-slate-100 focus-visible:ring-slate-400"
                    }`}
                  >
                    Pesan {pkg.name}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-600">
            Butuh spesifikasi khusus di luar paket (misal sistem ERP atau aplikasi mobile terintegrasi)?{" "}
            <a
              href="#kontak"
              className="font-semibold text-blue-700 hover:underline"
            >
              Diskusikan penawaran kustom bersama kami
            </a>
            .
          </div>
        </div>
      </section>

      {/* =========================================================================
          KONTAK KAMI (Contact Us & Interactive Consultation Form)
         ========================================================================= */}
      <section id="kontak" className="border-b border-slate-200 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Contact Info Column */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
                Kontak & Alamat
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Mari Mulai Diskusikan Solusi Bisnis Anda
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Hubungi kami untuk konsultasi awal, penawaran harga, atau presentasi teknis. Kami siap menyapa Anda langsung maupun secara daring.
              </p>

              <div className="mt-8 space-y-6">
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Alamat Kantor</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      Jl. Sidosermo Gg. Damri No.39, Sidosermo, Kec. Wonocolo, Surabaya, Jawa Timur 60239
                    </p>
                  </div>
                </div>

                {/* WhatsApp Contacts */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Kontak WhatsApp Resmi</h3>
                    <div className="mt-1.5 space-y-1 text-sm">
                      <div>
                        <a
                          href="https://wa.me/6288217139228"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-700 hover:underline"
                        >
                          +62 882-1713-9228
                        </a>{" "}
                        <span className="text-slate-500">(Bimo)</span>
                      </div>
                      <div>
                        <a
                          href="https://wa.me/6281328884628"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-700 hover:underline"
                        >
                          +62 813-2888-4628
                        </a>{" "}
                        <span className="text-slate-500">(Wahyu)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Email Korespondensi</h3>
                    <p className="mt-1 text-sm">
                      <a
                        href="mailto:koneksaindonesia@gmail.com"
                        className="font-medium text-blue-700 hover:underline"
                      >
                        koneksaindonesia@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Media Sosial</h3>
                    <div className="mt-1 flex flex-wrap gap-4 text-sm">
                      <a
                        href="https://instagram.com/koneksaindonesia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-700 hover:underline"
                      >
                        Instagram: @koneksaindonesia
                      </a>
                      <a
                        href="https://tiktok.com/@koneksaindonesia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-700 hover:underline"
                      >
                        TikTok: @koneksaindonesia
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Form Column */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 shadow-xs">
                <h3 className="text-xl font-bold text-slate-950">Formulir Permintaan Konsultasi</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Isi data proyek Anda, pesan akan otomatis disiapkan untuk dikirim langsung via WhatsApp.
                </p>

                <form onSubmit={handleConsultationSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Budi Santoso"
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-2xs focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase">
                        Perusahaan / Usaha
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Contoh: CV Maju Lancar"
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-2xs focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase">
                        Layanan yang Dibutuhkan
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-2xs focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="ERP System">ERP System</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Aplikasi Mobile">Aplikasi Mobile</option>
                        <option value="Company Profile">Company Profile</option>
                        <option value="Software Custom">Software Custom</option>
                        <option value="CRM System">CRM System</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase">
                        Pilihan Paket Harga
                      </label>
                      <select
                        value={formData.packageChoice}
                        onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-2xs focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      >
                        <option value="Paket Lite (Rp 1.500.000)">Paket Lite (Rp 1.500.000)</option>
                        <option value="Paket Pro (Rp 2.600.000)">Paket Pro (Rp 2.600.000)</option>
                        <option value="Paket Max (Rp 5.000.000)">Paket Max (Rp 5.000.000)</option>
                        <option value="Paket Custom / Enterprise">Paket Custom / Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase">
                      Ringkasan Kebutuhan / Pesan *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan kebutuhan website atau sistem bisnis Anda secara singkat..."
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-2xs focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-98"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    Kirim Pesan via WhatsApp
                  </button>

                  {formSubmitted && (
                    <div className="rounded-lg bg-emerald-50 p-3 text-xs text-emerald-800 text-center font-medium">
                      Pesan Anda telah diteruskan ke WhatsApp resmi Koneksa Indonesia.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOOTER
         ========================================================================= */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-white p-1">
                  <Image
                    src="/koneksa-logo.jpg"
                    alt="Koneksa Indonesia"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-lg font-bold tracking-tight text-white">
                    KONEKSA INDONESIA
                  </span>
                  <p className="text-xs text-blue-400 font-medium">Solusi Digital, Mitra Terpercaya.</p>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm text-slate-400 leading-relaxed">
                Penyedia solusi digital berpusat di Surabaya yang menyederhanakan kerumitan teknologi untuk UMKM, profesional, dan korporasi di seluruh Indonesia.
              </p>
              <div className="mt-4 text-xs text-slate-400">
                Alamat: Jl. Sidosermo Gg. Damri No.39, Sidosermo, Kec. Wonocolo, Surabaya, Jawa Timur 60239
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigasi Halaman</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href="#beranda" className="hover:text-white transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#tentang-kami" className="hover:text-white transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="hover:text-white transition-colors">
                    Layanan Kami
                  </a>
                </li>
                <li>
                  <a href="#klien" className="hover:text-white transition-colors">
                    Klien & Portofolio
                  </a>
                </li>
                <li>
                  <a href="#tim" className="hover:text-white transition-colors">
                    Struktur Tim
                  </a>
                </li>
                <li>
                  <a href="#harga" className="hover:text-white transition-colors">
                    Paket Layanan
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="hover:text-white transition-colors">
                    Kontak & Alamat
                  </a>
                </li>
              </ul>
            </div>

            {/* Official Website & Contact */}
            <div className="lg:col-span-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Website & Kontak Resmi</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <span className="text-slate-500 block text-xs">Website Resmi:</span>
                  <a
                    href="https://www.koneksaindonesia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-400 hover:text-blue-300"
                  >
                    www.koneksaindonesia.com
                  </a>
                </li>
                <li>
                  <span className="text-slate-500 block text-xs">Email:</span>
                  <a href="mailto:koneksaindonesia@gmail.com" className="text-slate-300 hover:text-white">
                    koneksaindonesia@gmail.com
                  </a>
                </li>
                <li>
                  <span className="text-slate-500 block text-xs">WhatsApp:</span>
                  <span className="text-slate-300">
                    +62 882-1713-9228 (Bimo) | +62 813-2888-4628 (Wahyu)
                  </span>
                </li>
                <li>
                  <span className="text-slate-500 block text-xs">Media Sosial:</span>
                  <span className="text-slate-300">
                    Instagram: @koneksaindonesia | TikTok: @koneksaindonesia
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800 pt-8 sm:flex-row text-xs text-slate-500">
            <div>
              &copy; 2026 Koneksa Indonesia. Seluruh hak cipta dilindungi undang-undang.
            </div>
            <div className="mt-4 sm:mt-0">
              <a
                href="https://www.koneksaindonesia.com"
                className="text-slate-400 hover:text-white"
              >
                www.koneksaindonesia.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
