import { prisma } from '../db.js'

export async function fetchContactsByLang() {
    return prisma.contactMessage.findMany({
        orderBy: { received_at: 'desc' }

    })
}

export async function createContact({ name, email, subject, message }) {
    return prisma.contactMessage.create({
        data: {
            name,
            email,
            subject,
            message
        }
    });
}
