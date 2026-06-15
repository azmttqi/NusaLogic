'use client'

import { motion } from 'framer-motion'

const strengths = [
  {
    id: 'hub',
    icon: '🔗',
    title: 'Hub Koneksi',
    desc: 'Menghubungkan talenta IT, klien, dan komunitas teknologi dalam satu ekosistem yang saling mendukung dan berkembang bersama.',
  },
  {
    id: 'precision',
    icon: '🎯',
    title: 'Presisi Solusi',
    desc: 'Setiap solusi dimulai dengan validasi data di awal — tidak ada pendekatan generik. Semuanya disesuaikan dengan kebutuhan spesifik bisnis Anda.',
  },
  {
    id: 'school',
    icon: '🎓',
    title: 'Edukasi Berkelanjutan',
    desc: 'Pilar Code Mentor kami membekali individu dan tim internal dengan skill teknologi relevan melalui kurikulum berbasis kasus nyata industri.',
  },
]

const markets = [
  {
    icon: 'storefront',
    title: 'UMKM',
    desc: 'Solusi terjangkau mulai Rp350.000 untuk transformasi digital bisnis kecil — warkop, laundry, kuliner, toko lokal.',
  },
  {
    icon: 'rocket_launch',
    title: 'Startup & Agensi',
    desc: 'Infrastruktur teknis, design system, dan analitik yang skalabel untuk bisnis yang sedang berkembang pesat menuju pasar.',
  },
  {
    icon: 'auto_stories',
    title: 'Akademisi',
    desc: 'Program mentoring dan workshop untuk mahasiswa dan peneliti yang ingin menguasai teknologi terkini dari praktisi industri.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-container">
        {/* Top: 2-column filosofi */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-5"
          >
            <motion.p variants={fadeUp} custom={0} className="section-label">
              01 · Tentang Kami
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="section-title">
              Mini Startup IT dari{' '}
              <span className="gradient-text">Kampus Tazkia</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base leading-relaxed"
              style={{ color: '#bacac3' }}
            >
              Nusalogic adalah mini startup konsultan IT & Data yang lahir dari kampus{' '}
              <span style={{ color: '#5ffbd6', fontWeight: 600 }}>STMIK Tazkia</span>.
              Kami percaya bahwa digitalisasi bukan hak eksklusif korporasi besar —
              UMKM, startup, dan individu pun berhak mendapatkan solusi teknologi
              yang presisi, terjangkau, dan berdampak nyata.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-base leading-relaxed"
              style={{ color: '#bacac3' }}
            >
              Core value kami:{' '}
              <span
                className="font-medium"
                style={{
                  color: '#d9e2ff',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.85rem',
                }}
              >
                "Validasi Berbasis Data di Awal & Edukasi Berkelanjutan di Akhir"
              </span>{' '}
              — setiap proyek dimulai dari riset, bukan asumsi.
            </motion.p>

            {/* Badges */}
            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-2 mt-2">
              {['STMIK Tazkia', 'Data-Driven', 'Human-Centered', 'Agile', 'Open Source'].map((b) => (
                <span key={b} className="tag-pill">{b}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: visual block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="glass-card p-8 relative overflow-hidden"
              style={{ minHeight: '320px' }}
            >
              {/* Decorative background */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(95,251,214,0.08) 0%, transparent 70%)',
                  transform: 'translate(30%, -30%)',
                }}
              />

              <div className="relative flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                    style={{ background: 'rgba(95,251,214,0.12)' }}
                  >
                    🇮🇩
                  </div>
                  <div>
                    <p className="text-xs section-label mb-0">Berbasis di Indonesia</p>
                    <p className="text-sm font-medium" style={{ color: '#d9e2ff' }}>
                      Melayani seluruh Nusantara
                    </p>
                  </div>
                </div>

                {[
                  { label: 'Kepuasan Klien', val: 98 },
                  { label: 'Proyek Tepat Waktu', val: 94 },
                  { label: 'Retensi Klien', val: 87 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span style={{ color: '#bacac3', fontFamily: 'Inter' }}>{item.label}</span>
                      <span style={{ color: '#5ffbd6', fontFamily: 'JetBrains Mono' }}>
                        {item.val}%
                      </span>
                    </div>
                    <div
                      className="w-full rounded-full overflow-hidden"
                      style={{ height: '4px', background: 'rgba(95,251,214,0.1)' }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #5ffbd6, #38debb)',
                          width: `${item.val}%`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}

                {/* Promo banner */}
                <div
                  className="rounded-lg p-3 flex items-center gap-3 mt-1"
                  style={{ background: 'rgba(95,251,214,0.07)', border: '1px dashed rgba(95,251,214,0.3)' }}
                >
                  <span style={{ fontSize: '1.4rem' }}>🔥</span>
                  <div>
                    <p className="text-xs font-bold" style={{ color: '#5ffbd6', fontFamily: 'Montserrat' }}>
                      PROMO PERDANA — DISKON 35%
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#bacac3' }}>
                      Hanya untuk 3 UMKM tercepat pekan ini!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strength Cards */}
        <div className="mb-20">
          <motion.p
            className="section-label mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Keunggulan Kami
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((s, i) => (
              <motion.div
                key={s.id}
                className="glass-card p-6 flex flex-col gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(95,251,214,0.08)' }}
                >
                  {s.icon}
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#d9e2ff' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#bacac3' }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Target Pasar */}
        <div>
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">Target Pasar</p>
            <h2 className="section-title">
              Siapa yang Kami <span className="gradient-text">Layani</span>?
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {markets.map((m, i) => (
              <motion.div
                key={m.title}
                className="glass-card p-7 flex flex-col gap-4 text-center items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(95,251,214,0.08)' }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '28px', color: '#5ffbd6' }}
                  >
                    {m.icon}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#d9e2ff' }}
                >
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#bacac3' }}>
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
