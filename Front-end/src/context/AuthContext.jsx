import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import {jwtDecode} from 'jwt-decode'; 
// Create context
const AuthContext = createContext();
import {  toast } from 'react-toastify';


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

  // Login function
  const login = async ({ email, password }) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password,
      });
      const { token, user } = response.data;
      storeToken(token);
      setUser(user);
      toast.success(response.data.message);
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Please check your credentials and try again.');
      toast.error(error.response?.data?.message);
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
      
      const { token, message } = response.data;
      storeToken(token);
      const decodedToken = jwtDecode(token); // Decode token to get user info
      setUser(decodedToken); 
      
      toast.success(message || 'Registration successful!');
      navigate('/');
    } catch (err) {
      setError('Registration failed. Please try again.');
      toast.error(err.response?.data?.message || 'Registration failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  

  // Logout function
  const logout = () => {
    setUser(null);
    clearToken();
    navigate('/login');
    toast.success("logged out successfully ")
  };

  // Update profile
  const updateProfile = async (profileData) => {
    setLoading(true);
    const token = localStorage.getItem('authToken');
    try {
      const response = await axiosInstance.put('/edit-profile', profileData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.user);
      toast.success(response.data.message);
      navigate('/');
    } catch (err) {
      setError('Failed to update profile. Please try again.');
      toast.success(err.data.message);
      // console.error(err,"form register");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
        const fetchUserData = async () => {
          try {
            const response = await axiosInstance.get(`/user/${userId}`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            setUser(response.data);
          } catch (err) {
            console.error('Error fetching user data:', err);
            clearToken();
          } finally {
            setLoading(false); // Set loading false after fetching
          }
        };
        fetchUserData();
      } catch (err) {
        console.error('Invalid token:', err);
        clearToken();
        setLoading(false); // Set loading false if token is invalid
      }
    } else {
      setLoading(false); // Set loading false if no token found
    }
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
        updateProfile,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
