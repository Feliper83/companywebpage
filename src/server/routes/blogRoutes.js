import express from 'express'
import { getAbouts } from '../controllers/blogController.js'
const router = express.Router()
router.get('/', getAbouts)
export default router
