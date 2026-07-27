import React, { Suspense } from 'react'
import Layout from './layout/Layout'
import { AuthProvider } from './context/AuthProvider'
import { ToastProvider } from './components/ui/Toast'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Catalog = React.lazy(() => import('./pages/Catalog'))
const Backet = React.lazy(() => import('./pages/Backet'))
const Checkout = React.lazy(() => import('./pages/Checkout'))
const Login = React.lazy(() => import('./pages/Login'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Favorites = React.lazy(() => import('./pages/Favorites'))

const App = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
          <Suspense fallback={null}>
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
          </Suspense>
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  )
}

export default App
