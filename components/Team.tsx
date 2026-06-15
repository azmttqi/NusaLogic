'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const team = [
  {
    id: 'rahmawati',
    name: 'Rahmawati',
    role: 'Chief Executive Officer',
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCOdihdeh5QB3lCulhy79H3AFBWHyQxDoqhxhJAhPiQmj0Tr1qZvqvi88mXEdxWL4BxVib0NAoUWQLTB1NzNXX0LHvBVTIE1_px5B6SNoicNioiuwTn9k-Kw9vcsDomOB3bqLlbVPyVy597jVxz1_wRhmObKY2CenIdJTIYvIKc9-__qHQXHLXukrWUbmimrJdvI0G7ZxQqIOHL0WTIYqSd-13LgV3_Yb3vwhN1UNWNJ2zs7e6Bs0eJQhvDnJoQtvhY3A7DGDrvBlei',
    socials: ['linkedin', 'mail'],
  },
  {
    id: 'amanda',
    name: 'Amanda Wijayanti',
    role: 'Business Analyst & Marketing',
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ3dDZzwGzVsIqSI1QbAWRkcjCyOVzClrDDphGKu1WfNRtHzqbLL6RrbKRuH3bdk39tU7m0yLMU3j4l5c4tDSwKEr_icqbBzzPCI7UnDHSQh68AThErJrQ8ZLUAySpSMlD_L5VxAe9I0ClL6fAegaa3FcwZbemPErBa883RbJITYs50_DAPp9un9EEhQTPFc2DV3Q7eVCch-K9LIhUDx63EmwQblRoh62Qar9QyvjMgBsGYuMNG8enxN6WNcMeeTk4ajiWBTRsmGNB',
    socials: ['linkedin', 'mail'],
  },
  {
    id: 'azmi',
    name: 'Azmi Ittaqi H.',
    role: 'Technical Lead & UI/UX',
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCygRf31Jscu5fbGHtzOO-E_UMNX0AD9Q1nrgmtVi3PnNTyPUo9uyG7Lyf0wOjC4a0SomKH24Kzm_Aih0HWBIPz6MVjHda59vokGurnSoaZYk0N9T_W6Yz_f-NcTewM9mYAGUIUmjo4ZG0IbCtmDioZdETb5eqqbB6zrSptISCzVvxeTCyD0ACOwXzw_0FqXKlkf4atcrlRe-hSFPQU-jaw8ftoSem_6ZxirOenjlyqlSU3hKF7_U88uwsY_VgCrgiAMXNyGt7EgOol',
    socials: ['github', 'linkedin'],
  },
  {
    id: 'mutiara',
    name: 'Mutiara Adinda',
    role: 'Operations & Finance',
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTMmEZpbNKc674Wg_BNhwU5Afpozbzwq4vVnbMKYKf0Tv2EtOFlmTsZXAq9ICEvjF8XlHsQyeai_RQkoXenNt6wGEMxlxLDrq3ewZFz0HPa0aiRWCynInn6h7sTHcWe7RN-encB_0jTjM6verjG1Y4kSd2m15yXY19mDxfLpe0Fvzj2jSQ_rhk1E2OTCYLBlRppNxD7i1fACOs-QTYxUEj0c0x4mvm1rRM8PgZEwMRuGxmPNKFeHt3N-We_9k-v79LLGMyP04AkDIm',
    socials: ['linkedin', 'mail'],
  },
]

function TeamCard({ member, index }: { member: (typeof team)[0]; index: number }) {
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
        <Image
          src={member.photo}
          alt={`${member.name} — ${member.role}`}
          fill
          className="object-cover"
          style={{
            filter: hovered ? 'grayscale(0%)' : 'grayscale(100%)',
            transition: 'filter 0.45s ease',
          }}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
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

export default function Team() {
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
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
