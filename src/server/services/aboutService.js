import { prisma } from '../db.js'

export async function fetchAboutsByLang(langCode) {
    return prisma.aboutSection.findMany({
        include: {
            translations: {
                where: { lang_code: langCode },
                select: {
                    title: true,
                    content: true,
                    lang_code: true
                }
            },
            include: {
                section: {
                    include: {
                        images: true, // ← JOIN ContentImage
                    }
                }
            }
        },
        orderBy: { id: 'asc' }
    });
}




