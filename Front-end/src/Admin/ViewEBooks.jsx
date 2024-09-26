import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

const ViewEBooks = () => {
  const [eBooks, setEBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("authToken")

  // Fetch all eBooks from the API when the component mounts
  useEffect(() => {
    const fetchEBooks = async () => {
      try {
        const response = await axiosInstance.get("/ebooks",{
          headers: {
            'Content-Type': 'application/json',
            Authorization:`Bearer ${token}` 
          },
        }); 
        setEBooks(response.data); 
      } catch (err) {
        setError("Failed to fetch eBooks");
        console.error(err);
      } finally {
        setLoading(false); 
      }
    };

    fetchEBooks();
  }, [token]);

  // Handler for deleting an eBook
const handleDelete = async (id) => {
  try {
    const response = await axiosInstance.delete(`/ebooks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
    
    // Update the eBooks state after successful deletion
    setEBooks((prevEBooks) => prevEBooks.filter((ebook) => ebook._id !== id));
    
  } catch (err) {
    setError("Failed to delete eBook");
    console.error(err);
  }
};


  if (loading) {
    return <p className="text-center">Loading eBooks...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center font-mono">View All eBooks</h2>

      {/* eBooks Container */}
      <div className="bg-white overflow-hidden">
        {/* eBooks List */}
        {eBooks.length > 0 ? (
          eBooks.map((ebook) => (
            <div
              key={ebook.id}
              className="flex items-center border-y mt-5 border-gray-300 p-4 gap-10 justify-around"
            >
              {/* eBook Cover Image */}
              <div className="flex-shrink-0">
                <img
                  src={ebook.coverImageUrl || "https://via.placeholder.com/150"} // Use actual coverImageUrl from API
                  alt={ebook.title}
                  className="w-16 h-16 object-cover rounded"
                />
              </div>

              {/* eBook Title */}
              <div className="flex-2 flex items-center font-mono">
                <span className="text-lg font-semibold">{ebook.title}</span>
              </div>

              {/* eBook Category */}
              <div className="flex-2 flex items-center font-mono">
                <span className="text-gray-700">{ebook.category}</span>
              </div>

              {/* eBook Price */}
              <div className="flex-shrink-0 font-mono">
                <span className="font-medium text-gray-900">₹{ebook.price}</span>
              </div>

              {/* Delete Button */}
              <div className="flex-shrink-0">
                <button
                  className="text-red-500 font-bold text-xl"
                  onClick={() => handleDelete(ebook._id)}
                >
                  &times;
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No eBooks available</p>
        )}
      </div>
    </div>
  );
};

export default ViewEBooks;
