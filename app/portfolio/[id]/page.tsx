import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'

export const revalidate = 0;

export default async function PortfolioDetail({ params }: { params: { id: string } }) {
  const portfolio = await prisma.portfolio.findUnique({
    where: { id: params.id }
  })

  if (!portfolio) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="section-container max-w-4xl">
          {/* Back button */}
          <div className="mb-8">
            <Link 
              href="/#portfolio" 
              className="inline-flex items-center text-sm font-medium transition-colors hover-glow"
              style={{ color: '#bacac3' }}
            >
              &larr; Kembali ke Portfolio
            </Link>
          </div>

          {/* Header */}
          <div className="mb-10 text-center">
            <p className="section-label mb-4">Case Study</p>
            <h1 
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#d9e2ff' }}
            >
              {portfolio.title}
            </h1>
            <p className="text-lg" style={{ color: '#bacac3' }}>
              {portfolio.description}
            </p>
          </div>

          {/* Hero Image */}
          {portfolio.imageUrl && (
            <div className="rounded-2xl overflow-hidden mb-12 border" style={{ borderColor: 'rgba(95,251,214,0.1)' }}>
              <img 
                src={portfolio.imageUrl} 
                alt={portfolio.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div 
            className="glass-card p-8 md:p-12 prose prose-invert max-w-none"
            style={{ 
              background: 'rgba(21,31,55,0.4)',
              color: '#bacac3'
            }}
          >
            {portfolio.content ? (
              <ReactMarkdown
                components={{
                  h3: ({node, ...props}) => <h3 style={{ color: '#d9e2ff', fontFamily: 'Montserrat, sans-serif', marginTop: '2rem' }} {...props} />,
                  p: ({node, ...props}) => <p style={{ lineHeight: '1.8' }} {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-2" {...props} />,
                  li: ({node, ...props}) => <li {...props} />
                }}
              >
                {portfolio.content}
              </ReactMarkdown>
            ) : (
              <p>Belum ada detail studi kasus untuk project ini.</p>
            )}

            {/* CTA */}
            <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#d9e2ff' }}>Tertarik dengan project seperti ini?</h3>
              <a 
                href="https://wa.me/6285117511005" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary inline-flex"
              >
                Konsultasi Sekarang
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
