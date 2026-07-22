import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import mongoSanitize from 'express-mongo-sanitize'
import hpp from 'hpp'
import env from '../config/env.js'

export const securityMiddleware = (app) => {
  // Helmet — 15+ xavfsizlik headerlari
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "blob:"],
        connectSrc: ["'self'"],
      },
    },
    crossOriginEmbedderPolicy: false,
  }))

  // CORS
  app.use(cors({
    origin: env.CORS_ORIGIN.split(',').map((s) => s.trim()),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400,
  }))

  // XSS — kirishlarni tozalash
  app.use((req, res, next) => {
    const sanitize = (obj) => {
      if (typeof obj === 'string') {
        return obj
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
          .replace(/javascript:/gi, '')
      }
      if (Array.isArray(obj)) return obj.map(sanitize)
      if (obj && typeof obj === 'object') {
        return Object.fromEntries(
          Object.entries(obj).map(([k, v]) => [k, sanitize(v)])
        )
      }
      return obj
    }
    if (req.body) req.body = sanitize(req.body)
    if (req.query) req.query = sanitize(req.query)
    if (req.params) req.params = sanitize(req.params)
    next()
  })

  // NoSQL Injection himoyasi
  app.use(mongoSanitize({
    replaceWith: '_',
    onSanitize: ({ req, key }) => {
      console.warn(`⚠️ NoSQL injection blocked: ${key} from ${req.ip}`)
    },
  }))

  // HTTP Parameter Pollution
  app.use(hpp())

  // Umumiy Rate Limiting — 15 daqiqada 100 ta so'rov
  app.use('/api/', rateLimit({
    windowMs: env.RATE_LIMIT_WINDOW_MS,
    max: env.RATE_LIMIT_MAX,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      error: "Juda ko'p so'rov. 15 daqiqadan keyin qayta urinib ko'ring.",
    },
  }))

  // Login uchun qattiq Rate Limit — 15 daqiqada 5 ta
  app.use('/api/auth/login', rateLimit({
    windowMs: env.RATE_LIMIT_WINDOW_MS,
    max: env.LOGIN_RATE_LIMIT_MAX,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      error: "Juda ko'p urinish. 15 daqiqadan keyin qayta urinib ko'ring.",
    },
  }))

  // Register uchun — 1 soatda 3 ta
  app.use('/api/auth/register', rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 3,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      error: "Ro'yxatdan o'tish limiti oshdi. 1 soatdan keyin qayta urinib ko'ring.",
    },
  }))

  // Buyurtma uchun — 1 soatda 10 ta
  app.use('/api/orders', rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      error: "Buyurtma limiti oshdi. Keyinroq urinib ko'ring.",
    },
  }))
}
