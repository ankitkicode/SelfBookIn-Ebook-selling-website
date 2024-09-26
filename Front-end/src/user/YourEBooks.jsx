import { Link } from "react-router-dom";
import { useContext,  } from "react";
import { ProductContext } from "../context/ProductContext"; // Import ProductContext

const YourEBooks = () => {
 const {userEbooks}  = useContext(ProductContext)

  return (
    <div className="min-h-[80vh] w-full px-9 md:px-[8%] pb-5 overflow-hidden">
      {/* Title Section */}
      <div className="text-center my-8">
        <h1 className="text-2xl font-bold text-gray-600">Your E-BOOKS</h1>
        <hr className="w-20 mx-auto mt-2 border-gray-400" />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {userEbooks.length > 0 ? (
          userEbooks.map((ebook) => (
            <div
              key={ebook._id} // Use ebook._id as key
              className="shadow-md bg-slate-50 hover:shadow-lg overflow-hidden transition-shadow duration-300 font-mono flex flex-col h-full"
            >
              {/* Image and Title Section */}
              <Link to={`/read-ebook/${ebook._id}`} className="block flex-grow">
                <img
                  src={ebook.coverImageUrl} // Assuming the eBook has a coverImageUrl property
                  alt={ebook.title}
                  className="h-[150px] hover:scale-105 transition duration-300 md:h-[250px] w-full object-cover object-center"
                />
                <div className="flex flex-col justify-center text-start w-full py-2 px-2">
                  <h2 className="text-sm font-semibold mb-1 w-full text-black hover:underline">
                    {ebook.title} 
                  </h2>
                  <p className="text-gray-600 text-xs font-bold hover:underline">
                    <strong>Price:</strong> ₹{ebook.price?.toFixed(2)}
                  </p>
                </div>
              </Link>

              {/* View Details Button */}
              <Link
                to={`/read-ebook/${ebook._id}`} // Link to the read page of the eBook
                className="inline-flex w-full items-center justify-center py-3 bg-black border-black border-[.5px] hover:text-black text-white text-[15px] font-medium hover:bg-zinc-100 transition duration-300 mt-auto"
              >
                Read Ebook
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center h-[60vh] text-gray-500 text-lg">
            You haven't bought any eBooks yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default YourEBooks;
