const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const portfolios = [
  {
    title: 'RT/RW Management System',
    description: 'Sistem Informasi Manajemen RT/RW (Rukun Tetangga/Rukun Warga) berbasis API menggunakan Node.js (Express) dan PostgreSQL.',
    content: `Proyek ini bertujuan untuk menyediakan solusi manajemen digital untuk administrasi tingkat RT/RW. Backend API dibangun dengan Node.js (Express) dan menggunakan PostgreSQL sebagai database. Database diinisialisasi secara otomatis melalui Docker Compose dengan skema yang sudah disiapkan dalam \`database/rtrw.sql\`. 

Autentikasi API menggunakan JSON Web Token (JWT) untuk melindungi endpoint. Frontend sedang dalam tahap pengembangan menggunakan Flutter. Proyek ini memerlukan Node.js (versi 16+), Docker & Docker Compose, serta Git untuk instalasi dan setup lokal. Konfigurasi variabel lingkungan dilakukan melalui file \`.env\` yang tidak dipublikasikan.`,
    imageUrl: '/portfolio_rtrw.png',
    link: '#',
  },
  {
    title: 'RizqinaStore - Solusi E-Commerce UMKM Modern',
    description: 'Platform e-commerce modern yang dirancang khusus untuk membantu UMKM lokal go-digital dengan pengalaman belanja cepat, aman, dan profesional.',
    content: `RizqinaStore adalah platform e-commerce yang berfokus pada UMKM. Fitur unggulannya meliputi desain responsif, integrasi pembayaran otomatis Midtrans (QRIS, VA, E-Wallet), manajemen pengiriman (COD dan pelacakan resi), autentikasi aman dengan Supabase Auth, dashboard admin real-time, notifikasi WhatsApp, dan riwayat pesanan. 

Teknologi yang digunakan adalah Next.js (App Router & Server Actions) untuk framework, Supabase untuk database dan autentikasi, Midtrans untuk payment gateway, serta Vanilla CSS untuk styling. Struktur database utama mencakup tabel \`products\`, \`orders\`, \`order_items\`, \`profiles\`, dan \`store_settings\`.`,
    imageUrl: '/portfolio_rizqina.png',
    link: '#',
  },
  {
    title: 'Digital Wedding Time Capsule',
    description: 'Platform SaaS (Software as a Service) lengkap untuk mengabadikan momen di hari bahagia dengan solusi all-in-one untuk Event Organizer (EO).',
    content: `Proyek ini mengatasi masalah pengantin yang tidak dapat melihat foto-foto yang diambil tamu selama acara pernikahan. Solusinya adalah platform terpadu berbasis PWA (Progressive Web App) dan Multi-Acara. 

Fitur utamanya meliputi PWA yang ringan dan responsif (tanpa perlu unduh aplikasi), fitur Guest Upload & Misi Foto, Sistem Moderasi Cerdas untuk foto, Live Wall Proyektor dengan animasi, Pengambilan Souvenir Bebas Antre dengan QR Ticket, Bride & Groom Hub untuk mengunduh data kehadiran dan foto, Portal Admin & Tema Dinamis Global, Manajemen Status Acara, serta Organizer Dashboard & Event Lobby untuk EO. Teknologi yang digunakan mencakup Next.js, NestJS, TypeScript, Tailwind CSS, dan Prisma.`,
    imageUrl: '/portfolio_wedding.png',
    link: '#',
  }
]

async function main() {
  await prisma.portfolio.deleteMany({});
  
  for (const item of portfolios) {
    await prisma.portfolio.create({
      data: item
    })
  }
  console.log('Portfolio seed completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
