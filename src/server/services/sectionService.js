import { prisma } from '../db.js'
/**
export async function fetchSectionsByLang(langCode) {
    return prisma.sectionTranslation.findMany({
        where: { lang_code : langCode },
        include: { section: true },
        orderBy: { section: { id: 'asc' } }
    })
}
**/

export async function fetchSectionsByLang(langCode, slugValue) {
    return prisma.sectionTranslation.findMany({
        where: {
            lang_code: langCode,
            section: {
                slug: slugValue
            }
        },
        include: {
            section: {
                include: {
                    images: true, // ← JOIN ContentImage
                }
            }
        },
        orderBy: {
            section: {
                id: 'asc'
            }
        }
    })
}
