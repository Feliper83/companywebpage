import express from 'express'
import { getSections } from '../controllers/sectionController.js'
const router = express.Router()
router.get('/', getSections)
export default router
