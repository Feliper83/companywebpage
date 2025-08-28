import {fetchAboutsByLang} from '../services/aboutService.js'

export async function getAbouts(req, res) {
    try {
        const lang = req.query.lang_code || 'en'
        const data = await fetchAboutsByLang(lang)
        res.json(data)
    } catch (err) {
        console.error('Error fetching abouts:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}
