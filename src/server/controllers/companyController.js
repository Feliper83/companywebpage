import {fetchCompaniesByLang} from '../services/companyService.js'

export async function getCompany(req, res) {
    try {
        const lang = req.query.lang_code || 'en'
        const data = await fetchCompaniesByLang(lang)
        res.json(data)
    } catch (err) {
        console.error('Error fetching abouts:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}
