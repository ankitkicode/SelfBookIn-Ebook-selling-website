// src/ProductContext.js
import { createContext, useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

// Create the context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Fetch eBooks from the backend
  const fetchEbooks = async () => {
    try {
      const response = await axiosInstance.get("/ebooks/all");
      // console.log("Response from ebooks API:", response.data);
      setEbooks(response.data);  // Set the fetched eBooks in state
      setLoading(false);          // Stop loading after data is fetched
    } catch (err) {
      setError("Failed to load eBooks");  // Set error if request fails
      setLoading(false);                  // Stop loading after request failure
    }
  };


      // Function to toggle like
      const toggleLike = async (ebookId, isLiked) => {
        try {
            const response = await axiosInstance.put(`/ebooks/${ebookId}/like`,
                { like: isLiked },
               {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                }
               }

            );
            console.log("Response from toggle like API:", response.data);
            setEbooks((prevEbooks) =>
                prevEbooks.map((ebook) =>
                    ebook._id === ebookId ? response.data.ebook : ebook
                )
            );
            
        } catch (error) {
            console.error("Failed to toggle like", error);
        }
    };

useEffect(() => {
    fetchEbooks();
}, []);

  // Provide ebooks, loading, and error states to children components
  return (
    <ProductContext.Provider value={{
      ebooks,
      loading,
      error,
      toggleLike,

    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
