import db from '../db.js'

export async function fetchContactsByLang() {
    const result = await db.query(
        'SELECT * FROM cybevite.contact_message ORDER BY received_at DESC'
    );
    return result.rows;
}

export async function createContact({ name, email, subject, message }) {
    const result = await db.query(`
        INSERT INTO cybevite.contact_message (name, email, subject, message)
        VALUES ($1, $2, $3, $4)
        RETURNING *
    `, [name, email, subject, message]);
    return result.rows[0];
}
