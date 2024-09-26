
import { Routes, Route } from 'react-router-dom'
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
import ProtectedRoute from './protected/Protected'
import DownloadEbook from './ebook/DownloadEbook'
import AdminRoute from './protected/Admin'


function App() {

  return (
    <>

      <Navbar />
      <Routes>
        {/* <Route path="/" element={<AuthRoutes />} /> */}
        <Route path="/" element={

          <Home />

        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/e-books" element={<Ebooks />} />
        <Route path="/e-booksdetails/:id" element={<EbookDeatails />} />


        <Route path="/profile/edit/:id" element={
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>

        } />
        <Route path="/profile/saved" element={
          <ProtectedRoute>
            <SavedEbooks />
          </ProtectedRoute>

        } />
        <Route path="/profile/liked-books" element={
          <ProtectedRoute>

            <LikedEbooks />
          </ProtectedRoute>

        } />
        <Route path="/profile/your-books" element={
          <ProtectedRoute>
            <YourEBooks />
          </ProtectedRoute>

        } />


        <Route path="/download/:id" element={
          <ProtectedRoute>
            <DownloadEbook />
          </ProtectedRoute>

        } />






        {/* Admin Routes */}
        <Route path="/admin" element={
        <ProtectedRoute>
          <AdminRoute /> {/* Ensures the user is admin */}
        </ProtectedRoute>
      }>
        {/* AdminDashboard acts as the parent layout for child routes */}
        <Route path="" element={<AdminDashboard />}>
          <Route path="add-ebook" element={<AddEBook />} /> {/* Child route */}
          <Route path="view-ebooks" element={<ViewEBooks />} /> {/* Child route */}
        </Route>
      </Route>
      </Routes>
      <Footer />
    </>
  )
}
export default App
