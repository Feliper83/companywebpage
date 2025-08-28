import { fetchBenefitsByLang } from '../services/benefitService.js'

export async function getBenefits(req, res) {
    try {
        const lang = req.query.lang_code || 'en'
        const data = await fetchBenefitsByLang(lang)
        res.json(data)
    } catch (err) {
        console.error('Error fetching sections:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}
