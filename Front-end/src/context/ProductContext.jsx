// src/ProductContext.js
import { createContext, useState, useEffect, useContext } from 'react';
import axiosInstance from '../utils/axiosInstance';
import AuthContext from '../context/AuthContext'; // Import AuthContext to access user data

// Create the context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);       
  const [error, setError] = useState(null);           
  const [userEbooks, setUserEbooks] = useState([]);

  const { user } = useContext(AuthContext);
  
  // Fetch eBooks from the backend
  const fetchEbooks = async () => {
    try {
      const response = await axiosInstance.get("/ebooks/all");
      setEbooks(response.data);  // Set fetched eBooks in state
      setLoading(false);          // Stop loading after data is fetched
    } catch (err) {
      setError("Failed to load eBooks");  // Set error if request fails
      setLoading(false);                  // Stop loading after request failure
    }
  };

  // Set user's eBook details based on the purchased eBook IDs (yourBooks)
  useEffect(() => {
    if (ebooks.length > 0 && user?.yourBooks?.length > 0) {
      const userEbookDetails = user.yourBooks.map((bookId) =>
        ebooks.find((ebook) => ebook._id === bookId)
      );

      // Set the user's eBooks in the state
      setUserEbooks(userEbookDetails.filter(Boolean)); // Remove any undefined values
    }
  }, [ebooks, user?.yourBooks]);  // Trigger when ebooks or user's yourBooks change

  // Function to toggle like
  const toggleLike = async (ebookId, isLiked) => {
    try {
      const response = await axiosInstance.put(`/ebooks/${ebookId}/like`, 
        { like: isLiked }, 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      
      // Update the eBook in the list after toggling like
      setEbooks((prevEbooks) =>
        prevEbooks.map((ebook) =>
          ebook._id === ebookId ? response.data.ebook : ebook
        )
      );
    } catch (error) {
      console.error("Failed to toggle like", error);
    }
  };

  // Fetch the eBooks on component mount
  useEffect(() => {
    fetchEbooks();
  }, []);

  // Provide state and functions to children components
  return (
    <ProductContext.Provider value={{
      ebooks,
      loading,
      error,
      toggleLike,
      userEbooks,       
      setUserEbooks,
         user
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
