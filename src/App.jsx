
import {  Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Ebooks from './ebook/Ebooks'
import Navbar from './components/Navbar'
import EbookDeatails from './ebook/EbookDeatails'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import AdminDashboard from './Admin/AdminDashboard'
import AddEBook from './Admin/AddEBook'
import ViewEBooks from './Admin/ViewEBooks'
import EditProfile from './user/EditProfile'
import SavedEbooks from './user/SavedEbooks'
import LikedEbooks from './user/LikedEbooks'
import YourEBooks from './user/YourEBooks'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
        {/* <Route path="/" element={<AuthRoutes />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/e-books" element={<Ebooks />} />
        <Route path="/e-booksdetails/:id" element={<EbookDeatails />} />
        <Route path="/profile/edit/:id" element={<EditProfile />} />
        <Route path="/profile/saved" element={<SavedEbooks />} />
        <Route path="/profile/liked-books" element={<LikedEbooks />} />
        <Route path="/profile/your-books" element={<YourEBooks />} />

        
        

        {/* Admin Routes with Outlet */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="add-ebook" element={<AddEBook />} />
          <Route path="view-ebooks" element={<ViewEBooks />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  )
}
export default App
