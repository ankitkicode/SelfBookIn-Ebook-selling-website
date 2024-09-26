
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from '../src/context/ProductContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <AuthProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
    </AuthProvider>
    </BrowserRouter>
 
)
