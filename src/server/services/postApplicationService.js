import db from "../db.js";

export async function postJobApplicationService({ name, email, phone, coverLetter, resumeUrl, job_id }) {
    try {
        const result = await db.query(`
            INSERT INTO cybevite.job_application 
            (name, email, phone, "coverLetter", "resumeUrl", job_id)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
        `, [name, email, phone, coverLetter, resumeUrl, job_id]);
        
        return result.rows[0];
    } catch (err) {
        console.error("❌ Error creando aplicación:", err);
        throw new Error("No se pudo guardar la aplicación");
    }
}
