const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const members = await prisma.teamMember.findMany()

  for (const member of members) {
    if (member.name.toLowerCase().includes('azmi')) {
      await prisma.teamMember.update({
        where: { id: member.id },
        data: { imageUrl: '/team/Azmi-baru.jpg' }
      });
    }
  }
  
  console.log('Update completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
