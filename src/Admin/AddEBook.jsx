import { useState } from "react";

const AddEBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form submission logic, e.g., sending data to a backend
    console.log({
      title,
      author,
      price,
      category,
      description,
      coverImage,
      pdfFile,
    });
    
    alert("eBook Added!");
    
    // Reset form fields
    setTitle("");
    setAuthor("");
    setPrice("");
    setCategory("");
    setDescription("");
    setCoverImage(null);
    setPdfFile(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg font-mono">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New eBook</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        {/* eBook Title */}
        <label className="text-lg font-semibold">eBook Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter eBook Title"
          className="p-3 border border-gray-400"
        />

        {/* Author */}
        <label className="text-lg font-semibold">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter Author Name"
          className="p-3 border border-gray-400"
        />

        {/* Description */}
        <label className="text-lg font-semibold">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
          className="p-3 border border-gray-400 h-28"
        ></textarea>

        {/* Inline eBook Cover Image and PDF Upload */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="w-full sm:w-1/2">
            <label className="text-lg font-semibold">Upload eBook Cover Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setCoverImage(e.target.files[0])}
              className="p-2 border border-gray-400 w-full"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label className="text-lg font-semibold">Upload eBook PDF</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setPdfFile(e.target.files[0])}
              className="p-2 border border-gray-400 w-full"
            />
          </div>
        </div>

        {/* Price */}
        <label className="text-lg font-semibold">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Price"
          className="p-3 border border-gray-400"
        />

        {/* Category */}
        <label className="text-lg font-semibold">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 border border-gray-400"
        >
          <option value="" disabled>Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-fiction">Non-fiction</option>
          <option value="Biography">Biography</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white py-3 px-4 mt-4 hover:bg-gray-800 transition-all"
        >
          Add eBook
        </button>
      </form>
    </div>
  );
};

export default AddEBook;
