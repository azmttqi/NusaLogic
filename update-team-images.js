const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const members = await prisma.teamMember.findMany()

  for (const member of members) {
    let newImageUrl = member.imageUrl;
    
    if (member.name.toLowerCase().includes('rahmawati')) {
      newImageUrl = '/team/Rahmawati.jpeg';
    } else if (member.name.toLowerCase().includes('amanda')) {
      newImageUrl = '/team/Amanda.jpeg';
    } else if (member.name.toLowerCase().includes('azmi')) {
      newImageUrl = '/team/Azmi.jpg';
    } else if (member.name.toLowerCase().includes('mutiara')) {
      newImageUrl = '/team/mutiara.jpeg';
    }

    await prisma.teamMember.update({
      where: { id: member.id },
      data: { imageUrl: newImageUrl }
    });
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
