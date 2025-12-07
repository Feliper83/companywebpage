import db from '../db.js'

export async function fetchBenefitsByLang(langCode) {
    const result = await db.query(`
        SELECT bt.id, bt.benefit_id, bt.language, bt.name
        FROM cybevite.benefit_translation bt
        WHERE bt.language = $1
        ORDER BY bt.id ASC
    `, [langCode]);
    return result.rows;
}
