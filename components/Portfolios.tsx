'use client'

import { motion } from 'framer-motion'

export default function Portfolios({ portfolios }: { portfolios: any[] }) {
  if (!portfolios || portfolios.length === 0) return null;

  return (
    <section id="portfolio" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Portfolio</span>
          </h2>
          <p className="text-lg text-zinc-400">
            Karya dan proyek terbaik yang telah kami selesaikan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-blue-500/50 transition-colors"
            >
              {item.imageUrl ? (
                <div className="aspect-video w-full overflow-hidden bg-zinc-800">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full overflow-hidden bg-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-600 font-medium">No Image</span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{item.description}</p>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                  >
                    View Project <span className="ml-1">&rarr;</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
