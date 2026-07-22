import { Router } from 'express'
import { createOrder, getOrders, getOrder } from '../controllers/orderController.js'
import { protect } from '../middleware/auth.js'

const router = Router()

router.use(protect)
router.post('/', createOrder)
router.get('/', getOrders)
router.get('/:id', getOrder)

export default router
