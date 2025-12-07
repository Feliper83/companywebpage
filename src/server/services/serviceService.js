import db from '../db.js'

export async function fetchServicesByLang(langCode) {
    const result = await db.query(`
        SELECT 
            st.id, st.service_id, st.lang_code, st.name, st.summary, st.details,
            s.slug, s.icon_path, s.display_order
        FROM cybevite.service_translation st
        JOIN cybevite.service s ON s.id = st.service_id
        WHERE st.lang_code = $1
        ORDER BY s.display_order ASC
    `, [langCode]);
    
    // Transform to match Prisma structure (nested service object)
    return result.rows.map(row => ({
        id: row.id,
        service_id: row.service_id,
        lang_code: row.lang_code,
        name: row.name,
        summary: row.summary,
        details: row.details,
        service: {
            id: row.service_id,
            slug: row.slug,
            icon_path: row.icon_path,
            display_order: row.display_order
        }
    }));
}
