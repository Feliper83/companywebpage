import { prisma } from '../db.js'

export async function fetchServicesByLang(langCode) {
    return prisma.serviceTranslation.findMany({
        where: { lang_code: langCode },
        include: { service: true },
        orderBy: { service: { display_order: 'asc' } }
    })
}
