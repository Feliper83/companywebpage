import { fetchSectionsByLang } from '../services/sectionService.js'

export async function getSections(req, res) {
    try {
        const lang = req.query.lang_code || 'en'
        const slug = req.query.slug
        const data = await fetchSectionsByLang(lang, slug)
        res.json(data)
    } catch (err) {
        console.error('Error fetching sections:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}
