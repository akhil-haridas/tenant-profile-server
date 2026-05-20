import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const tenant = await prisma.tenant.create({
        data: {
            fullName: 'Jimmy Flemmings',
            email: 'jimmy@example.com',
            phone: '+971501234567',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
            score: 8.0,
            rating: 'Excellent',

            rentals: {
                create: [
                    {
                        address: 'Suite 5, Business Bay',
                        city: 'Dubai',
                        country: 'UAE',
                        startDate: new Date('2023-01-01'),
                        endDate: new Date('2023-12-31')
                    },
                    {
                        address: 'Downtown Apartment',
                        city: 'Abu Dhabi',
                        country: 'UAE',
                        startDate: new Date('2022-01-01'),
                        endDate: new Date('2022-12-31')
                    }
                ]
            }
        }
    });

    console.log(tenant);
}

main()
    .catch((error) => {
        console.error(error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });