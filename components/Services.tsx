'use client'

import { motion } from 'framer-motion'

const tiers = [
  {
    id: 'ekonomis',
    label: 'Paket Ekonomis',
    desc: 'Khusus UMKM Perintis & Toko Lokal — harga anti-ditolak untuk bisnis rintisan berskala mikro.',
    icon: '🌱',
    services: [
      {
        id: '01',
        name: 'Data Discovery Lite',
        price: 'Rp350.000 – Rp750.000',
        desc: 'Rapikan pembukuan manual/Excel jadi 1 Dashboard Visual interaktif biar kelihatan produk paling laris & jam paling sibuk.',
        features: [
          { icon: 'cleaning_services', text: 'Pembersihan data transaksi (1–3 bulan)' },
          { icon: 'dashboard', text: '1 Halaman Dashboard Visual interaktif' },
          { icon: 'trending_up', text: 'Analisis produk terlaris & jam sibuk toko' },
        ],
        featured: false,
      },
      {
        id: '02',
        name: 'System Blueprint Essentials',
        price: 'Rp750.000 – Rp1.500.000',
        desc: 'Rancangan maket desain modern agar identitas bisnis Anda naik kelas — tampilan responsif ramah HP/Mobile.',
        features: [
          { icon: 'palette', text: 'Desain visual katalog produk / landing page bisnis' },
          { icon: 'view_quilt', text: 'Rancangan 3–5 halaman utama di Figma' },
          { icon: 'smartphone', text: 'Tampilan responsif ramah HP/Mobile' },
        ],
        featured: true,
        badge: 'Paling Populer',
      },
      {
        id: '03',
        name: 'Production Code Express',
        price: 'Rp1.500.000 – Rp3.000.000',
        desc: 'Website katalog/profil usaha instan langsung running di internet + tombol otomatis ke WhatsApp Admin.',
        features: [
          { icon: 'rocket_launch', text: 'Pembuatan website statis super cepat & aman' },
          { icon: 'whatsapp', text: 'Integrasi tombol direct Chat WA Admin' },
          { icon: 'location_on', text: 'Penyematan Google Maps lokasi toko fisik' },
        ],
        featured: false,
      },
    ],
  },
  {
    id: 'reguler',
    label: 'Paket Reguler & Korporat',
    desc: 'Perusahaan berkembang & sistem kustom — standar layanan penuh industri untuk sistem manajemen yang kompleks dan skalabel.',
    icon: '🏢',
    services: [
      {
        id: '04',
        name: 'Data Discovery Standard',
        price: 'Rp1.500.000 – Rp3.500.000',
        desc: 'Audit mendalam data operasional korporasi untuk strategi ekspansi bisnis yang berbasis fakta.',
        features: [
          { icon: 'cleaning_services', text: 'Pembersihan data kompleks & multi-cabang' },
          { icon: 'corporate_fare', text: 'Dashboard Manajemen Eksekutif interaktif penuh' },
          { icon: 'description', text: 'Dokumen analisis strategi rekomendasi resmi' },
        ],
        featured: false,
      },
      {
        id: '05',
        name: 'System Blueprint Professional',
        price: 'Rp3.000.000 – Rp7.000.000',
        desc: 'Perancangan arsitektur sistem manajemen internal/aplikasi skala industri yang komprehensif.',
        features: [
          { icon: 'person_search', text: 'User Research & penyusunan Design System di Figma' },
          { icon: 'layers', text: 'Desain High-Fidelity komprehensif (hingga 15 halaman)' },
          { icon: 'touch_app', text: 'Interactive Prototype siap koding secara presisi' },
        ],
        featured: true,
        badge: 'Best Value',
      },
      {
        id: '06',
        name: 'Production Code Full-Stack',
        price: 'Rp6.000.000 – Rp15.000.000+',
        desc: 'Koding penuh aplikasi web/mobile kustom dari hulu ke hilir sampai live di server cloud pilihan.',
        features: [
          { icon: 'code', text: 'Full-stack coding (Next.js, database aman)' },
          { icon: 'cloud_upload', text: 'Deployment otomatis di server cloud pilihan' },
          { icon: 'build', text: 'Free Maintenance perbaikan bug selama 1 bulan' },
        ],
        featured: false,
      },
    ],
  },
]

