import { prisma } from '../lib/prisma';

export const getTenantById = async (tenantId: string) => {
    return prisma.tenant.findUnique({
        where: {
            id: tenantId
        },
        include: {
            rentals: {
                orderBy: {
                    startDate: 'desc'
                }
            }
        }
    });
};

export const getFirstTenant = async () => {
    return prisma.tenant.findFirst({
        include: {
            rentals: {
                orderBy: {
                    startDate: 'desc'
                }
            }
        }
    });
};