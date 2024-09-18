import { useState } from "react";

const ViewEBooks = () => {
  const [eBooks, setEBooks] = useState([
    {
      id: 1,
      title: "React Basics",
      price: 300,
      category: "Web Development",
      image: "https://via.placeholder.com/150", // Placeholder for eBook image
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      price: 500,
      category: "Programming",
      image: "https://via.placeholder.com/150", // Placeholder for eBook image
    },
  ]);

  // Handler for deleting an eBook
  const handleDelete = (id) => {
    const updatedEBooks = eBooks.filter((ebook) => ebook.id !== id);
    setEBooks(updatedEBooks);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold  text-center font-mono">View All eBooks</h2>
      
      {/* eBooks Container */}
      <div className="bg-white overflow-hidden">
        {/* eBooks List */}
        {eBooks.map((ebook) => (
          <div
            key={ebook.id}
            className="flex items-center border-y mt-5  border-gray-300 p-4 gap-10 justify-around"
          >
            {/* eBook Cover Image */}
            <div className="flex-shrink-0">
              <img
                src={ebook.image}
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
                onClick={() => handleDelete(ebook.id)}
              >
                &times;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewEBooks;
