import React from 'react'
import Layout from './layout/Layout'
import { AuthProvider } from './context/AuthProvider'
import { ToastProvider } from './components/ui/Toast'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Catalog from './pages/Catalog'
import Backet from './pages/Backet'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Favorites from './pages/Favorites'

const App = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/backet' element={<Backet />} />
              <Route path='/backet/checkout' element={<Checkout />} />
              <Route path='/catalog' element={<Catalog />} />
              <Route path='/login' element={<Login />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/favorites' element={<Favorites />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  )
}

export default App
