import db from '../db.js'

export async function fetchBlogsByLang(langCode, slug) {
    // Build WHERE clause dynamically
    const whereClause = slug 
        ? 'WHERE bpt.lang_code = $1 AND bp.slug = $2'
        : 'WHERE bpt.lang_code = $1';
    
    const params = slug ? [langCode, slug] : [langCode];
    
    const result = await db.query(`
        SELECT 
            bpt.id, bpt.blog_post_id, bpt.lang_code, bpt.title, bpt.content,
            bp.slug, bp.author, bp.published_at, bp.display_order,
            COALESCE(
                json_agg(
                    DISTINCT jsonb_build_object(
                        'id', ci.id,
                        'blog_post_id', ci.blog_post_id,
                        'image_path', ci.image_path,
                        'caption', ci.caption,
                        'display_order', ci.display_order
                    ) ORDER BY jsonb_build_object(
                        'id', ci.id,
                        'blog_post_id', ci.blog_post_id,
                        'image_path', ci.image_path,
                        'caption', ci.caption,
                        'display_order', ci.display_order
                    )
                ) FILTER (WHERE ci.id IS NOT NULL),
                '[]'::json
            ) as images,
            COALESCE(
                json_agg(
                    DISTINCT jsonb_build_object(
                        'id', bpt2.id,
                        'lang_code', bpt2.lang_code,
                        'title', bpt2.title,
                        'content', bpt2.content
                    )
                ) FILTER (WHERE bpt2.id IS NOT NULL),
                '[]'::json
            ) as translations
        FROM cybevite.blog_post_translation bpt
        JOIN cybevite.blog_post bp ON bp.id = bpt.blog_post_id
        LEFT JOIN cybevite.content_image ci ON ci.blog_post_id = bp.id
        LEFT JOIN cybevite.blog_post_translation bpt2 ON bpt2.blog_post_id = bp.id
        ${whereClause}
        GROUP BY bpt.id, bpt.blog_post_id, bpt.lang_code, bpt.title, bpt.content,
                 bp.id, bp.slug, bp.author, bp.published_at, bp.display_order
        ORDER BY bp.id ASC
    `, params);
    
    // Transform to match Prisma structure
    return result.rows.map(row => ({
        id: row.id,
        blog_post_id: row.blog_post_id,
        lang_code: row.lang_code,
        title: row.title,
        content: row.content,
        blog_post: {
            id: row.blog_post_id,
            slug: row.slug,
            author: row.author,
            published_at: row.published_at,
            display_order: row.display_order,
            images: Array.isArray(row.images) ? row.images : [],
            translations: Array.isArray(row.translations) ? row.translations : []
        }
    }));
}
