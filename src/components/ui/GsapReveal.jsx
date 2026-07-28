import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GsapReveal = ({ children, className, as: Tag = 'div', animation = 'fadeUp', delay = 0, duration = 0.7, stagger = false, staggerItems = false, threshold = 0.15, once = true }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const configs = {
        fadeUp: { from: { opacity: 0, y: 40 }, to: { opacity: 1, y: 0 } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        fadeLeft: { from: { opacity: 0, x: -40 }, to: { opacity: 1, x: 0 } },
        fadeRight: { from: { opacity: 0, x: 40 }, to: { opacity: 1, x: 0 } },
        scaleIn: { from: { opacity: 0, scale: 0.9 }, to: { opacity: 1, scale: 1 } },
      }

      const cfg = configs[animation] || configs.fadeUp

      if (staggerItems) {
        const items = el.children
        if (items.length) {
          gsap.fromTo(items, { ...cfg.from, y: 40 }, {
            ...cfg.to, duration, stagger: 0.08, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: `top ${100 - threshold * 100}%`, once },
          })
          return
        }
      }

      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: `top ${100 - threshold * 100}%`, once },
        delay,
      })
      if (stagger && el.children.length) {
        tl.fromTo(el.children, { ...cfg.from, y: 30 },
          { ...cfg.to, duration: duration * 0.7, stagger: 0.06, ease: 'power2.out' }
        )
      } else {
        tl.fromTo(el, cfg.from, { ...cfg.to, duration, ease: 'power3.out' })
      }
    })

    return () => ctx.revert()
  }, [animation, delay, duration, stagger, staggerItems, threshold, once])

  return <Tag ref={ref} className={className}>{children}</Tag>
}

export default GsapReveal