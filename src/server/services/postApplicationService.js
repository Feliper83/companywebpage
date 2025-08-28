import { prisma } from "../db.js";

export async function postJobApplicationService({ name, email, phone, coverLetter, resumeUrl, job_id }) {
    try {
        return await prisma.jobApplication.create({
            data: {
                name,
                email,
                phone,
                coverLetter,
                resumeUrl,
                job_id,
            },
        });
    } catch (err) {
        console.error("❌ Error creando aplicación:", err);
        throw new Error("No se pudo guardar la aplicación");
    }
}
