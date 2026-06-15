# 🚀 Nusalogic — Company Profile Web App

> **Integrated IT Solutions & Educational Hub**  
> Solusi digital realistis untuk bisnis yang ingin naik level.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=flat-square&logo=framer)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## 📋 Deskripsi

Website company profile **Nusalogic** — mini startup konsultan IT & Data dari **STMIK Tazkia**. Dibangun sebagai single-page application (SPA) modern dengan animasi WebGL shader, design system berbasis dark-cyan, dan konten layanan yang lengkap.

**Core Value:** *"Validasi Berbasis Data di Awal & Edukasi Berkelanjutan di Akhir"*

---

## ✨ Fitur Utama

- 🎨 **WebGL GLSL Shader** — animated background di Hero section dengan interaktivitas mouse
- 🗺️ **Foto Peta Nusantara** — floating animation dengan drop-shadow cyan
- 📱 **Fully Responsive** — mobile (375px), tablet (768px), desktop (1280px)
- 🌙 **Dark Mode Design** — design system berbasis palet gelap-cyan premium
- ⚡ **Framer Motion** — animasi masuk, hover lift, dan scroll-triggered animations
- 🔗 **Smooth Scroll Navigation** — navbar fixed dengan shrink on scroll + hamburger mobile
- 💳 **3 Tier Pricing** — Ekonomis, Reguler/Korporat, dan Bundling Terima Beres
- 📞 **WhatsApp Integration** — tombol CTA langsung ke WA dengan pesan otomatis
- 🔍 **SEO Ready** — metadata, OG tags, semantic HTML

---

## 🏗️ Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4 + Custom CSS |
| Animasi | Framer Motion 11 |
| Font | Montserrat · Inter · JetBrains Mono (Google Fonts) |
| Icons | Material Symbols Outlined (Google) |
| Graphics | WebGL GLSL Shader (native canvas) |

---

## 📁 Struktur Folder

```
/
├── app/
│   ├── globals.css       # Design tokens, glass-card, animasi
│   ├── layout.tsx        # Root layout + Google Fonts + SEO metadata
│   └── page.tsx          # Perakitan semua section
├── components/
│   ├── Navbar.tsx        # Fixed navbar, shrink scroll, hamburger mobile
│   ├── Hero.tsx          # WebGL shader bg + peta Nusantara + stats
│   ├── About.tsx         # Filosofi, strength cards, target pasar
│   ├── Services.tsx      # 3 tier pricing cards
│   ├── Team.tsx          # 4 foto tim grayscale→color hover
│   ├── TechStack.tsx     # 6 kategori tech dengan tag pills
│   ├── CTA.tsx           # WA button + email form
│   └── Footer.tsx        # 3 kolom brand/nav/kontak
├── lib/
│   └── shader.ts         # WebGL utility (init, compile, render loop)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── postcss.config.js
```

---

## 🚀 Cara Menjalankan Lokal

### Prerequisites
- Node.js 18+
- npm

### Instalasi

```bash
# Clone repository
git clone https://github.com/azmttqi/NusaLogic.git
cd NusaLogic

# Install dependencies
npm install

# Jalankan dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build Production

```bash
npm run build
npm run start
```

---

## 🎨 Design System

```css
Background primary:    #08132a
Background container:  #151f37
Background lowest:     #030d25
Accent / Primary:      #5ffbd6  /* cyan */
Accent dim:            #38debb
Text primary:          #d9e2ff
Text secondary:        #bacac3
Border default:        rgba(95,251,214,0.13)
Border hover:          rgba(95,251,214,0.45)
```

---

## 📦 Paket Layanan

### 🌱 Paket Ekonomis (UMKM & Toko Lokal)
| Layanan | Harga |
|---|---|
| Data Discovery Lite | Rp350.000 – Rp750.000 |
| System Blueprint Essentials | Rp750.000 – Rp1.500.000 |
| Production Code Express | Rp1.500.000 – Rp3.000.000 |

### 🏢 Paket Reguler & Korporat
| Layanan | Harga |
|---|---|
| Data Discovery Standard | Rp1.500.000 – Rp3.500.000 |
| System Blueprint Professional | Rp3.000.000 – Rp7.000.000 |
| Production Code Full-Stack | Rp6.000.000 – Rp15.000.000+ |

### 💎 Bundling Terima Beres
| Paket | Harga |
|---|---|
| UMKM GO-DIGITAL 🔥 | Rp2.500.000 (bisa cicil 2×) |
| MVP LAUNCH ⚡ | Rp8.000.000 – Rp18.000.000 |

---

## 📞 Kontak

| Channel | Info |
|---|---|
| 💬 WhatsApp | [0851-1751-1005](https://wa.me/6285117511005) |
| 📧 Email | nusalogic.id@gmail.com |
| 💼 LinkedIn | [Nusalogic](https://linkedin.com/company/nusalogic) |
| 📸 Instagram / TikTok | [@nusalogic.id](https://instagram.com/nusalogic.id) |
| 🏫 Kampus | STMIK Tazkia, Indonesia |

---

## 👥 Tim

| Nama | Role |
|---|---|
| Rahmawati | Chief Executive Officer |
| Amanda Wijayanti | Business Analyst & Marketing |
| Azmi Ittaqi H. | Technical Lead & UI/UX |
| Mutiara Adinda | Operations & Finance |

---

## 📸 Cara Ganti Foto Tim

Buka `components/Team.tsx`, cari array `const team = [...]`, lalu ganti field `photo:` dengan URL foto baru:

```tsx
{
  id: 'nama',
  name: 'Nama Lengkap',
  role: 'Jabatan',
  photo: 'URL_FOTO_BARU_DI_SINI', // ← ganti di sini
},
```

**Opsi:**
1. Upload ke `/public` folder → gunakan path `/nama-foto.jpg`
2. Upload ke Google Drive/Imgur → copy URL gambar langsung

---

## 📄 Lisensi

MIT © 2025 [Nusalogic](https://github.com/azmttqi/NusaLogic) — STMIK Tazkia
