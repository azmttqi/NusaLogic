import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import DynamicServices from '@/components/DynamicServices'
import Services from '@/components/Services'
import Portfolios from '@/components/Portfolios'
import Team from '@/components/Team'
import TechStack from '@/components/TechStack'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { prisma } from '@/lib/prisma'

export const revalidate = 0; // Disable static cache since data is dynamic

export default async function HomePage() {
  const portfolios = await prisma.portfolio.findMany({
    orderBy: { createdAt: 'desc' }
  });
  const services = await prisma.service.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const teamMembers = await prisma.teamMember.findMany({
    orderBy: { createdAt: 'asc' }
  });

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <DynamicServices services={services} />
        <Services />
        <Portfolios portfolios={portfolios} />
        <Team teamData={teamMembers} />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
