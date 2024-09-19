import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const SavedEbooks = () => {
  const [likedBooks, setLikedBooks] = useState({});

  // Toggle like status for each eBook
  const toggleLike = (id) => {
    setLikedBooks((prevLikedBooks) => ({
      ...prevLikedBooks,
      [id]: !prevLikedBooks[id], // Toggle like status
    }));
  };
  // Dummy data for saved eBooks
  const [savedEBooks] = useState([
    {
      id: 1,
      title: "Node.js Guide",
      price: 199,
      image: "https://via.placeholder.com/150", // Placeholder for eBook image
    },
    {
      id: 2,
      title: "Python for Data Science",
      price: 599,
      image: "https://via.placeholder.com/150", // Placeholder for eBook image
    },
    {
      id: 3,
      title: "HTML & CSS",
      price: 299,
      image: "https://via.placeholder.com/150", // Placeholder for eBook image
    },
    {
      id: 4,
      title: "Algorithms in Java",
      price: 499,
      image: "https://via.placeholder.com/150", // Placeholder for eBook image
    },
  ]);

  return (
    <div className="h-auto w-full px-9 md:px-[8%] pb-5 overflow-hidden">
      {/* Title Section */}
      <div className="text-center my-8">
        <h1 className="text-2xl font-bold text-gray-600">Saved E-Books</h1>
        <hr className="w-20 mx-auto mt-2 border-gray-400" />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {savedEBooks.length > 0 ? (
          savedEBooks.map((ebook) => (
            <div
              key={ebook.id}
              className="shadow-md relative bg-slate-50 hover:shadow-lg overflow-hidden transition-shadow duration-300 font-mono flex flex-col h-full"
            >
              
 {/* Like Button (Top Left Corner) */}
 <div className="absolute top-2 left-2 z-10">
            <button
              onClick={() => toggleLike(ebook.id)}
              className="text-xl focus:outline-none"
            >
             
              {likedBooks[ebook.id] ? (
                <FaHeart className="text-red-500" /> 
              ) : (
                <FaRegHeart className="text-gray-600" /> 
              )}
            </button>
          </div>



              {/* Image and Title Section */}
              <Link to={`/e-booksdetails/${ebook.id}`} className="block flex-grow">
                <img
                  src={ebook.image}
                  alt={ebook.title}
                  className="h-[150px] hover:scale-105 transition duration-300 md:h-[250px] w-full object-cover object-center"
                />
                <div className="flex flex-col justify-center text-start w-full py-2 px-2">
                  <h2 className="text-sm font-semibold mb-1 w-full text-black hover:underline">
                    {ebook.title}
                  </h2>
                  <p className="text-gray-600 text-xs font-bold hover:underline">
                    <strong>Price:</strong> ₹{ebook.price.toFixed(2)}
                  </p>
                </div>
              </Link>

              {/* View Details Button */}
              <Link
                to={`/e-booksdetails/${ebook.id}`}
                className="inline-flex w-full items-center justify-center py-3 bg-black border-black border-[.5px] hover:text-black text-white text-[15px] font-medium hover:bg-zinc-100 transition duration-300 mt-auto"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center h-[60vh] text-gray-500 text-lg">
            You haven't saved any eBooks yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedEbooks;