const bundlings = [
  {
    id: 'umkm-go-digital',
    badge: '🔥 PALING LARIS!',
    name: 'Paket "UMKM GO-DIGITAL"',
    subtitle: 'Paling Laris untuk Mikro',
    price: 'Rp2.500.000',
    priceNote: 'Bisa dicicil 2× · DP 50% di awal, 50% setelah website running',
    target: 'Warkop modern, Laundry, Online Shop, Kuliner Rumahan',
    benefits: [
      'Merapikan data penjualan otomatis',
      'Website Katalog Menu/Produk siap pakai & running',
      'Free panduan operasional sistem pasca-proyek',
    ],
    featured: true,
  },
  {
    id: 'mvp-launch',
    badge: '⚡ STARTUP READY',
    name: 'Paket "MVP LAUNCH"',
    subtitle: 'Standar Komersial Startup',
    price: 'Rp8.000.000 – Rp18.000.000',
    priceNote: 'Harga final sesuai scope proyek',
    target: 'Startup baru dan instansi yang butuh aplikasi siap edar pasar',
    benefits: [
      'System Blueprint UI/UX lengkap di Figma',
      'Full Coding & Deployment sistem Live 100%',
      'Free 1–2 Slot pelatihan tim internal (pilar Code Mentor)',
    ],
    featured: false,
  },
]

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--bg-lowest)' }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">02 · Layanan & Harga</p>
          <h2 className="section-title mb-4">
            Pilih Solusi yang{' '}
            <span className="gradient-text">Tepat</span> untuk Anda
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#bacac3' }}>
            Mulai dari Rp350.000 — setiap paket dirancang agar investasi digital Anda
            menghasilkan dampak nyata tanpa bikin cashflow sesak.
          </p>
        </motion.div>

        {/* Tiers */}
        {tiers.map((tier, ti) => (
          <div key={tier.id} className="mb-16">
            {/* Tier Header */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl">{tier.icon}</span>
              <div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#d9e2ff' }}
                >
                  {tier.label}
                </h3>
                <p className="text-xs mt-0.5" style={{ color: '#bacac3', fontFamily: 'Inter' }}>
                  {tier.desc}
                </p>
              </div>
            </motion.div>

            {/* Service Cards */}
            <div className="grid lg:grid-cols-3 gap-6 items-stretch">
              {tier.services.map((svc, i) => (
                <motion.div
                  key={svc.id}
                  className="relative flex flex-col"
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={svc.featured ? { transform: 'scale(1.04)', zIndex: 2 } : {}}
                >
                  <div
                    className="glass-card flex flex-col gap-4 h-full"
                    style={{
                      padding: '1.75rem',
                      ...(svc.featured
                        ? {
                            borderBottom: '4px solid #5ffbd6',
                            background: 'rgba(21,31,55,0.85)',
                            boxShadow: '0 0 40px rgba(95,251,214,0.1)',
                          }
                        : {}),
                    }}
                  >
                    {/* Badge */}
                    {svc.featured && (
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full self-start"
                        style={{
                          background: 'rgba(95,251,214,0.12)',
                          color: '#5ffbd6',
                          fontFamily: 'JetBrains Mono, monospace',
                          border: '1px solid rgba(95,251,214,0.3)',
                          letterSpacing: '0.06em',
                        }}
                      >
                        ⭐ {svc.badge}
                      </span>
                    )}

                    {/* ID + Name */}
                    <div>
                      <span className="section-label block mb-1" style={{ fontSize: '0.65rem' }}>
                        {svc.id}
                      </span>
                      <h3
                        className="text-lg font-bold mb-1"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#d9e2ff' }}
                      >
                        {svc.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div
                      className="py-3 px-4 rounded-lg"
                      style={{ background: 'rgba(95,251,214,0.05)', border: '1px solid rgba(95,251,214,0.1)' }}
                    >
                      <p
                        className="text-xl font-bold"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#5ffbd6' }}
                      >
                        {svc.price}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed" style={{ color: '#bacac3' }}>
                      {svc.desc}
                    </p>

                    {/* Features */}
                    <ul className="flex flex-col gap-2.5 flex-1">
                      {svc.features.map((f) => (
                        <li key={f.text} className="flex items-start gap-2.5 text-sm">
                          <span
                            className="material-symbols-outlined flex-shrink-0 mt-0.5"
                            style={{ fontSize: '17px', color: '#5ffbd6' }}
                          >
                            {f.icon}
                          </span>
                          <span style={{ color: '#d9e2ff' }}>{f.text}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="https://wa.me/6285117511005"
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`service-cta-${svc.id}`}
                      className={svc.featured ? 'btn-primary justify-center' : 'btn-outline justify-center'}
                      style={{ marginTop: 'auto' }}
                    >
                      Konsultasi Gratis
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Bundling Paket Utama */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl">💎</span>
            <div>
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#d9e2ff' }}
              >
                Paket Utama Terima Beres
              </h3>
              <p className="text-xs mt-0.5" style={{ color: '#bacac3' }}>
                BEST VALUE BUNDLING — solusi lengkap dalam satu paket harga tetap
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {bundlings.map((b, i) => (
              <motion.div
                key={b.id}
                className="glass-card p-7 flex flex-col gap-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                style={
                  b.featured
                    ? {
                        borderBottom: '4px solid #5ffbd6',
                        background: 'rgba(21,31,55,0.85)',
                        boxShadow: '0 0 40px rgba(95,251,214,0.1)',
                      }
                    : {}
                }
              >
                {/* Badge */}
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full self-start"
                  style={{
                    background: b.featured ? 'rgba(95,251,214,0.12)' : 'rgba(167,139,250,0.1)',
                    color: b.featured ? '#5ffbd6' : '#a78bfa',
                    fontFamily: 'JetBrains Mono, monospace',
                    border: b.featured ? '1px solid rgba(95,251,214,0.3)' : '1px solid rgba(167,139,250,0.3)',
                  }}
                >
                  {b.badge}
                </span>

                <div>
                  <h3
                    className="text-xl font-bold mb-0.5"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#d9e2ff' }}
                  >
                    {b.name}
                  </h3>
                  <p className="text-sm" style={{ color: '#bacac3' }}>{b.subtitle}</p>
                </div>

                {/* Price */}
                <div
                  className="py-4 px-5 rounded-xl"
                  style={{ background: 'rgba(95,251,214,0.05)', border: '1px solid rgba(95,251,214,0.12)' }}
                >
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#5ffbd6' }}
                  >
                    {b.price}
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#bacac3', fontFamily: 'Inter' }}>
                    {b.priceNote}
                  </p>
                </div>

                {/* Benefits */}
                <ul className="flex flex-col gap-2.5">
                  {b.benefits.map((ben) => (
                    <li key={ben} className="flex items-start gap-2.5 text-sm">
                      <span
                        className="material-symbols-outlined flex-shrink-0 mt-0.5"
                        style={{ fontSize: '17px', color: '#5ffbd6' }}
                      >
                        check_circle
                      </span>
                      <span style={{ color: '#d9e2ff' }}>{ben}</span>
                    </li>
                  ))}
                </ul>

                {/* Target */}
                <p className="text-xs" style={{ color: '#bacac3', fontFamily: 'JetBrains Mono' }}>
                  Cocok untuk: {b.target}
                </p>

                {/* CTA */}
                <a
                  href="https://wa.me/6285117511005"
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`bundling-cta-${b.id}`}
                  className={b.featured ? 'btn-primary justify-center' : 'btn-outline justify-center'}
                >
                  <span className="material-symbols-outlined text-base">whatsapp</span>
                  Pesan Sekarang
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
