import  { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  const login = ({ email, password }) => {
    console.log('User logged in:', { email, password });
  };

  const register = ({ fullName, email, number, password }) => {
    console.log('User registered:', { fullName, email, number, password });
  };

  // Forgot password
  const forgotPassword = async (email) => {
    setLoading(true);
    try {
      const data = await mockAPI({ email }, true);
      console.log('Password reset email sent to:', data);
      alert('Password reset link sent to your email');
    } catch (error) {
      console.error('Forgot password failed:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Logout function to clear user data
  const logout = () => {
    setUser(null);
    // Optionally, clear the token from localStorage
    // localStorage.removeItem('authToken');
    navigate('/login');
  };

  // Check if user is logged in when app starts (e.g., from localStorage)
  useEffect(() => {
    setLoading(true);
    const storedUser = null; // Example: JSON.parse(localStorage.getItem('authToken'));
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        forgotPassword,
        logout,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Export the context to be used by other components
export default AuthContext;
