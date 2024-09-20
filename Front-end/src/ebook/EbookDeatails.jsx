import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../context/ProductContext";

const EbookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, handleBuyNow } = useContext(ProductContext);

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-10 text-gray-600 font-mono min-h-[80vh] flex items-center justify-center ">
      <div>
        <h1 className="text-2xl font-bold">Product not found!</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 bg-black text-white text-sm font-semibold shadow-lg hover:bg-white hover:text-black border-2 border-black transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Go Back
        </button>
      </div>
    </div>;
  }

  return (
    <>
    <div className="text-center my-6 ">
        <h1 className="text-2xl font-bold text-gray-600 ">E-BOOKS</h1>
        <hr className="w-20 mx-auto mt-2 border-gray-400"/>
      </div> 

      <div className="container w-full mx-auto md:px-[5%] font-mono">
        <div
          key={product.id}
          className="bg-gray-50 mb-3 shadow-md overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6"
        >
          {/* Product Image */}
          <div className="w-full sm:w-[40%] h-[300px] sm:h-[400px] flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover "
            />
          </div>

          {/* Product Information */}
          <div className="w-full sm:w-[70%] flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              In the quiet corners of this ebook, you'll find worlds waiting to unfold. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dive deep into realms where stories dance with wonder.
            </p>
            <p className="text-gray-800 text-sm sm:text-lg">
              <strong>Author:</strong> {product.author}
            </p>
            <p className="text-gray-800 text-sm sm:text-lg">
              <strong>Price:</strong> ₹{product.price.toFixed(2)}
            </p>
            <p className="text-gray-800 text-sm sm:text-lg">
              <strong>Rating:</strong> {product.rating} ⭐
            </p>
            <p className="text-gray-800 text-sm sm:text-lg">
              <strong>Reviews:</strong> {product.reviews} reviews
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleBuyNow(product)}
              className="mt-4 px-6 py-3 bg-black text-white text-sm font-semibold shadow-lg hover:bg-white hover:text-black border-2 border-black transition-colors duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EbookDetails;
