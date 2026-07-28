import React, { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  const location = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="pt-[60px] pb-[84px] md:pt-0 md:pb-0">
      <Header />
      <main ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
