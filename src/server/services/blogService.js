import { prisma } from '../db.js'

export async function fetchBlogsByLang(langCode, slug) {
    return prisma.blogPostTranslation.findMany({
        where: {
            lang_code: langCode,
            ...(slug != null && { slug }) // Conditionally include slug only if it's not null
        },
        include: {
            blog_post: {
                include: {
                    images: { orderBy: { display_order: 'asc' } },
                    translations: true // Add this to support fallback title logic
                }
            }
        },
        orderBy: {
            blog_post: {
                id: 'asc'
            }
        }
    })
}