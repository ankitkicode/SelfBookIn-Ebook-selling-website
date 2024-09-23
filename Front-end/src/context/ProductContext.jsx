// src/ProductContext.js
import { createContext, useState } from 'react';

// Create the context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [ebooks, setEbooks] = useState([]);
  const [orders, setOrders] = useState([]);

  // Function to add a new eBook
  const addEBook = (newEBook) => {
    setEbooks((prevEbooks) => [...prevEbooks, newEBook]);
  };

  // Function to view all eBooks
  const viewEBooks = () => {
    return ebooks;
  };

  // Function to place an order (for demo purposes, it simply adds to orders)
  const placeOrder = (ebookId) => {
    const ebook = ebooks.find((ebook) => ebook.id === ebookId);
    if (ebook) {
      setOrders((prevOrders) => [...prevOrders, ebook]);
    }
  };

  // Function to view all orders
  const viewOrders = () => {
    return orders;
  };

  // Sample products data (eBooks)
  const sampleEbooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 10.99,
      rating: 4.5,
      reviews: 120,
      image: "https://images.meesho.com/images/products/269522068/6gkxe_512.jpg"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      price: 8.99,
      rating: 4.7,
      reviews: 200,
      image: "https://images.meesho.com/images/products/269522068/6gkxe_512.jpg"
    },
    // Add more sample eBooks if needed
  ];

  // Initialize state with sample eBooks
  useState(() => {
    setEbooks(sampleEbooks);
  }, []);

  return (
    <ProductContext.Provider value={{ addEBook, viewEBooks, placeOrder, viewOrders }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
