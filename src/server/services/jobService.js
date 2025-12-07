import db from '../db.js'

export async function fetchJobsByLang(langCode) {
    const result = await db.query(`
        SELECT 
            jt.id, jt.job_id, jt.language, jt.title, jt.experience,
            j.location, j.skills, j.image
        FROM cybevite.job_translation jt
        JOIN cybevite.job j ON j.id = jt.job_id
        WHERE jt.language = $1
        ORDER BY j.id ASC
    `, [langCode]);
    
    // Transform to match Prisma structure (nested job object)
    // PostgreSQL returns arrays natively, so skills is already an array
    return result.rows.map(row => ({
        id: row.id,
        job_id: row.job_id,
        language: row.language,
        title: row.title,
        experience: row.experience,
        location: row.location,  // Frontend accesses this directly
        job: {
            id: row.job_id,
            location: row.location,
            skills: row.skills,  // Already an array from PostgreSQL
            image: row.image
        }
    }));
}
