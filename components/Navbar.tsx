'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Tim', href: '#team' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Kontak', href: '#cta' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  const handleLinkClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        backgroundColor: scrolled ? 'rgba(8,19,42,0.95)' : 'rgba(8,19,42,0.75)',
        borderBottom: scrolled ? '1px solid rgba(95,251,214,0.13)' : '1px solid transparent',
        padding: scrolled ? '0.5rem 0' : '1rem 0',
      }}
    >
      <div
        className="max-w-content mx-auto flex items-center justify-between"
        style={{ padding: '0 64px' }}
        ref={menuRef}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleLinkClick('#hero') }}
          className="flex items-center gap-2.5 no-underline"
        >
          <div className="flex items-center justify-center rounded-full bg-white p-1.5 shadow-[0_0_12px_rgba(95,251,214,0.15)]">
            <Image
              src="/NusaLogic-Logo.png"
              alt="NusaLogic Logo"
              width={34}
              height={34}
              className="object-contain rounded-full"
            />
          </div>
          <span
            className="text-lg tracking-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: '#d9e2ff' }}
          >
            Nusa<span style={{ color: '#5ffbd6' }}>logic</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
              className="text-sm font-medium transition-colors duration-200 no-underline"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#bacac3',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#5ffbd6')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#bacac3')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#cta') }}
            className="btn-primary text-sm"
            style={{ padding: '0.5rem 1.25rem' }}
          >
            Mulai Sekarang
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          id="hamburger-btn"
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-md transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block rounded-full"
              style={{ background: '#5ffbd6', height: '2px', width: i === 1 ? '20px' : '26px' }}
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 10 }
                    : i === 1
                    ? { opacity: 0 }
                    : { rotate: -45, y: -10 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.25 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              background: 'rgba(8,19,42,0.98)',
              borderBottom: '1px solid rgba(95,251,214,0.13)',
              overflow: 'hidden',
            }}
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href) }}
                  className="text-base font-medium py-2 no-underline border-b"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#bacac3',
                    borderColor: 'rgba(95,251,214,0.1)',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={(e) => { e.preventDefault(); handleLinkClick('#cta') }}
                className="btn-primary mt-2 justify-center"
              >
                Mulai Sekarang
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
