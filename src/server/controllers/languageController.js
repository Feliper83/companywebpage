import { fetchLanguages } from '../services/languageService.js'

export async function getLanguages(req, res) {
    try {
        const langs = await fetchLanguages()
        res.json(langs)
    } catch (err) {
        console.error('Error fetching languages:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}
