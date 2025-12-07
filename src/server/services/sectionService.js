import db from '../db.js'

export async function fetchSectionsByLang(langCode, slugValue) {
    console.log('[sectionService] Fetching sections with lang:', langCode, 'slug:', slugValue);
    try {
        const result = await db.query(`
            SELECT 
                st.id, st.section_id, st.lang_code, st.title, 
                st.description, st.cta_text,
                s.slug, s.display_order,
                COALESCE(
                    json_agg(
                        json_build_object(
                            'id', ci.id,
                            'section_id', ci.section_id,
                            'image_path', ci.image_path,
                            'caption', ci.caption,
                            'display_order', ci.display_order
                        ) ORDER BY ci.display_order
                    ) FILTER (WHERE ci.id IS NOT NULL),
                    '[]'::json
                ) as images
            FROM cybevite.section_translation st
            JOIN cybevite.section s ON s.id = st.section_id
            LEFT JOIN cybevite.content_image ci ON ci.section_id = s.id
            WHERE st.lang_code = $1 AND s.slug = $2
            GROUP BY st.id, st.section_id, st.lang_code, st.title, st.description, st.cta_text, s.id, s.slug, s.display_order
            ORDER BY s.id ASC
        `, [langCode, slugValue]);
        console.log('[sectionService] Query successful, rows:', result.rows.length);
        
        // Transform to match Prisma structure
        return result.rows.map(row => ({
            id: row.id,
            section_id: row.section_id,
            lang_code: row.lang_code,
            title: row.title,
            description: row.description,
            cta_text: row.cta_text,
            section: {
                id: row.section_id,
                slug: row.slug,
                display_order: row.display_order,
                images: Array.isArray(row.images) ? row.images : []
            }
        }));
    } catch (error) {
        console.error('[sectionService] Database query error:', error.message);
        console.error('[sectionService] Full error:', error);
        throw error;
    }
}
