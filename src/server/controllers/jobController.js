import { fetchJobsByLang } from '../services/jobService.js'

export async function getJobs(req, res) {
    try {
        const lang = req.query.lang_code || 'en'
        const slug = req.query.slug
        const data = await fetchJobsByLang(lang, slug)
        res.json(data)
    } catch (err) {
        console.error('Error fetching sections:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}
