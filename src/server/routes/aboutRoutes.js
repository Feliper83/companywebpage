import express from 'express'
import { getAbouts } from '../controllers/aboutController.js'
const router = express.Router()
router.get('/', getAbouts)
export default router
