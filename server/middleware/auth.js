import jwt from 'jsonwebtoken'
import env from '../config/env.js'

export const protect = (req, res, next) => {
  let token

  // Cookie'dan olish
  if (req.cookies?.accessToken) {
    token = req.cookies.accessToken
  }
  // Header'dan olish
  else if (req.headers.authorization?.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (!token) {
    return res.status(401).json({ error: 'Tizimga kirish kerak.' })
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token muddati tugadi.', code: 'TOKEN_EXPIRED' })
    }
    return res.status(401).json({ error: 'Noto\'g\'ri token.' })
  }
}

export const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    env.JWT_SECRET,
    { expiresIn: env.JWT_EXPIRE }
  )

  const refreshToken = jwt.sign(
    { id: user._id },
    env.JWT_REFRESH_SECRET,
    { expiresIn: env.JWT_REFRESH_EXPIRE }
  )

  return { accessToken, refreshToken }
}

export const refreshAccessToken = (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET)
    const accessToken = jwt.sign(
      { id: decoded.id },
      env.JWT_SECRET,
      { expiresIn: env.JWT_EXPIRE }
    )
    return { accessToken }
  } catch {
    return null
  }
}
