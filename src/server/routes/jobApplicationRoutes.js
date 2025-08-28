import express from 'express'
import { postJobApplicationController } from '../controllers/jobApplicationController.js'
const router = express.Router()
router.post('/', postJobApplicationController)
export default router
