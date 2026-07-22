import React, { useState } from 'react'
import { useAuth } from '../context/useAuth'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const ACCENT = "#12C6A8"

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    login({ name: name.trim(), email: `${name.trim().toLowerCase()}@monaer.uz` })
    navigate('/')
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center px-4 pt-24"
    >
      <form onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-[28px] p-8"
        style={{
          background: "rgba(255,255,255,0.02)", backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)"
        }}>
        <h1 className="text-2xl font-semibold text-white mb-2">Kirish</h1>
        <p className="text-sm text-white/50 mb-6">Ismingizni kiriting va davom eting</p>

        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
          placeholder="Ismingiz"
          className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-white/30 outline-none transition-all duration-200 mb-4"
          style={{
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
          }}
          onFocus={(e) => { e.target.style.borderColor = `${ACCENT}66`; e.target.style.background = "rgba(255,255,255,0.08)"; }}
          onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
        />

        <button type="submit" disabled={!name.trim()}
          className="w-full py-3 rounded-xl font-medium text-sm text-white transition-all duration-200 disabled:opacity-40 disabled:pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT}cc)`, boxShadow: `0 8px 25px -5px ${ACCENT}66` }}>
          Davom etish
        </button>
      </form>
    </motion.section>
  )
}

export default Login
