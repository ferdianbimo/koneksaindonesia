"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Types
type ServiceCategory = "semua" | "web" | "app" | "enterprise";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  features: string[];
  deliverable: string;
  badge: string;
}

export default function Home() {
  // Navigation & UI state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState<ServiceCategory>("semua");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Consultation form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "Website Development",
    packageChoice: "Paket Pro (Rp 2.600.000)",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);

  // Track window scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Copy address utility
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      "Jl. Sidosermo Gg. Damri No.39, Sidosermo, Kec. Wonocolo, Surabaya, Jawa Timur 60239"
    );
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  // Form submit to WhatsApp
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      `Halo Koneksa Indonesia!\n\n` +
      `Nama: ${formData.name}\n` +
      `Perusahaan / Usaha: ${formData.company || "-"}\n` +
      `Layanan: ${formData.service}\n` +
      `Pilihan Paket: ${formData.packageChoice}\n` +
      `Kebutuhan Proyek: ${formData.message}\n\n` +
      `Mohon informasi lebih lanjut dan jadwal konsultasi. Terima kasih!`
    );
    window.open(`https://wa.me/6288217139228?text=${encoded}`, "_blank");
    setFormSent(true);
  };

  // 8 Official Services
  const services: ServiceItem[] = [
    {
      id: "web-dev",
      num: "01",
      title: "Website Development",
      category: "web",
      shortDesc: "Pembangunan website kustom berkecepatan tinggi, ramah SEO, dan didesain khusus sesuai citra bisnis profesional.",
      features: ["Next.js & React Modern", "Optimasi Core Web Vitals", "Integrasi Database & API"],
      deliverable: "Source code lengkap, setup cloud hosting, panduan teknis",
      badge: "Flagship",
    },
    {
      id: "landing-page",
      num: "02",
      title: "Landing Page",
      category: "web",
      shortDesc: "Halaman konversi tinggi yang dirancang untuk kampanye iklan, promosi produk unggulan, dan akuisisi leads bisnis.",
      features: ["Copywriting persuasif", "Struktur layout cepat", "Integrasi WhatsApp Direct"],
      deliverable: "Domain .com, setup hosting 1 tahun, tracking analytics",
      badge: "High Conversion",
    },
    {
      id: "erp-system",
      num: "03",
      title: "ERP System (Enterprise)",
      category: "enterprise",
      shortDesc: "Sistem perencanaan sumber daya terpadu untuk menghubungkan inventaris, keuangan, pengadaan, dan manajemen operasional.",
      features: ["Modular & scalable", "Hak akses multi-level", "Laporan analitik real-time"],
      deliverable: "Arsitektur database andal, deployment server, pelatihan staf",
      badge: "Enterprise",
    },
    {
      id: "ui-ux",
      num: "04",
      title: "UI / UX Design",
      category: "app",
      shortDesc: "Riset perilaku pengguna, perancangan kawat gambar wireframe, hingga prototipe interaktif berstandar industri di Figma.",
      features: ["Design system konsisten", "Interactive prototype", "Pengujian aksesibilitas"],
      deliverable: "File master Figma, design token, aset grafis siap coding",
      badge: "User Centered",
    },
    {
      id: "mobile-app",
      num: "05",
      title: "Aplikasi Mobile",
      category: "app",
      shortDesc: "Pengembangan aplikasi smartphone Android dan iOS yang gesit, stabil, serta terhubung mulus dengan sistem backend cloud.",
      features: ["Cross-platform efisien", "Offline caching & sync", "Push notification terpadu"],
      deliverable: "Build APK/AAB siap rilis dan dokumentasi REST API lengkap",
      badge: "iOS & Android",
    },
    {
      id: "company-profile",
      num: "06",
      title: "Company Profile",
      category: "web",
      shortDesc: "Website profil perusahaan prestisius untuk memikat klien korporasi, investor, dan mitra strategis dengan reputasi kuat.",
      features: ["Presentasi visi & layanan", "Katalog portofolio resmi", "Email bisnis korporat"],
      deliverable: "Email bisnis @domain, SSL aktif, jaminan maintenance",
      badge: "Corporate Trust",
    },
    {
      id: "software-custom",
      num: "07",
      title: "Software Custom",
      category: "enterprise",
      shortDesc: "Aplikasi sistem kustom yang dibangun dari nol untuk mengotomasi alur kerja khusus yang tidak terakomodasi aplikasi umum.",
      features: ["Spesifikasi tailored-fit", "Keamanan enkripsi data", "Skalabilitas arsitektur"],
      deliverable: "Full source code, SLA pemeliharaan, garansi teknis",
      badge: "Tailored",
    },
    {
      id: "crm-system",
      num: "08",
      title: "Customer Relationship Management (CRM)",
      category: "enterprise",
      shortDesc: "Platform digital untuk melacak siklus prospek penjualan, data riwayat klien, dan automasi komunikasi pemasaran.",
      features: ["Visual sales pipeline", "Riwayat kontak terpadu", "Notifikasi otomatis WhatsApp/Email"],
      deliverable: "Setup dashboard admin, migrasi data kontak, pelatihan tim",
      badge: "Growth Engine",
    },
  ];

  const filteredServices =
    activeServiceTab === "semua"
      ? services
      : services.filter((s) => s.category === activeServiceTab);

  // Tech stack items
  const techStackRow1 = [
    { name: "Next.js", tag: "Fullstack" },
    { name: "React", tag: "Frontend" },
    { name: "TypeScript", tag: "Language" },
    { name: "JavaScript", tag: "Core" },
    { name: "HTML5", tag: "Markup" },
    { name: "CSS3", tag: "Styling" },
    { name: "Laravel", tag: "PHP Framework" },
  ];

  const techStackRow2 = [
    { name: "PHP", tag: "Backend" },
    { name: "Python", tag: "Data & API" },
    { name: "MySQL", tag: "Database" },
    { name: "Docker", tag: "DevOps" },
    { name: "Figma", tag: "UI/UX Design" },
    { name: "Git", tag: "Version Control" },
  ];

  // Pricing packages data
  const pricingPackages = [
    {
      name: "Paket Lite",
      price: "Rp 1.500.000",
      description: "Solusi cepat dan efisien untuk kehadiran digital pertama bisnis Anda dengan kredibilitas tinggi.",
      idealFor: "UMKM, Landing Page, & Profil Usaha",
      highlight: false,
      features: [
        "Maksimal 5 Halaman Web",
        "Hosting 1 Tahun Penuh",
        "Domain .com Gratis 1 Tahun",
        "Maintenance & Pemeliharaan 1 Tahun",
        "Modul Dokumentasi Lengkap",
        "Halaman Responsif di Seluruh Layar",
        "Basic Copywriting Terarah",
        "Custom UI/UX Khusus Brand Anda",
        "Setup Email Bisnis Resmi",
        "Sertifikat Keamanan SSL Aktif",
        "Website Statis Cepat (Tanpa CMS)",
        "Full Source Code Diberikan (.zip)",
        "Maksimal Revisi 2x",
      ],
      whatsappMsg: "Halo Koneksa Indonesia, saya ingin memesan Paket Lite (Rp 1.500.000). Bisakah kita jadwalkan konsultasi?",
    },
    {
      name: "Paket Pro",
      price: "Rp 2.600.000",
      description: "Paling direkomendasikan untuk bisnis yang ingin mengelola konten secara mandiri dan memaksimalkan traffic pencarian Google.",
      idealFor: "Bisnis Berkembang & Lembaga Profesional",
      highlight: true,
      features: [
        "Maksimal 10 Halaman Web",
        "Admin Panel (CMS) untuk Edit Konten Mandiri",
        "Integrasi Google Analytics 4 (GA4)",
        "Advanced Copywriting Penjualan",
        "Optimasi SEO Teknis & On-Page",
        "Hosting 1 Tahun Penuh",
        "Domain .com Gratis 1 Tahun",
        "Maintenance & Pemeliharaan 1 Tahun",
        "Modul Dokumentasi Lengkap",
        "Custom UI/UX Khusus Brand Anda",
        "Email Bisnis Resmi & Sertifikat SSL",
        "Full Source Code Diberikan (.zip)",
        "Maksimal Revisi 4x",
      ],
      whatsappMsg: "Halo Koneksa Indonesia, saya ingin memesan Paket Pro (Rp 2.600.000) untuk pembuatan website bisnis kami.",
    },
    {
      name: "Paket Max",
      price: "Rp 5.000.000",
      description: "Paket lengkap dengan integrasi transaksi pembayaran online dan fleksibilitas halaman luas untuk sistem bisnis yang lebih mapan.",
      idealFor: "Katalog Toko Online & Sistem Korporasi",
      highlight: false,
      features: [
        "Maksimal 15 Halaman Web",
        "Integrasi Payment Gateway Otomatis",
        "Semua Fitur Paket Pro Termasuk",
        "Admin Panel (CMS) Khusus & Multi-Role",
        "Integrasi GA4 & Google Search Console",
        "Optimasi Kecepatan Ekstra (CDN & Cache)",
        "Hosting 1 Tahun Penuh",
        "Domain .com Gratis 1 Tahun",
        "Maintenance & Backup Terjadwal 1 Tahun",
        "Email Bisnis Multi Akun & Sertifikat SSL",
        "Full Source Code Diberikan (.zip)",
        "Maksimal Revisi 5x",
      ],
      whatsappMsg: "Halo Koneksa Indonesia, saya ingin berdiskusi mengenai Paket Max (Rp 5.000.000) dengan Payment Gateway.",
    },
  ];

  // FAQ Items (Refit Accordion Pattern)
  const faqItems = [
    {
      q: "Di mana lokasi kantor dan basis operasional Koneksa Indonesia?",
      a: "Koneksa Indonesia berpusat di Surabaya, Jawa Timur, tepatnya di Jl. Sidosermo Gg. Damri No.39, Sidosermo, Kec. Wonocolo. Kami melayani klien baik dari wilayah Surabaya, Jawa Timur, maupun seluruh Indonesia secara daring dan tatap muka.",
    },
    {
      q: "Berapa lama estimasi pengerjaan website atau sistem aplikasi?",
      a: "Untuk Paket Lite dan Landing Page standar berkisar antara 7 sampai 14 hari kerja. Untuk Paket Pro dan Website Company Profile berkisar 14 sampai 25 hari kerja. Sementara sistem kustom seperti ERP, CRM, dan Aplikasi Mobile disesuaikan dengan cakupan modul yang disepakati bersama.",
    },
    {
      q: "Apakah biaya paket sudah termasuk domain dan hosting?",
      a: "Benar! Seluruh paket (Lite, Pro, dan Max) sudah mencakup hosting cloud selama 1 tahun, domain .com selama 1 tahun, sertifikat keamanan SSL aktif, serta pemeliharaan teknis selama 1 tahun.",
    },
    {
      q: "Apakah klien mendapatkan kepemilikan kode sumber (source code)?",
      a: "Ya, 100%. Kami menyerahkan seluruh source code project dalam bentuk arsip zip lengkap beserta dokumentasinya tanpa penguncian hak cipta yang memberatkan klien.",
    },
    {
      q: "Bagaimana alur untuk memulai kerja sama dengan Koneksa Indonesia?",
      a: "Sangat mudah: Anda cukup menghubungi kami via WhatsApp atau mengisi formulir kontak di website ini. Kami akan berdiskusi mengenai kebutuhan, memberikan proposal penawaran, melakukan proses desain, koding, pengujian, hingga peluncuran live.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-neutral-50/60 text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* =========================================================================
          FLOATING PILL NAVBAR (Refit Framer Style)
         ========================================================================= */}
      <div className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <header
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-full border transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 ${
            scrolled
              ? "border-neutral-200/90 bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
              : "border-neutral-200/70 bg-white/80 backdrop-blur-md shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
          }`}
        >
          {/* Logo & Brand Name */}
          <a
            href="#beranda"
            className="group flex items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            aria-label="Koneksa Indonesia"
          >
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/koneksa-logo.jpg"
                alt="Logo Koneksa Indonesia"
                fill
                className="object-contain mix-blend-multiply"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-neutral-600">
            <a
              href="#beranda"
              className="rounded-full px-3.5 py-1.5 transition-colors hover:text-neutral-950 hover:bg-neutral-100/80"
            >
              Beranda
            </a>
            <a
              href="#tentang-kami"
              className="rounded-full px-3.5 py-1.5 transition-colors hover:text-neutral-950 hover:bg-neutral-100/80"
            >
              Tentang Kami
            </a>
            <a
              href="#layanan"
              className="rounded-full px-3.5 py-1.5 transition-colors hover:text-neutral-950 hover:bg-neutral-100/80"
            >
              Layanan
            </a>
            <a
              href="#klien"
              className="rounded-full px-3.5 py-1.5 transition-colors hover:text-neutral-950 hover:bg-neutral-100/80"
            >
              Klien
            </a>
            <a
              href="#harga"
              className="rounded-full px-3.5 py-1.5 transition-colors hover:text-neutral-950 hover:bg-neutral-100/80"
            >
              Harga
            </a>
            <a
              href="#faqs"
              className="rounded-full px-3.5 py-1.5 transition-colors hover:text-neutral-950 hover:bg-neutral-100/80"
            >
              FAQ
            </a>
            <a
              href="#kontak"
              className="rounded-full px-3.5 py-1.5 transition-colors hover:text-neutral-950 hover:bg-neutral-100/80"
            >
              Kontak
            </a>
          </nav>

          {/* Right Action: Available Status & Pill Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://wa.me/6288217139228?text=Halo%20Koneksa%20Indonesia,%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20teknologi."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-md active:scale-95"
            >
              Konsultasi Gratis
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-800 hover:bg-neutral-100 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              aria-label={mobileMenuOpen ? "Tutup navigasi" : "Buka navigasi"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 rounded-3xl border border-neutral-200 bg-white/95 p-6 backdrop-blur-xl shadow-2xl md:hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col space-y-3">
            {[
              { label: "Beranda", href: "#beranda" },
              { label: "Tentang Kami", href: "#tentang-kami" },
              { label: "Layanan Kami", href: "#layanan" },
              { label: "Klien & Teknologi", href: "#klien" },
              { label: "Tim Organisasi", href: "#tim" },
              { label: "Paket Harga", href: "#harga" },
              { label: "Pertanyaan (FAQ)", href: "#faqs" },
              { label: "Kontak & Alamat", href: "#kontak" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-base font-semibold text-neutral-800 transition-colors hover:bg-neutral-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/6288217139228"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex h-11 items-center justify-center rounded-full bg-neutral-950 font-semibold text-white shadow-sm"
            >
              Mulai Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* =========================================================================
          HERO SECTION (Refit Aesthetic: Minimal, Confident, Spatial)
         ========================================================================= */}
      <section
        id="beranda"
        className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-36 border-b border-neutral-200/80 bg-white"
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-blue-50/70 blur-3xl pointer-events-none animate-pulse-glow" />

        {/* Animated Background Art: Halftone Hands Connection ("Koneksa - Mitra Terpercaya") - Enlarge Nearly Full */}
        <div className="absolute top-8 sm:top-14 left-1/2 -translate-x-1/2 w-full max-w-6xl lg:max-w-7xl px-2 sm:px-4 pointer-events-none select-none z-0">
          <div className="relative w-full aspect-[2/1] max-h-[520px] sm:max-h-[640px] mx-auto mix-blend-multiply opacity-35 sm:opacity-50 transition-opacity duration-700 animate-hands-float">
            <Image
              src="/hands-connection.png"
              alt="Koneksa Partnership Connection"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header Tag Capsule (Without green dot) */}
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-xs font-semibold text-neutral-800 shadow-2xs transition-transform hover:scale-102">
              Koneksa Indonesia : Solusi Digital Berpusat di Surabaya
            </div>
          </div>

          {/* Grand Main Headline */}
          <div className="mt-8 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
              Solusi Digital,{" "}
              <span className="inline-block bg-gradient-to-r from-neutral-950 via-blue-900 to-indigo-800 bg-clip-text text-transparent">
                Mitra Terpercaya.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Kami menyederhanakan kerumitan teknologi bagi UMKM, profesional, dan korporasi melalui rekayasa sistem informasi, website, dan aplikasi yang berstandar tinggi dan berkinerja nyata.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href="#layanan"
                className="group flex h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-neutral-950 px-8 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg active:scale-98"
              >
                <span>Jelajahi Layanan</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#kontak"
                className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-8 text-sm font-semibold text-neutral-800 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50 active:scale-98"
              >
                Halaman Kontak
              </a>
            </div>
          </div>

          {/* 4 Bottom Metric Counter Pills (Refit Style) */}
          <div className="mt-16 sm:mt-20 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="rounded-2xl border border-neutral-200/90 bg-white/90 backdrop-blur-md p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-framer">
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">100%</div>
              <div className="text-xs text-neutral-500 font-medium mt-1">Source Code Milik Klien</div>
            </div>
            <div className="rounded-2xl border border-neutral-200/90 bg-white/90 backdrop-blur-md p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-framer">
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">Surabaya</div>
              <div className="text-xs text-neutral-500 font-medium mt-1">Basis Markas Operasional</div>
            </div>
            <div className="rounded-2xl border border-neutral-200/90 bg-white/90 backdrop-blur-md p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-framer">
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">3+</div>
              <div className="text-xs text-neutral-500 font-medium mt-1">Institusi & Klien Teruji</div>
            </div>
            <div className="rounded-2xl border border-neutral-200/90 bg-white/90 backdrop-blur-md p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-framer">
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">End-to-End</div>
              <div className="text-xs text-neutral-500 font-medium mt-1">Desain sampai Maintenance</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KLIEN TERPERCAYA & TECH MARQUEE (Refit Trust Component)
         ========================================================================= */}
      <section id="klien" className="border-b border-neutral-200/80 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              Klien & Reputasi
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
              Telah Dipercaya oleh Berbagai Klien & Institusi
            </h2>
            <p className="mt-2 text-sm text-neutral-500 max-w-xl mx-auto">
              Dedikasi nyata kami dalam membangun sistem yang andal bagi institusi pendidikan, studio kreatif, dan korporasi.
            </p>
          </div>

          {/* 3 Real Client Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-framer">
              <div className="mx-auto flex h-14 w-fit items-center justify-center rounded-2xl bg-white border border-neutral-200/80 px-3.5 shadow-2xs">
                <Image
                  src="/sman-14.png"
                  alt="Logo SMAN 14 Surabaya"
                  width={48}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-950">SMAN 14 Surabaya</h3>
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider mt-1">
                Institusi Pendidikan
              </p>
              <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed">
                Pengembangan sistem informasi sekolah dan infrastruktur platform web pendukung kegiatan akademik.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-framer">
              <div className="mx-auto flex h-14 w-fit items-center justify-center rounded-2xl bg-white border border-neutral-200/80 px-3.5 shadow-2xs">
                <Image
                  src="/atm-studio.png"
                  alt="Logo ATM Studio"
                  width={110}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-950">ATM Studio</h3>
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider mt-1">
                Creative Digital Studio
              </p>
              <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed">
                Pengembangan web portfolio interaktif, tata kelola aset digital, dan performa visual responsif.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-framer">
              <div className="mx-auto flex h-14 w-fit items-center justify-center rounded-2xl bg-white border border-neutral-200/80 px-3.5 shadow-2xs">
                <Image
                  src="/pln-icon-plus.png"
                  alt="Logo PLN Icon Plus"
                  width={110}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-950">PLN Icon Plus</h3>
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider mt-1">
                Telekomunikasi & Energi
              </p>
              <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed">
                Kemitraan solusi integrasi teknologi informasi dan otomatisasi digital berstandar korporasi skala nasional.
              </p>
            </div>
          </div>

          {/* Infinite Tech Marquee (Refit Signature Motion) */}
          <div className="mt-16 pt-10 border-t border-neutral-100">
            <div className="text-center mb-6">
              <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                Teknologi yang Dikuasai
              </span>
            </div>

            {/* Marquee Row 1 */}
            <div className="relative w-full overflow-hidden py-1">
              <div className="animate-marquee-left flex gap-3">
                {[...techStackRow1, ...techStackRow1, ...techStackRow1, ...techStackRow1].map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-bold text-neutral-800 shadow-2xs hover:border-neutral-400 transition-colors"
                  >
                    <span>{tech.name}</span>
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-500 font-normal">
                      {tech.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Marquee Row 2 */}
            <div className="relative w-full overflow-hidden py-1 mt-2.5">
              <div className="animate-marquee-right flex gap-3">
                {[...techStackRow2, ...techStackRow2, ...techStackRow2, ...techStackRow2].map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-bold text-neutral-800 shadow-2xs hover:border-neutral-400 transition-colors"
                  >
                    <span>{tech.name}</span>
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-500 font-normal">
                      {tech.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TENTANG KAMI (About Us - Bento Editorial Style)
         ========================================================================= */}
      <section id="tentang-kami" className="border-b border-neutral-200/80 bg-neutral-50/70 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              Tentang Kami
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
              Menghadirkan Solusi Digital untuk Menyederhanakan Kerumitan Teknologi
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Koneksa Indonesia berpusat di Surabaya, didirikan untuk memberdayakan UMKM, profesional, dan korporasi agar memiliki sistem digital yang tepat guna, efisien, dan berkelanjutan.
            </p>
          </div>

          {/* Asymmetric Bento Layout (Refit Style) */}
          <div className="mt-12 grid gap-6 lg:grid-cols-12 items-stretch">
            {/* Visi Card */}
            <div className="lg:col-span-5 rounded-3xl border border-neutral-200 bg-neutral-950 p-8 sm:p-10 text-white flex flex-col justify-between shadow-framer relative overflow-hidden">
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-blue-600/20 blur-2xl" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block rounded-full bg-neutral-800 px-3 py-1 text-xs font-semibold text-neutral-300">
                    Visi Perusahaan
                  </span>

                  <blockquote className="mt-6 text-xl sm:text-2xl font-bold leading-snug">
                    "Menjadi mitra teknologi penyedia layanan di Indonesia yang memberdayakan UMKM, Profesional, dan Korporasi."
                  </blockquote>

                  <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                    Kami percaya bahwa teknologi terbaik adalah teknologi yang menyederhanakan masalah, bukan yang menambah kerumitan operasional.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <span>Markas Pusat</span>
                  <span className="text-white font-semibold">Surabaya, Jawa Timur</span>
                </div>
              </div>
            </div>

            {/* 3 Misi Cards Column */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 shadow-xs hover:border-neutral-300 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-white font-bold text-sm">
                    01
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Penyediaan Layanan Berstandar Tinggi
                    </h3>
                    <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                      Mengembangkan sistem berbasis teknologi modern yang aman, cepat, dan mudah dipelihara sesuai kaidah rekayasa perangkat lunak internasional.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 shadow-xs hover:border-neutral-300 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-white font-bold text-sm">
                    02
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Efisiensi Sistem & Proses Kerja
                    </h3>
                    <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                      Menghadirkan otomasi dan integrasi data yang memangkas waktu kerja manual, meminimalisir kesalahan manusia, dan menaikkan profitabilitas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-7 shadow-xs hover:border-neutral-300 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-white font-bold text-sm">
                    03
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Komitmen Kepuasan Klien Jangka Panjang
                    </h3>
                    <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                      Menjaga komunikasi terbuka, memberikan panduan modul lengkap, serta siap sedia memberikan pendampingan teknis berkelanjutan pasca peluncuran.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LAYANAN KAMI (Services - Refit Clean Grid)
         ========================================================================= */}
      <section id="layanan" className="border-b border-neutral-200/80 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
                Layanan Kami
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
                Solusi Digital Komprehensif
              </h2>
              <p className="mt-3 text-base text-neutral-600">
                Delapan spesialisasi layanan rekayasa perangkat lunak untuk membawa bisnis Anda melangkah lebih cepat di era digital.
              </p>
            </div>

            {/* Category Filter Pills (Refit Filter Pattern) */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { label: "Semua", val: "semua" },
                { label: "Website", val: "web" },
                { label: "Aplikasi & UI/UX", val: "app" },
                { label: "Enterprise & CRM", val: "enterprise" },
              ].map((btn) => (
                <button
                  key={btn.val}
                  onClick={() => setActiveServiceTab(btn.val as ServiceCategory)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all focus:outline-none ${
                    activeServiceTab === btn.val
                      ? "bg-neutral-950 text-white shadow-xs"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid (8 Services) */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredServices.map((svc) => (
              <div
                key={svc.id}
                className="group flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-neutral-400 hover:shadow-framer"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      {svc.num}
                    </span>
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-semibold text-neutral-600">
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-neutral-950 group-hover:text-blue-700 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                    {svc.shortDesc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-100">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                      Cakupan Fitur
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs text-neutral-700">
                      {svc.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <svg className="h-3.5 w-3.5 text-blue-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <a
                    href={`https://wa.me/6288217139228?text=Halo%20Koneksa%20Indonesia,%20saya%20tertarik%20konsultasi%20layanan%20${encodeURIComponent(svc.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 py-2 text-xs font-bold text-neutral-800 transition-all group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-950"
                  >
                    <span>Konsultasi Layanan</span>
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAKET LAYANAN & HARGA (Pricing - Refit Clean Tier Cards)
         ========================================================================= */}
      <section id="harga" className="border-b border-neutral-200/80 bg-neutral-50/70 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              Paket Harga Transparan
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
              Pilihan Investasi Digital Tepat Sasaran
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Rincian fitur transparan tanpa biaya tersembunyi, sudah termasuk hosting 1 tahun dan full source code.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3 items-stretch max-w-6xl mx-auto">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col justify-between rounded-3xl bg-white p-8 transition-all duration-300 ${
                  pkg.highlight
                    ? "border-2 border-neutral-950 shadow-framer-hover lg:-translate-y-3"
                    : "border border-neutral-200 shadow-framer hover:border-neutral-300"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-neutral-950 px-4 py-1 text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                    Paling Populer
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-neutral-950">{pkg.name}</h3>
                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-semibold text-neutral-600">
                      {pkg.idealFor}
                    </span>
                  </div>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">/ paket</span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                    {pkg.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-neutral-100">
                    <span className="text-xs font-bold text-neutral-950 uppercase tracking-wider block mb-4">
                      Fitur & Spesifikasi:
                    </span>
                    <ul className="space-y-2.5 text-xs text-neutral-700">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <svg
                            className={`h-4 w-4 shrink-0 mt-0.5 ${
                              pkg.highlight ? "text-neutral-950" : "text-blue-700"
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

                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <a
                    href={`https://wa.me/6288217139228?text=${encodeURIComponent(pkg.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs font-bold transition-all ${
                      pkg.highlight
                        ? "bg-neutral-950 text-white hover:bg-neutral-800 shadow-sm"
                        : "border border-neutral-300 bg-neutral-50 text-neutral-800 hover:bg-neutral-100"
                    }`}
                  >
                    Pesan {pkg.name}
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          STRUKTUR TIM (Our Team - Refit Minimalist Grid)
         ========================================================================= */}
      <section id="tim" className="border-b border-neutral-200/80 bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              Struktur Organisasi
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
              Tim Inti Koneksa Indonesia
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Praktisi teknologi yang berfokus memberikan rekayasa perangkat lunak berkualitas tinggi dengan komunikasi transparan.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
            {/* Wahyu Firmansyah */}
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50/50 p-8 text-center transition-all duration-300 hover:border-neutral-300 hover:shadow-framer">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-neutral-950 text-white font-extrabold text-2xl shadow-sm">
                WF
              </div>
              <h3 className="mt-5 text-xl font-bold text-neutral-950">Wahyu Firmansyah</h3>
              <div className="mt-1 inline-block rounded-full bg-neutral-200 px-3 py-1 text-xs font-bold text-neutral-800">
                Founder
              </div>
              <p className="mt-4 text-xs text-neutral-600 leading-relaxed">
                Memimpin visi strategis, pengembangan kemitraan bisnis, serta arah ekspansi solusi digital Koneksa Indonesia.
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-200">
                <a
                  href="https://wa.me/6281328884628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-800 hover:text-blue-700"
                >
                  Hubungi Wahyu (+6281328884628)
                </a>
              </div>
            </div>

            {/* Ferdian Bimo S.P, S.Kom. */}
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50/50 p-8 text-center transition-all duration-300 hover:border-neutral-300 hover:shadow-framer">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-700 text-white font-extrabold text-2xl shadow-sm">
                FB
              </div>
              <h3 className="mt-5 text-xl font-bold text-neutral-950">Ferdian Bimo S.P, S.Kom.</h3>
              <div className="mt-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                Full Stack Developer
              </div>
              <p className="mt-4 text-xs text-neutral-600 leading-relaxed">
                Memimpin arsitektur kode, integrasi backend API, perancangan antarmuka, keamanan data, dan stabilitas server.
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-200">
                <a
                  href="https://wa.me/6288217139228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-800 hover:text-blue-700"
                >
                  Hubungi Bimo (+6288217139228)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQS (Refit Interactive Accordion Pattern)
         ========================================================================= */}
      <section id="faqs" className="border-b border-neutral-200/80 bg-neutral-50/70 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
              Tanya Jawab
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Temukan jawaban cepat seputar proses pengerjaan, paket, dan kerja sama bersama kami.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-200 bg-white transition-all overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-neutral-950 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 font-mono text-sm transition-transform duration-200">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          KONTAK KAMI (Contact & Interactive Form - Refit Two-Column Layout)
         ========================================================================= */}
      <section id="kontak" className="relative overflow-hidden border-b border-neutral-200/80 bg-white py-20 lg:py-28">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />

        {/* Animated Halftone Hands in Background of Contact Section */}
        <div className="absolute -bottom-10 -right-20 w-[420px] max-w-full aspect-[2/1] pointer-events-none select-none opacity-20 mix-blend-multiply animate-hands-float hidden lg:block">
          <Image
            src="/hands-connection.png"
            alt="Koneksa Mitra Terpercaya"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Contact Information */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-widest text-blue-700 uppercase">
                Halaman Kontak & Lokasi
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
                Mari Diskusikan Ide Proyek Anda
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Kami siap memberikan solusi terbaik sesuai alokasi anggaran dan kebutuhan operasional bisnis Anda. Kunjungi markas kami atau hubungi kami langsung via WhatsApp.
              </p>

              <div className="mt-8 space-y-6">
                {/* Office Address Card */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-950 uppercase tracking-wider">
                      Kantor Pusat Surabaya
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="text-xs font-semibold text-blue-700 hover:text-blue-900 focus:outline-none"
                    >
                      {copiedAddress ? "Tersalin!" : "Salin Alamat"}
                    </button>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                    Jl. Sidosermo Gg. Damri No.39, Sidosermo, Kec. Wonocolo, Surabaya, Jawa Timur 60239
                  </p>
                </div>

                {/* WhatsApp Contacts */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-5">
                  <span className="text-xs font-bold text-neutral-950 uppercase tracking-wider block mb-2">
                    Kontak WhatsApp Resmi
                  </span>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Bimo (Technical)</span>
                      <a
                        href="https://wa.me/6288217139228"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-blue-700 hover:underline"
                      >
                        +62 882-1713-9228
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-600">Wahyu (Partnership)</span>
                      <a
                        href="https://wa.me/6281328884628"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-blue-700 hover:underline"
                      >
                        +62 813-2888-4628
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email & Social */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-5">
                  <span className="text-xs font-bold text-neutral-950 uppercase tracking-wider block mb-2">
                    Email & Media Sosial
                  </span>
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <div>
                      <span className="text-neutral-500 mr-2">Email:</span>
                      <a
                        href="mailto:koneksaindonesia@gmail.com"
                        className="font-bold text-neutral-900 hover:underline"
                      >
                        koneksaindonesia@gmail.com
                      </a>
                    </div>
                    <div>
                      <span className="text-neutral-500 mr-2">Instagram:</span>
                      <a
                        href="https://instagram.com/koneksaindonesia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-blue-700 hover:underline"
                      >
                        @koneksaindonesia
                      </a>
                    </div>
                    <div>
                      <span className="text-neutral-500 mr-2">TikTok:</span>
                      <a
                        href="https://tiktok.com/@koneksaindonesia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-blue-700 hover:underline"
                      >
                        @koneksaindonesia
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Consultation Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-neutral-200 bg-white p-7 sm:p-9 shadow-framer">
                <h3 className="text-2xl font-extrabold tracking-tight text-neutral-950">
                  Formulir Konsultasi Proyek
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-neutral-500">
                  Sampaikan garis besar kebutuhan Anda. Sistem kami akan menyusun pesan untuk dikirimkan langsung ke WhatsApp resmi kami.
                </p>

                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Budi Santoso"
                        className="mt-1.5 w-full rounded-full border border-neutral-200 bg-neutral-50/60 px-4 py-2.5 text-sm text-neutral-900 shadow-2xs focus:border-neutral-950 focus:bg-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                        Perusahaan / Usaha
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Contoh: CV Maju Lancar"
                        className="mt-1.5 w-full rounded-full border border-neutral-200 bg-neutral-50/60 px-4 py-2.5 text-sm text-neutral-900 shadow-2xs focus:border-neutral-950 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                        Pilihan Layanan
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="mt-1.5 w-full rounded-full border border-neutral-200 bg-neutral-50/60 px-4 py-2.5 text-sm text-neutral-900 shadow-2xs focus:border-neutral-950 focus:bg-white focus:outline-none"
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
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                        Pilihan Paket
                      </label>
                      <select
                        value={formData.packageChoice}
                        onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
                        className="mt-1.5 w-full rounded-full border border-neutral-200 bg-neutral-50/60 px-4 py-2.5 text-sm text-neutral-900 shadow-2xs focus:border-neutral-950 focus:bg-white focus:outline-none"
                      >
                        <option value="Paket Lite (Rp 1.500.000)">Paket Lite (Rp 1.500.000)</option>
                        <option value="Paket Pro (Rp 2.600.000)">Paket Pro (Rp 2.600.000)</option>
                        <option value="Paket Max (Rp 5.000.000)">Paket Max (Rp 5.000.000)</option>
                        <option value="Kustom Enterprise">Kustom Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                      Rincian Kebutuhan / Pesan *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan kebutuhan website, aplikasi, atau sistem bisnis Anda..."
                      className="mt-1.5 w-full rounded-2xl border border-neutral-200 bg-neutral-50/60 p-4 text-sm text-neutral-900 shadow-2xs focus:border-neutral-950 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-neutral-800 active:scale-98"
                  >
                    <div className="relative h-4 w-4 shrink-0">
                      <Image
                        src="/whatsapp-icon-white.png"
                        alt="WhatsApp"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>Kirim via WhatsApp</span>
                  </button>

                  {formSent && (
                    <div className="rounded-xl bg-emerald-50 p-3 text-center text-xs font-semibold text-emerald-800">
                      Pesan Anda berhasil disusun dan diarahkan ke WhatsApp kami.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOOTER (Refit Style)
         ========================================================================= */}
      <footer className="bg-neutral-950 text-neutral-400 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-neutral-800">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white p-1">
                  <Image
                    src="/koneksa-logo.jpg"
                    alt="Koneksa Indonesia"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-base font-extrabold tracking-tight text-white block">
                    KONEKSA INDONESIA
                  </span>
                  <span className="text-xs text-blue-400 font-semibold">
                    Solusi Digital, Mitra Terpercaya.
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
                Menyederhanakan kerumitan teknologi bagi UMKM, profesional, dan korporasi di seluruh Indonesia dengan solusi perangkat lunak yang berstandar tinggi.
              </p>
              <div className="mt-4 text-xs text-neutral-400">
                Alamat: Jl. Sidosermo Gg. Damri No.39, Sidosermo, Kec. Wonocolo, Surabaya, Jawa Timur 60239
              </div>
            </div>

            {/* Navigasi Links */}
            <div className="lg:col-span-3">
              <span className="text-xs font-bold uppercase tracking-wider text-white block mb-4">
                Navigasi Cepat
              </span>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#tentang-kami" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#layanan" className="hover:text-white transition-colors">Layanan</a></li>
                <li><a href="#klien" className="hover:text-white transition-colors">Klien & Portofolio</a></li>
                <li><a href="#tim" className="hover:text-white transition-colors">Struktur Tim</a></li>
                <li><a href="#harga" className="hover:text-white transition-colors">Paket Layanan</a></li>
                <li><a href="#faqs" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Official Website & Identity */}
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-wider text-white block mb-4">
                Website & Legalitas
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <span className="text-neutral-400 block text-xs">Website Resmi:</span>
                  <a
                    href="https://www.koneksaindonesia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    www.koneksaindonesia.com
                  </a>
                </li>
                <li>
                  <span className="text-neutral-400 block text-xs">WhatsApp:</span>
                  <span className="text-neutral-300">
                    +62 882-1713-9228 (Bimo) | +62 813-2888-4628 (Wahyu)
                  </span>
                </li>
                <li>
                  <span className="text-neutral-400 block text-xs">Email:</span>
                  <a href="mailto:koneksaindonesia@gmail.com" className="text-neutral-300 hover:text-white">
                    koneksaindonesia@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400">
            <div>
              &copy; 2026 Koneksa Indonesia. Seluruh hak cipta dilindungi undang-undang.
            </div>
            <div className="mt-3 sm:mt-0">
              <a
                href="https://www.koneksaindonesia.com"
                className="hover:text-white transition-colors font-medium"
              >
                www.koneksaindonesia.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Consultation Pill (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/6288217139228?text=Halo%20Koneksa%20Indonesia,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20digital."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-xs font-bold text-white shadow-2xl border border-neutral-800 transition-all duration-300 hover:scale-105 hover:bg-neutral-900 active:scale-95"
        >
          Chat WhatsApp
        </a>
      </div>
    </div>
  );
}
