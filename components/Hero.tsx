'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { initShader, renderFrame, ShaderProgram } from '@/lib/shader'

const stats = [
  { value: '20+', label: 'Proyek Selesai' },
  { value: '4', label: 'Anggota Tim' },
  { value: '3', label: 'Layanan Utama' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shaderRef = useRef<ShaderProgram | null>(null)
  const rafRef = useRef<number>(0)
  const startTimeRef = useRef<number>(Date.now())
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const sp = initShader(canvas)
    shaderRef.current = sp

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: canvas.height - e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const loop = () => {
      if (!shaderRef.current) return
      const elapsed = (Date.now() - startTimeRef.current) / 1000
      renderFrame(shaderRef.current, elapsed, mouseRef.current)
      rafRef.current = requestAnimationFrame(loop)
    }
    if (sp) loop()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-lowest)' }}
    >
      {/* WebGL Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.4, zIndex: 0 }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(95,251,214,0.04) 0%, transparent 70%), linear-gradient(180deg, transparent 60%, var(--bg-primary) 100%)',
          zIndex: 1,
        }}
      />

      <div
        className="relative w-full max-w-content mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        style={{ padding: '120px 64px 80px', zIndex: 2 }}
      >
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="section-label inline-flex items-center gap-2"
            >
              <span
                className="inline-block w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#5ffbd6' }}
              />
              Nusalogic · Integrated Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="section-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Solusi IT <span className="gradient-text">Terintegrasi</span>{' '}
            &amp; Hub Edukasi Digital
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-base leading-relaxed max-w-lg"
            style={{ color: '#bacac3', fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kami membantu UMKM, startup, dan akademisi bertransformasi digital melalui
            analisis data strategis, desain sistem presisi, dan mentoring teknologi
            berbasis kasus nyata.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
              id="hero-cta-services"
            >
              <span className="material-symbols-outlined text-base">rocket_launch</span>
              Lihat Layanan
            </a>
            <a
              href="#cta"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-outline"
              id="hero-cta-contact"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              Hubungi Kami
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6"
            style={{ borderTop: '1px solid rgba(95,251,214,0.13)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#5ffbd6' }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    color: '#bacac3',
                    letterSpacing: '0.05em',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Nusantara Map Image */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            className="relative animate-float"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(56,222,187,0.25))',
              maxWidth: '560px',
              width: '100%',
            }}
          >
            {/* Decorative ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(ellipse, rgba(95,251,214,0.06) 0%, transparent 70%)',
                transform: 'scale(1.2)',
              }}
            />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvFTHnhuFsyzdyX70qfB1yvaXuGUaTHS8d-1JqSvtpAsWmVo5gvSX2V4QX2g6lBNPDmz3opvncWVSW_Bmqrw0BYyFNWBLlhmTg07plzgMTA9tb_Y0VNI9j4IH2o2kiIgYmdSEhqLHXqMzNXmWrJXIGPQA4EOSmZBtBECaHl1qeVeBIAW_QOcsn15ooJtUO66guc_GNLl3liX13zbhPtAq-tug51ohfXwHjV5Zz7MNBNFCm1mY9n3BqbAcnqsD8nY7z5nYINzdmjWsx"
              alt="Peta Nusantara Digital — Nusalogic"
              width={560}
              height={400}
              className="w-full h-auto object-contain relative"
              style={{ borderRadius: '1rem' }}
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs" style={{ fontFamily: 'JetBrains Mono', color: 'rgba(186,202,195,0.5)', letterSpacing: '0.1em' }}>
          SCROLL
        </span>
        <motion.div
          className="w-px h-10"
          style={{ background: 'linear-gradient(180deg, rgba(95,251,214,0.5), transparent)' }}
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </section>
  )
}
