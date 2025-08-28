import { fetchServicesByLang } from '../services/serviceService.js'

export async function getServices(req, res) {
    try {
        const lang = req.query.lang_code || 'en'
        const data = await fetchServicesByLang(lang)
        res.json(data)
    } catch (err) {
        console.error('Error fetching services:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}
