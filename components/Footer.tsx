'use client'

import Image from 'next/image'

const navLinks = [
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Tim', href: '#team' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Kontak', href: '#cta' },
]

const contacts = [
  { icon: 'whatsapp', text: '0851-1751-1005', href: 'https://wa.me/6285117511005' },
  { icon: 'mail', text: 'nusalogic.id@gmail.com', href: 'mailto:nusalogic.id@gmail.com' },
  { icon: 'location_on', text: 'STMIK Tazkia, Indonesia 🇮🇩', href: '#' },
]

const socials = [
  { icon: 'chat', label: 'WhatsApp', href: 'https://wa.me/6285117511005' },
  { icon: 'person', label: 'LinkedIn', href: 'https://linkedin.com/company/nusalogic' },
  { icon: 'photo_camera', label: 'Instagram / TikTok', href: 'https://instagram.com/nusalogic.id' },
]

export default function Footer() {
  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        background: 'var(--bg-lowest)',
        borderTop: '1px solid rgba(95,251,214,0.1)',
      }}
    >
      <div className="section-container" style={{ padding: '60px 64px 40px' }}>
        {/* Top 3-column */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center rounded-full bg-white p-2 shadow-[0_0_12px_rgba(95,251,214,0.15)]">
                <Image
                  src="/NusaLogic-Logo.png"
                  alt="NusaLogic Logo"
                  width={38}
                  height={38}
                  className="object-contain rounded-full"
                />
              </div>
              <span
                className="text-lg tracking-tight"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: '#d9e2ff' }}
              >
                Nusa<span style={{ color: '#5ffbd6' }}>logic</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#bacac3', maxWidth: '260px' }}>
              Mini startup konsultan IT & Data dari STMIK Tazkia. Solusi digital
              realistis untuk bisnis yang ingin naik level — mulai Rp350.000.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'rgba(95,251,214,0.06)',
                    border: '1px solid rgba(95,251,214,0.13)',
                    color: '#bacac3',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(95,251,214,0.12)'
                    e.currentTarget.style.borderColor = 'rgba(95,251,214,0.4)'
                    e.currentTarget.style.color = '#5ffbd6'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(95,251,214,0.06)'
                    e.currentTarget.style.borderColor = 'rgba(95,251,214,0.13)'
                    e.currentTarget.style.color = '#bacac3'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    {s.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Nav */}
          <div>
            <h4
              className="text-sm font-bold mb-5"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                color: '#d9e2ff',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontSize: '0.7rem',
              }}
            >
              Navigasi
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-sm transition-colors duration-200 flex items-center gap-2 no-underline"
                    style={{ color: '#bacac3', fontFamily: 'Inter' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#5ffbd6')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#bacac3')}
                  >
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: '#5ffbd6',
                        flexShrink: 0,
                      }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Kontak */}
          <div>
            <h4
              className="text-sm font-bold mb-5"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                color: '#d9e2ff',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontSize: '0.7rem',
              }}
            >
              Kontak
            </h4>
            <ul className="flex flex-col gap-4">
              {contacts.map((c) => (
                <li key={c.text}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm transition-colors duration-200 no-underline"
                    style={{ color: '#bacac3', fontFamily: 'Inter' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#5ffbd6')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#bacac3')}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#5ffbd6' }}>
                      {c.icon}
                    </span>
                    {c.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social handles */}
            <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgba(95,251,214,0.08)' }}>
              <p className="text-xs mb-2" style={{ color: '#bacac3', fontFamily: 'JetBrains Mono' }}>
                Media Sosial
              </p>
              <div className="flex flex-col gap-1.5">
                {[
                  { platform: 'LinkedIn', handle: 'Nusalogic', href: 'https://linkedin.com/company/nusalogic' },
                  { platform: 'Instagram / TikTok', handle: '@nusalogic.id', href: 'https://instagram.com/nusalogic.id' },
                ].map((s) => (
                  <a
                    key={s.handle}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs no-underline transition-colors"
                    style={{ color: '#bacac3', fontFamily: 'Inter' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#5ffbd6')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#bacac3')}
                  >
                    <span style={{ color: 'rgba(95,251,214,0.5)' }}>{s.platform}:</span>{' '}
                    {s.handle}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid rgba(95,251,214,0.08)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(186,202,195,0.5)', fontFamily: 'JetBrains Mono' }}>
            © 2025 Nusalogic — STMIK Tazkia. Semua hak dilindungi undang-undang.
          </p>
          <p className="text-xs" style={{ color: 'rgba(186,202,195,0.4)', fontFamily: 'JetBrains Mono' }}>
            Dibuat dengan <span style={{ color: '#5ffbd6' }}>♥</span> di Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}
