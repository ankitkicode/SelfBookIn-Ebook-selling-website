// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { useContext, useState } from "react";
import { Link,  } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Ebooks = () => {
  // const navigate = useNavigate();
  const { products } = useContext(ProductContext);

  const [likedBooks, setLikedBooks] = useState({});

  // Toggle like status for each eBook
  const toggleLike = (id) => {
    setLikedBooks((prevLikedBooks) => ({
      ...prevLikedBooks,
      [id]: !prevLikedBooks[id], // Toggle like status
    }));
  };
  return (
    <>
    
      <div className="h-auto w-full px-9 md:px-[8%] pb-5 overflow-hidden  ">
    
      <div className="text-center my-8 ">
        <h1 className="text-2xl font-bold text-gray-600 ">E-BOOKS</h1>
        <hr className="w-20 mx-auto mt-2 border-gray-400"/>
      </div> 
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full ">
  {products.map((product) => (
    <div
      key={product.id}
      className="shadow-md relative bg-slate-50 hover:shadow-lg overflow-hidden transition-shadow duration-300 font-mono  flex flex-col h-full"
    >
       {/* Like Button (Top Left Corner) */}
       <div className="absolute top-2 left-2 z-10">
            <button
              onClick={() => toggleLike(product.id)}
              className="text-xl focus:outline-none"
            >
              {/* Conditional rendering of the like button (filled or outlined heart) */}
              {likedBooks[product.id] ? (
                <FaHeart className="text-red-500" /> // Filled heart if liked
              ) : (
                <FaRegHeart className="text-gray-400" /> // Outlined heart if not liked
              )}
            </button>
          </div>
      <Link
        to={`/e-booksdetails/${product.id}`}
        className="block flex-grow"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-[150px] hover:scale-105 transition duration-300 md:h-[250px] w-full object-cover object-center"
        />
        <div className="flex flex-col justify-center text-start w-full py-2 px-2">
          <h2 className="text-sm font-semibold mb-1 w-full text-black hover:underline">{product.title}</h2>
          <p className="text-gray-600 text-xs font-bold  hover:underline"><strong>Price:</strong> ₹{product.price.toFixed(2)}</p>
        </div>
      </Link>
      <Link
        to={`/e-booksdetails/${product.id}`}
        className="inline-flex w-full items-center justify-center py-3 bg-black border-black border-[.5px] hover:text-black text-white text-[15px] font-medium hover:bg-zinc-100 transition duration-300 mt-auto"
      >
        View Details
      </Link>
    </div>
  ))}
      </div>




    </div>
    </>
  );
};

export default Ebooks;
