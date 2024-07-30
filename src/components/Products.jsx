import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "./context/ProductContext";

const Products = () => {
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
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
    <div className="h-auto w-[95%] m-auto  overflow-hidden px-10 pb-5 max-[700px]:py-5">
    
      <p className="m-2 max-[700px]:mb-4 font-semibold ">Products List</p>
      <div className="flex gap-8 flex-wrap  justify-between max-[740px]:flex-col  w-[100%]">
        {products.map((product) => (
          <Link
            to={`/productdetail/${product.id}`}
            key={product.id}
            className="w-[25%]  max-[740px]:w-full rounded-md bg-gray-100 overflow-hidden h-auto py-8 px-12 max-[740px]:px-8 flex flex-col flex-wrap  justify-center items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-[250px] "
            />

           <h2 className="text-xl font-semibold mt-2 text-center">{product.title}</h2>
            <p className=" font-bold text-gray-600">
              Rs.- {product.price.toFixed(2)}
            </p>
            
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default Products;
