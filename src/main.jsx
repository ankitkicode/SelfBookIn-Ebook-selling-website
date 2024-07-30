import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from './components/context/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </ProductProvider>
  </React.StrictMode>,
)
