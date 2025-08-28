import express from 'express'
import { getBenefits } from '../controllers/benefitController.js'
const router = express.Router()
router.get('/', getBenefits)
export default router
