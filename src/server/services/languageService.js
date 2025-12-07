import db from '../db.js'

export async function fetchLanguages() {
    const result = await db.query(
        'SELECT code, name FROM cybevite.language ORDER BY code ASC'
    );
    return result.rows;
}
