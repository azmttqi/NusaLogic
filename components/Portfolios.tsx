'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Portfolios({ portfolios }: { portfolios: any[] }) {
  if (!portfolios || portfolios.length === 0) return null;

  return (
    <section id="portfolio" style={{ background: 'var(--bg-lowest)' }}>
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title mb-4">
            Karya dan <span className="gradient-text">Project Kami</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: '#bacac3' }}>
            Beberapa hasil karya dan proyek digital terbaik yang telah kami kembangkan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card flex flex-col h-full overflow-hidden group"
              style={{ padding: 0 }}
            >
              {item.imageUrl ? (
                <div className="aspect-video w-full overflow-hidden relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,19,42,0.9)] to-transparent opacity-60"></div>
                </div>
              ) : (
                <div className="aspect-video w-full overflow-hidden flex items-center justify-center" style={{ background: 'rgba(95,251,214,0.05)' }}>
                  <span style={{ color: '#bacac3', fontFamily: 'JetBrains Mono' }}>No Image</span>
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#d9e2ff' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm mb-6 flex-1" style={{ color: '#bacac3' }}>
                  {item.description}
                </p>
                {item.id && (
                  <Link 
                    href={`/portfolio/${item.id}`}
                    className="inline-flex items-center text-sm font-medium transition-colors hover-glow mt-auto"
                    style={{ color: '#5ffbd6', fontFamily: 'Inter' }}
                  >
                    View Project <span className="ml-1">&rarr;</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
