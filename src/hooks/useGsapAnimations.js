import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapFadeInUp(ref, deps = []) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
  }, deps)
}

export function useGsapScrollTrigger(ref, options = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none', ...options }
        }
      )
    })
    return () => ctx.revert()
  }, [options])
}

export function useGsapStagger(containerRef, itemsSelector, deps = []) {
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll(itemsSelector),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
        }
      )
    })
    return () => ctx.revert()
  }, deps)
}

export function useGsapHoverScale(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      el.addEventListener('mouseenter', () => gsap.to(el, { scale: 1.03, duration: 0.3, ease: 'power2.out' }))
      el.addEventListener('mouseleave', () => gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out' }))
    })
    return () => ctx.revert()
  }, [])
}

export default gsap