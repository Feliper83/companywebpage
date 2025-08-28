import { prisma } from '../db.js'

export async function fetchBenefitsByLang(langCode) {
    return prisma.benefitTranslation.findMany({
        where: {
            language: langCode  // ✅ campo correcto
        },
        include: {
            benefit: true        // ✅ incluye el modelo Benefit
        },
        orderBy: {
            id: 'asc'            // ✅ puedes ordenar por id u otro campo válido
        }
    });
}