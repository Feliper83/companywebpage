import express from 'express'
import { geContacts, postContact } from '../controllers/contactController.js'
const router = express.Router()
router.get('/', geContacts)
router.post('/', postContact);
export default router
