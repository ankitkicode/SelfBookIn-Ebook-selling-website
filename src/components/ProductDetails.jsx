import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "./context/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, handleAddToCart } = useContext(ProductContext);
  // Find the product with the matching ID
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="my-3 mx-8  max-[700px]:my-3 max-[740px]:mx-5 inline-flex items-center  hover:text-gray-700"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
        Back
      </button>
    <div className="h-[80vh] w-[90%] m-auto z-3 ">
      {/* Back Button */}
      {/* <button
        onClick={() => navigate(-1)}
        className="mx-10 my-3 inline-flex items-center max-[700px]:mx-5  hover:text-gray-700"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
        Back
      </button> */}
      <div
          key={product.id}
          className="mx-4 mt-2 sm:mx-6 md:mx-10 h-auto sm:h-[70vh] md:h-[80vh] bg-zinc-50  flex flex-col sm:flex-row gap-4 sm:gap-10"
        >
          <div className="h-[90%] w-[25%] max-[700px]:h-[50%] max-[700px]:w-full  ">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover rounded"
            />
          </div>
          <div className="info h-auto sm:h-full w-[90%] sm:w-[70%] rounded p-4">
            <h1 className="text-xl sm:text-2xl font-bold">{product.title}</h1>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base w-[75%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto tempore sed cupiditate quia sit! Vero ipsum similique
              et aliquid, ab labore in ipsa. Quam voluptate fugiat voluptates
              optio doloremque consequuntur.
            </p>
            <p className="text-sm sm:text-lg mt-1">Author: {product.author}</p>
            <p className="text-sm sm:text-lg mt-1">
              Price: ₹{product.price.toFixed(2)}
            </p>
            <p className="text-sm sm:text-lg mt-1">Rating: {product.rating}</p>
            <p className="text-sm sm:text-lg mt-1">Reviews: {product.reviews}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 inline-block bg-black text-white px-4 sm:px-6 py-2 rounded hover:bg-white hover:text-black border-2 border-black transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
    </div>
    </>
  );
};

export default ProductDetails;
