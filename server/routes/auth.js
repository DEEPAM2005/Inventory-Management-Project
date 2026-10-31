import express from 'express'
import { login } from '../server/controllers/authController.js'

const router = express.Router()
router.post('/login',login)

export default router