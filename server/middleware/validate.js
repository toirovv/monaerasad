import { body, query, param, validationResult } from 'express-validator'

export const handleValidation = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: "Kiritilgan ma'lumot noto'g'ri.",
      details: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    })
  }
  next()
}

export const registerRules = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 }).withMessage('Ism 2-50 ta belgi bo\'lishi kerak.')
    .matches(/^[a-zA-Z\u0400-\u04FF\s'-]+$/).withMessage('Ism faqat harflardan iborat bo\'lishi kerak.'),
  body('email')
    .trim()
    .isEmail().withMessage('Email noto\'g\'ri formatda.')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 8 }).withMessage('Parol kamida 8 ta belgi bo\'lishi kerak.')
    .matches(/[a-z]/).withMessage('Parolda kamida 1 ta kichik harf bo\'lishi kerak.')
    .matches(/[A-Z]/).withMessage('Parolda kamida 1 ta katta harf bo\'lishi kerak.')
    .matches(/[0-9]/).withMessage('Parolda kamida 1 ta raqam bo\'lishi kerak.'),
  handleValidation,
]

export const loginRules = [
  body('email')
    .trim()
    .isEmail().withMessage('Email noto\'g\'ri.')
    .normalizeEmail(),
  body('password')
    .notEmpty().withMessage('Parol kiritilishi kerak.'),
  body('honeypot')
    .custom((value) => {
      if (value && value.length > 0) {
        throw new Error('Bot detected')
      }
      return true
    }),
  handleValidation,
]

export const productQueryRules = [
  query('q')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('Qidiruv so\'zi juda uzun.'),
  query('category')
    .optional()
    .isIn(['opor', 'brake-pads', 'brake-discs', 'all']).withMessage('Noto\'g\'ri kategoriya.'),
  query('page')
    .optional()
    .isInt({ min: 1 }).withMessage('Sahifa raqam bo\'lishi kerak.'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 50 }).withMessage('Limit 1-50 orasida bo\'lishi kerak.'),
  handleValidation,
]

export const addItemRules = [
  body('productId')
    .notEmpty().withMessage('productId kiritilishi kerak.')
    .isMongoId().withMessage('Noto\'g\'ri productId.'),
  body('quantity')
    .optional()
    .isInt({ min: 1, max: 99 }).withMessage('Miqdor 1-99 orasida bo\'lishi kerak.'),
  handleValidation,
]
