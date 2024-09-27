// components/Ebooks.js
import { useContext} from "react";
import { Link } from "react-router-dom";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";

const Ebooks = () => {
  const { ebooks, error, loading,} = useContext(ProductContext);

  if (loading) return <div>Loading eBooks...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-[80vh] w-full px-9 md:px-[8%] pb-5 overflow-hidden">
      <div className="text-center my-8">
        <h1 className="text-2xl font-bold text-gray-600">E-BOOKS</h1>
        <hr className="w-20 mx-auto mt-2 border-gray-400" />
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {ebooks.map((ebook) => {
          return (
            <div
              key={ebook._id}
              className="shadow-md relative bg-slate-100 hover:shadow-lg overflow-hidden transition-shadow duration-300 font-mono flex flex-col h-full"
            >
              {/* Like Button (Top Left Corner) */}
            

              {/* Link to eBook details */}
              <Link to={`/e-booksdetails/${ebook._id}`} className="block flex-grow">
                <img
                  src={ebook.coverImageUrl}
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

              {/* Button to view details */}
              <Link
                to={`/e-booksdetails/${ebook._id}`}
                className="inline-flex w-full items-center justify-center py-3 bg-black border-black border-[.5px] hover:text-black text-white text-[15px] font-medium hover:bg-zinc-100 transition duration-300 mt-auto"
              >
                View Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ebooks;
