import { prisma } from '../db.js'

export async function fetchJobsByLang(langCode) {
    return prisma.jobTranslation.findMany({
        where: {
            language: langCode
        },
        include: {
            job: true
        },
        orderBy: {
            job: {
                id: 'asc'
            }
        }
    });
}