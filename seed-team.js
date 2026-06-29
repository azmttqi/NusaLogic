const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const initialTeam = [
  {
    name: 'Rahmawati',
    role: 'Chief Executive Officer',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOdihdeh5QB3lCulhy79H3AFBWHyQxDoqhxhJAhPiQmj0Tr1qZvqvi88mXEdxWL4BxVib0NAoUWQLTB1NzNXX0LHvBVTIE1_px5B6SNoicNioiuwTn9k-Kw9vcsDomOB3bqLlbVPyVy597jVxz1_wRhmObKY2CenIdJTIYvIKc9-__qHQXHLXukrWUbmimrJdvI0G7ZxQqIOHL0WTIYqSd-13LgV3_Yb3vwhN1UNWNJ2zs7e6Bs0eJQhvDnJoQtvhY3A7DGDrvBlei',
    linkedinUrl: '',
    githubUrl: '',
  },
  {
    name: 'Amanda Wijayanti',
    role: 'Business Analyst & Marketing',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ3dDZzwGzVsIqSI1QbAWRkcjCyOVzClrDDphGKu1WfNRtHzqbLL6RrbKRuH3bdk39tU7m0yLMU3j4l5c4tDSwKEr_icqbBzzPCI7UnDHSQh68AThErJrQ8ZLUAySpSMlD_L5VxAe9I0ClL6fAegaa3FcwZbemPErBa883RbJITYs50_DAPp9un9EEhQTPFc2DV3Q7eVCch-K9LIhUDx63EmwQblRoh62Qar9QyvjMgBsGYuMNG8enxN6WNcMeeTk4ajiWBTRsmGNB',
    linkedinUrl: '',
    githubUrl: '',
  },
  {
    name: 'Azmi Ittaqi H.',
    role: 'Technical Lead & UI/UX',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCygRf31Jscu5fbGHtzOO-E_UMNX0AD9Q1nrgmtVi3PnNTyPUo9uyG7Lyf0wOjC4a0SomKH24Kzm_Aih0HWBIPz6MVjHda59vokGurnSoaZYk0N9T_W6Yz_f-NcTewM9mYAGUIUmjo4ZG0IbCtmDioZdETb5eqqbB6zrSptISCzVvxeTCyD0ACOwXzw_0FqXKlkf4atcrlRe-hSFPQU-jaw8ftoSem_6ZxirOenjlyqlSU3hKF7_U88uwsY_VgCrgiAMXNyGt7EgOol',
    linkedinUrl: '',
    githubUrl: '',
  },
  {
    name: 'Mutiara Adinda',
    role: 'Operations & Finance',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTMmEZpbNKc674Wg_BNhwU5Afpozbzwq4vVnbMKYKf0Tv2EtOFlmTsZXAq9ICEvjF8XlHsQyeai_RQkoXenNt6wGEMxlxLDrq3ewZFz0HPa0aiRWCynInn6h7sTHcWe7RN-encB_0jTjM6verjG1Y4kSd2m15yXY19mDxfLpe0Fvzj2jSQ_rhk1E2OTCYLBlRppNxD7i1fACOs-QTYxUEj0c0x4mvm1rRM8PgZEwMRuGxmPNKFeHt3N-We_9k-v79LLGMyP04AkDIm',
    linkedinUrl: '',
    githubUrl: '',
  },
]

async function main() {
  for (const member of initialTeam) {
    await prisma.teamMember.create({
      data: member
    })
  }
  console.log('Seed completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
