import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
   await prisma.user.deleteMany()

   const uniqueUser = await prisma.user.findUnique({
      where: {
         age_name: {
            name: "Kyle",
            age: 27
         }
      }
   })

   console.log(uniqueUser)
   
   const user = await prisma.user.create({
      data: {
         name: "Kyle",
         email: "kyle@test.com",
         age: 27,
         userPreference: {
            create: {
               emailUpdates: true
            } 
         }
      },
      include: {
         userPreference: true
      }
   })
   console.log(user)
}

main()
   .catch(e => {
      console.error(e.message)
   })
   .finally(async () => {
      await prisma.$disconnect()
   })