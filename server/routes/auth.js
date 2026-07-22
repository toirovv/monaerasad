import { Router } from 'express'
import { register, login, refresh, getMe, logout } from '../controllers/authController.js'
import { registerRules, loginRules } from '../middleware/validate.js'
import { honeypotCheck } from '../middleware/honeypot.js'
import { protect } from '../middleware/auth.js'

const router = Router()

router.post('/register', honeypotCheck, registerRules, register)
router.post('/login', honeypotCheck, loginRules, login)
router.post('/refresh', refresh)
router.get('/me', protect, getMe)
router.post('/logout', protect, logout)

export default router
