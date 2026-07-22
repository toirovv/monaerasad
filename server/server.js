import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import env from './config/env.js'
import { securityMiddleware } from './middleware/security.js'
import authRoutes from './routes/auth.js'
import productRoutes from './routes/products.js'
import cartRoutes from './routes/cart.js'
import orderRoutes from './routes/orders.js'

const app = express()

// Security middleware
securityMiddleware(app)

// Body parsing
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: false, limit: '10kb' }))
app.use(cookieParser())

// Logging
if (env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/orders', orderRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Sahifa topilmadi.' })
})

// Error handler
app.use((err, req, res, _next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    error: env.NODE_ENV === 'development' ? err.message : "Server xatosi.",
  })
})

// MongoDB + Server start
const start = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI)
    console.log('✅ MongoDB connected')

    app.listen(env.PORT, () => {
      console.log(`🚀 Server running on port ${env.PORT} [${env.NODE_ENV}]`)
    })
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message)
    process.exit(1)
  }
}

start()
