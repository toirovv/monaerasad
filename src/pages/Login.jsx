import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/useAuth'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import useSimulatedLoading from '../hooks/useSimulatedLoading'
import LoginSkeleton from '../components/skeletons/LoginSkeleton'

const ACCENT = "#12C6A8"

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const loading = useSimulatedLoading(600)
  const formRef = useRef(null)

  useEffect(() => {
    if (!loading && formRef.current) {
      gsap.fromTo(formRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
    }
  }, [loading])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    login({ name: name.trim(), email: `${name.trim().toLowerCase()}@monaer.uz` })
    navigate('/')
  }

  if (loading) return <LoginSkeleton />

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 pt-24 pb-28"
      style={{ animation: "fadeInUp 0.5s ease forwards" }}
    >
      <form ref={formRef} onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-[28px] p-6 sm:p-8"
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
            background: "rgba(255,255,255,0.05)", border: `1px solid ${isFocused ? `${ACCENT}66` : "rgba(255,255,255,0.08)"}`,
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <button type="submit" disabled={!name.trim()}
          className="w-full py-3 rounded-xl font-medium text-sm text-white transition-all duration-200 disabled:opacity-40 disabled:pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT}cc)`, boxShadow: `0 8px 25px -5px ${ACCENT}66` }}>
          Davom etish
        </button>
      </form>
    </section>
  )
}

export default Login