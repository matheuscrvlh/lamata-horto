import { Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import ProductDetail from './pages/ProductDetail'

// components
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<Products />} />
        <Route path='/produtos/:id' element={<ProductDetail />} />
        <Route path='/sobre' element={<About />} />
      </Routes>
      <WhatsAppButton />
    </>
  )
}
