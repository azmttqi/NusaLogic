'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function CTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setStatus('error')
      setMessage('Masukkan alamat email yang valid.')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f0ccec04-795b-4554-83de-d625a1b6613e',
          email: email,
          subject: 'Lead Baru dari Website Nusalogic!',
          message: `Halo Tim Nusalogic,\n\nAda calon klien baru yang meninggalkan email dan tertarik untuk dikirimkan brosur/penawaran.\n\nEmail Klien: ${email}\n\nMohon segera dihubungi dalam 1x24 jam.`,
          from_name: 'Nusalogic Website',
        }),
      })

      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setMessage(`Terima kasih! Kami akan menghubungi ${email} dalam 1×24 jam.`)
        setEmail('')
      } else {
        setStatus('error')
        setMessage('Gagal mengirim. Silakan coba lagi atau hubungi via WA.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Terjadi kesalahan jaringan. Coba lagi nanti.')
    }
  }

  return (
    <section
      id="cta"
      className="relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(95,251,214,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left: WA CTA */}
          <motion.div
            className="glass-card p-8 flex flex-col gap-5"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(95,251,214,0.1)', border: '1px solid rgba(95,251,214,0.2)' }}
            >
              <span style={{ fontSize: '2rem' }}>💬</span>
            </div>

            <div>
              <p className="section-label mb-2">Konsultasi via WhatsApp</p>
              <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Montserrat', color: '#d9e2ff' }}>
                Hubungi Tim Kami{' '}
                <span className="gradient-text">Sekarang</span>
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: '#bacac3' }}>
                Chat langsung dengan konsultan kami. Konsultasi{' '}
                <span style={{ color: '#5ffbd6', fontWeight: 600 }}>GRATIS</span> tanpa syarat.
                Slot promo perdana terbatas untuk{' '}
                <span style={{ color: '#5ffbd6', fontWeight: 600 }}>3 UMKM tercepat</span> pekan ini!
              </p>
            </div>

            <a
              href="https://wa.me/6285117511005?text=Halo%20Nusalogic!%20Saya%20tertarik%20konsultasi%20layanan%20digital%20untuk%20bisnis%20saya."
              target="_blank"
              rel="noopener noreferrer"
              id="cta-whatsapp-btn"
              className="btn-primary justify-center text-center"
            >
              <span className="material-symbols-outlined text-base">whatsapp</span>
              Chat di WhatsApp — 0851-1751-1005
            </a>

            {/* Contact details */}
            <div className="flex flex-col gap-2 pt-2" style={{ borderTop: '1px solid rgba(95,251,214,0.1)' }}>
              {[
                { icon: 'mail', text: 'nusalogic.id@gmail.com', href: 'mailto:nusalogic.id@gmail.com' },
                { icon: 'phone', text: '0851-1751-1005', href: 'https://wa.me/6285117511005' },
              ].map((c) => (
                <a
                  key={c.text}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm no-underline transition-colors"
                  style={{ color: '#bacac3' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#5ffbd6')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#bacac3')}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#5ffbd6' }}>
                    {c.icon}
                  </span>
                  {c.text}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Email form */}
          <motion.div
            className="glass-card p-8 flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(95,251,214,0.1)', border: '1px solid rgba(95,251,214,0.2)' }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '28px', color: '#5ffbd6' }}
              >
                mark_email_unread
              </span>
            </div>

            <div>
              <p className="section-label mb-2">Atau Tinggalkan Email</p>
              <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Montserrat', color: '#d9e2ff' }}>
                Kami yang Akan{' '}
                <span className="gradient-text">Menghubungi</span>
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: '#bacac3' }}>
                Tinggalkan email Anda dan tim kami akan mengirimkan brosur resmi
                beserta penawaran terbaik dalam 1×24 jam.
              </p>
            </div>

            {status !== 'success' ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  id="cta-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setStatus('idle')
                    setMessage('')
                  }}
                  placeholder="email@perusahaan.com"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                  style={{
                    background: 'rgba(8,19,42,0.8)',
                    border:
                      status === 'error'
                        ? '1.5px solid rgba(255,100,100,0.6)'
                        : '1.5px solid rgba(95,251,214,0.2)',
                    color: '#d9e2ff',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(95,251,214,0.5)'
                    e.target.style.boxShadow = '0 0 16px rgba(95,251,214,0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor =
                      status === 'error' ? 'rgba(255,100,100,0.6)' : 'rgba(95,251,214,0.2)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
                <button 
                  id="cta-submit-btn" 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="btn-primary justify-center transition-all"
                  style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'wait' : 'pointer' }}
                >
                  <span className="material-symbols-outlined text-base">
                    {status === 'loading' ? 'hourglass_empty' : 'send'}
                  </span>
                  {status === 'loading' ? 'Mengirim...' : 'Kirim & Minta Brosur'}
                </button>
                {status === 'error' && (
                  <p className="text-xs" style={{ color: 'rgba(255,100,100,0.9)' }}>
                    ⚠ {message}
                  </p>
                )}
              </form>
            ) : (
              <motion.div
                className="py-4 px-5 rounded-xl text-center"
                style={{ background: 'rgba(95,251,214,0.08)', border: '1px solid rgba(95,251,214,0.3)' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span
                  className="material-symbols-outlined block mx-auto mb-2"
                  style={{ fontSize: '32px', color: '#5ffbd6' }}
                >
                  check_circle
                </span>
                <p className="text-sm font-medium" style={{ color: '#5ffbd6' }}>{message}</p>
              </motion.div>
            )}

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3 pt-2" style={{ borderTop: '1px solid rgba(95,251,214,0.1)' }}>
              {[
                { icon: 'verified', text: 'Konsultasi Gratis' },
                { icon: 'lock', text: 'Data Aman' },
                { icon: 'schedule', text: 'Respons < 24 Jam' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5 text-xs" style={{ color: '#bacac3' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '15px', color: '#5ffbd6' }}>
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
