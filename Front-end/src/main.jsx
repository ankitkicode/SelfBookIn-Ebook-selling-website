
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from '../src/context/ProductContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <AuthProvider>
    <ProductProvider>
      <App />
      <ToastContainer />
    </ProductProvider>
    </AuthProvider>
    </BrowserRouter>
 
)
