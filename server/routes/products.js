import { Router } from 'express'
import { getProducts, getProduct } from '../controllers/productController.js'
import { productQueryRules } from '../middleware/validate.js'

const router = Router()

router.get('/', productQueryRules, getProducts)
router.get('/:id', getProduct)

export default router
