import db from '../db.js'

export async function fetchAboutsByLang(langCode) {
    const result = await db.query(`
        SELECT 
            a.id, a.slug, a.display_order,
            at.id as translation_id, at.lang_code, at.title, at.content,
            COALESCE(
                json_agg(
                    json_build_object(
                        'id', ci.id,
                        'about_section_id', ci.about_section_id,
                        'image_path', ci.image_path,
                        'caption', ci.caption,
                        'display_order', ci.display_order
                    ) ORDER BY ci.display_order
                ) FILTER (WHERE ci.id IS NOT NULL),
                '[]'::json
            ) as images
        FROM cybevite.about_section a
        JOIN cybevite.about_section_translation at ON at.about_section_id = a.id
        LEFT JOIN cybevite.content_image ci ON ci.about_section_id = a.id
        WHERE at.lang_code = $1
        GROUP BY a.id, a.slug, a.display_order, at.id, at.lang_code, at.title, at.content
        ORDER BY a.id ASC
    `, [langCode]);
    
    // Transform to match expected frontend structure
    // This fixes the bug from original Prisma code (had double include)
    return result.rows.map(row => ({
        id: row.id,
        slug: row.slug,
        display_order: row.display_order,
        translations: [{
            id: row.translation_id,
            lang_code: row.lang_code,
            title: row.title,
            content: row.content
        }],
        images: Array.isArray(row.images) ? row.images : []
    }));
}
