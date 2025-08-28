import {postJobApplicationService} from '../services/postApplicationService.js'

export async function postJobApplicationController(req, res) {
    try {
        const { name, email, phone, coverLetter, resumeUrl, job_id } = req.body;

        if (!name || !email || !phone || !coverLetter || !resumeUrl || !job_id ) {
            return res.status(400).json({ error: 'Name, email, and message are required' });
        }

        const newContact =
            await postJobApplicationService({ name, email, phone, coverLetter, resumeUrl, job_id });
        res.status(201).json(newContact);
    } catch (err) {
        console.error('Error creating Contact:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
