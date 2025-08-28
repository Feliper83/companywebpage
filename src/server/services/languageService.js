import { prisma } from '../db.js'

export async function fetchLanguages() {
    return prisma.language.findMany({
        orderBy: { code: 'asc' }
    })
}
