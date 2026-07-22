import { Router } from 'express'
import { getCart, addItem, updateItem, removeItem, clearCart } from '../controllers/cartController.js'
import { protect } from '../middleware/auth.js'
import { addItemRules } from '../middleware/validate.js'

const router = Router()

router.use(protect)
router.get('/', getCart)
router.post('/add', addItemRules, addItem)
router.put('/update', updateItem)
router.delete('/:itemId', removeItem)
router.delete('/', clearCart)

export default router
