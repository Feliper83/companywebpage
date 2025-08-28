import {fetchBlogsByLang} from '../services/blogService.js'

export async function getAbouts(req, res) {
    try {
        const lang = req.query.lang_code || 'en'
        const data = await fetchBlogsByLang(lang)
        res.json(data)
    } catch (err) {
        console.error('Error fetching Blog:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}