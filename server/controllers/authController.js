import User from '../models/User.js'
import { generateTokens, refreshAccessToken } from '../middleware/auth.js'
import jwt from 'jsonwebtoken'
import env from '../config/env.js'

export const register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ error: 'Bu email allaqachon ro\'yxatdan o\'tgan.' })
    }

    const user = await User.create({ name, email, password, phone })
    const { accessToken, refreshToken } = generateTokens(user)

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 15 * 60 * 1000,
    })
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    res.status(201).json({ user })
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: 'Bu email allaqachon mavjud.' })
    }
    res.status(500).json({ error: "Server xatosi. Keyinroq urinib ko'ring." })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')
    if (!user) {
      return res.status(401).json({ error: 'Email yoki parol noto\'g\'ri.' })
    }

    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ error: 'Email yoki parol noto\'g\'ri.' })
    }

    const { accessToken, refreshToken } = generateTokens(user)

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 15 * 60 * 1000,
    })
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    res.json({ user })
  } catch (err) {
    res.status(500).json({ error: "Server xatosi." })
  }
}

export const refresh = (req, res) => {
  const { refreshToken } = req.cookies
  if (!refreshToken) {
    return res.status(401).json({ error: 'Refresh token topilmadi.' })
  }

  const result = refreshAccessToken(refreshToken)
  if (!result) {
    return res.status(401).json({ error: 'Refresh token yaroqsiz.' })
  }

  res.cookie('accessToken', result.accessToken, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 15 * 60 * 1000,
  })

  res.json({ success: true })
}

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    if (!user) {
      return res.status(404).json({ error: 'Foydalanuvchi topilmadi.' })
    }
    res.json({ user })
  } catch {
    res.status(500).json({ error: 'Server xatosi.' })
  }
}

export const logout = (req, res) => {
  res.cookie('accessToken', '', { maxAge: 0, httpOnly: true })
  res.cookie('refreshToken', '', { maxAge: 0, httpOnly: true })
  res.json({ success: true })
}
