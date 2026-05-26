import { Routes, Route } from 'react-router-dom'

// pages
import Home from "./pages/Home"
import Products from './pages/Products'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/produtos' element={<Products />}/>
    </Routes>
  )
}
