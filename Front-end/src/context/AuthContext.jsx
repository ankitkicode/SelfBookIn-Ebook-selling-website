import  { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import {jwtDecode} from 'jwt-decode';

// Create context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to store token in localStorage
  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  };

  // Function to remove token from localStorage
  const clearToken = () => {
    localStorage.removeItem('authToken');
  };


  const login = async ({ email, password }) => {
    setLoading(true); 
  
    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password,
      });
      // console.log('User logged in:', response.data);
      const { token, user } = response.data; 
      storeToken(token); 
      setUser(user); 
      navigate('/'); 
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false); 
    }
  };
  

 const register = async ({ fullName, email, number, password }) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/auth/register', {
        fullName,
        email,
        number,
        password,
      });
      // console.log('User registered:', response.data);
      const token = response.data.token; 
      storeToken(token); 
      navigate('/');
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  // Logout function to clear user data
  const logout = () => {
    setUser(null);
    clearToken()
    navigate('/login');
  };


useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem('authToken'); 
  
    if (token) {
      try {
        // Decode the token to get user info
        const decodedToken = jwtDecode(token);
        console.log(decodedToken,"======================")
        const userId = decodedToken.userId;
        // Optionally fetch more user details
        const fetchUserData = async () => {
          try {
            const response = await axiosInstance.get(`/user/${userId}`,
              {headers: { Authorization: `Bearer ${token}` }},
            );
            console.log('User data:', { ...response.data,token})
            setUser(response.data); 
          } catch (err) {
            console.error('Error fetching user data:', err);
          }
        };
  
        fetchUserData();
      } catch (err) {
        console.error('Invalid token:', err);
        clearToken(); 
      }
    }
  
    setLoading(false);
  }, []);

  

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading,
        error,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Export the context to be used by other components
export default AuthContext;
