import { prisma } from '../db.js'

export async function fetchCompaniesByLang(langCode) {
    return prisma.companyTranslation.findMany({
        where: {
            language: langCode
        },
        include: {
            company: true
        }
    })
}