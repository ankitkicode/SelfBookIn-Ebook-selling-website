// src/ProductContext.js
import  { createContext, useState } from 'react';

// Create the context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Sample products data
  const products = [
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
      {
        id: 3,
        title: "To Kill a Mockingbird Kill a Mockingbird",
        author: "Harper Lee",
        price: 9.99,
        rating: 4.8,
        reviews: 250,
        image: "https://images.meesho.com/images/products/269522068/6gkxe_512.jpg"
      },
      {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 7.99,
        rating: 4.6,
        reviews: 150,
        image: "https://via.placeholder.com/150"
      },
      {
        id: 5,
        title: "Moby Dick",
        author: "Herman Melville",
        price: 11.99,
        rating: 4.2,
        reviews: 90,
        image: "https://via.placeholder.com/150"
      },
      {
        id: 6,
        title: "War and Peace",
        author: "Leo Tolstoy",
        price: 14.99,
        rating: 4.4,
        reviews: 110,
        image: "https://via.placeholder.com/150"
      },
      {
        id: 7,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 12.99,
        rating: 4.3,
        reviews: 180,
        image: "https://via.placeholder.com/150"
      },
      {
        id: 8,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 13.99,
        rating: 4.9,
        reviews: 300,
        image: "https://via.placeholder.com/150"
      },
      {
        id: 9,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        price: 9.49,
        rating: 4.5,
        reviews: 140,
        image: "https://via.placeholder.com/150"
      },
      {
        id: 10,
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        price: 10.49,
        rating: 4.7,
        reviews: 170,
        image: "https://via.placeholder.com/150"
      }
    // Add more products as needed
  ];

  // Function to handle adding an item to the cart
  const handleBuyNow = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} has been added to your cart!`);
    console.log(cart)
  };

  return (
    <ProductContext.Provider value={{ products, cart, handleBuyNow }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
