import Checkout from './components/Checkout'
import UserProfile from './components/UserProfile'
import {  Routes, Route } from 'react-router-dom'
import AuthRoutes from './components/AuthRoutes'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import Card from './components/Card'
import Products from './components/Products'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
        {/* <Route path="/" element={<AuthRoutes />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Card />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetail/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </>
  )
}
export default App
