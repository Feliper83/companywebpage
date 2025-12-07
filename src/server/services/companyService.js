import db from '../db.js'

export async function fetchCompaniesByLang(langCode) {
    const result = await db.query(`
        SELECT 
            ct.id, ct.company_id, ct.language, ct.name, ct.slogan, ct.description,
            c.email, c.phone, c.website, c.address, c.logo_url,
            c.facebook, c.twitter, c.linkedin, c.instagram,
            c.created_at, c.updated_at
        FROM cybevite.company_translation ct
        JOIN cybevite.company c ON c.id = ct.company_id
        WHERE ct.language = $1
    `, [langCode]);
    
    // Transform to match Prisma structure (nested company object)
    return result.rows.map(row => ({
        id: row.id,
        company_id: row.company_id,
        language: row.language,
        name: row.name,
        slogan: row.slogan,
        description: row.description,
        company: {
            id: row.company_id,
            email: row.email,
            phone: row.phone,
            website: row.website,
            address: row.address,
            logo_url: row.logo_url,
            facebook: row.facebook,
            twitter: row.twitter,
            linkedin: row.linkedin,
            instagram: row.instagram,
            created_at: row.created_at,
            updated_at: row.updated_at
        }
    }));
}
