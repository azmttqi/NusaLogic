'use client'

import { motion } from 'framer-motion'

const techCategories = [
  {
    id: 'frontend',
    icon: '⚛️',
    category: 'Frontend',
    main: 'Next.js 14 + React',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
  },
  {
    id: 'backend',
    icon: '🔧',
    category: 'Backend',
    main: 'FastAPI / NestJS',
    tags: ['FastAPI', 'Python', 'NestJS', 'Prisma ORM', 'GraphQL'],
  },
  {
    id: 'data',
    icon: '📊',
    category: 'Data & Analytics',
    main: 'Looker Studio + BigQuery',
    tags: ['Looker Studio', 'BigQuery', 'PostgreSQL', 'Pandas', 'Recharts'],
  },
  {
    id: 'infra',
    icon: '☁️',
    category: 'Infrastruktur',
    main: 'Vercel + Railway',
    tags: ['Vercel', 'Railway', 'Docker', 'GitHub Actions', 'Supabase'],
  },
  {
    id: 'design',
    icon: '🎨',
    category: 'Desain',
    main: 'Figma + Storybook',
    tags: ['Figma', 'Storybook', 'Notion', 'Linear', 'GitHub'],
  },
  {
    id: 'edu',
    icon: '📚',
    category: 'Edukasi (Code Mentor)',
    main: 'Next.js + MDX',
    tags: ['MDX', 'Sandpack', 'Contentlayer', 'Algolia Search', 'Auth.js'],
  },
]

export default function TechStack() {
  return (
    <section id="techstack" style={{ background: 'var(--bg-lowest)' }}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">04 · Tech Stack</p>
          <h2 className="section-title mb-4">
            Teknologi yang Kami{' '}
            <span className="gradient-text">Andalkan</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: '#bacac3' }}>
            Kami menggunakan teknologi modern dan battle-tested untuk membangun
            solusi yang skalabel, aman, dan mudah dikelola.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              id={`tech-card-${cat.id}`}
              className="glass-card p-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(95,251,214,0.08)' }}
                >
                  {cat.icon}
                </div>
                <div>
                  <p
                    className="text-xs mb-0.5"
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      color: '#5ffbd6',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {cat.category}
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#d9e2ff' }}
                  >
                    {cat.main}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(95,251,214,0.1)' }} />

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
