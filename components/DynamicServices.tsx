'use client'

import { motion } from 'framer-motion'

export default function DynamicServices({ services }: { services: any[] }) {
  if (!services || services.length === 0) return null;

  return (
    <section id="dynamic-services" className="py-12 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Layanan <span className="text-blue-500">Kami</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-3">
                {item.icon && <span className="text-blue-500">{item.icon}</span>}
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
