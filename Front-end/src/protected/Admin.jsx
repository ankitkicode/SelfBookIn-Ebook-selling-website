import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const AdminRoute = () => {
  // Access the current user from the context
  const { user } = useContext(AuthContext);
  // Check if the user is authenticated and has the required role
  
  // Check if the user is an admin
  if (user && user.role === 'admin') {
    return <Outlet />; // If the user is an admin, render the admin route
  } else {
    // If the user is not an admin, redirect them to the home page or login
    return <Navigate to="/" replace />;
  }
};

export default AdminRoute;
