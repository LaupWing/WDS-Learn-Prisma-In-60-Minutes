import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
   // await prisma.user.create({
   //    data: {
   //       name: "Kyle",
   //       email: "kyle@test.com",
   //       age: 27
   //    }
   // })
}

main()
   .catch(e => {
      console.error(e.message)
   })
   .finally(async () => {
      await prisma.$disconnect()
   })