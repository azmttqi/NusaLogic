import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Team from '@/components/Team'
import TechStack from '@/components/TechStack'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
