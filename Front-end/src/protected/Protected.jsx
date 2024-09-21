
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if authToken exists in localStorage
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    // If not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If logged in, render the children components (protected content)
  return children;
};

export default ProtectedRoute;
