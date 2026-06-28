'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

function TeamCard({ member, index }: { member: any; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-xl cursor-pointer group"
      style={{ aspectRatio: '1 / 1' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      id={`team-card-${member.id}`}
    >
      {/* Photo */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={`${member.name} — ${member.role}`}
            fill
            className="object-cover"
            style={{
              filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.45s ease',
            }}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600">No Photo</div>
        )}
      </motion.div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: hovered
            ? 'linear-gradient(to top, rgba(8,19,42,0.92) 0%, rgba(8,19,42,0.4) 50%, transparent 100%)'
            : 'linear-gradient(to top, rgba(8,19,42,0.85) 0%, rgba(8,19,42,0.2) 60%, transparent 100%)',
          transition: 'background 0.45s ease',
        }}
      />

      {/* Border glow on hover */}
      <div
        className="absolute inset-0 rounded-xl transition-all duration-300"
        style={{
          border: hovered
            ? '1.5px solid rgba(95,251,214,0.5)'
            : '1.5px solid rgba(95,251,214,0.13)',
          boxShadow: hovered ? '0 0 24px rgba(95,251,214,0.15) inset' : 'none',
        }}
      />

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <motion.p
          className="text-base font-bold mb-0.5"
          style={{ fontFamily: 'Montserrat, sans-serif', color: '#d9e2ff' }}
          animate={{ y: hovered ? -4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {member.name}
        </motion.p>
        <motion.p
          className="text-xs"
          style={{ fontFamily: 'JetBrains Mono, monospace', color: '#5ffbd6' }}
          animate={{ opacity: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          {member.role}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function Team({ teamData = [] }: { teamData?: any[] }) {
  return (
    <section id="team" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">03 · Tim Kami</p>
          <h2 className="section-title mb-4">
            Orang-orang di Balik{' '}
            <span className="gradient-text">Nusalogic</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: '#bacac3' }}>
            Tim multidisiplin yang menggabungkan keahlian bisnis, teknologi, dan
            desain untuk menghadirkan solusi terbaik.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {teamData.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
