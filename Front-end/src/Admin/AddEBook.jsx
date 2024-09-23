import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const AddEBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const token = localStorage.getItem('authToken');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!coverImage || !pdfFile) {
      alert("Please select both a cover image and a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('coverImage', coverImage);
    formData.append('pdfFile', pdfFile);

    setLoading(true); // Set loading to true when form submission starts

    try {
      const response = await axiosInstance.post('/ebooks/add-ebook', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log(response.data);

      // Reset form fields after successful submission
      setTitle("");
      setAuthor("");
      setPrice("");
      setCategory("");
      setDescription("");
      setCoverImage(null);
      setPdfFile(null);
    } catch (error) {
      console.error("Error adding eBook:", error);
    } finally {
      setLoading(false); // Set loading back to false after form submission completes
    }
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
              onChange={(e) => {
                const file = e.target.files[0];
                setCoverImage(file);
                console.log("Selected Cover Image:", file);
              }}
              className="p-2 border border-gray-400 w-full"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label className="text-lg font-semibold">Upload eBook PDF</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                const file = e.target.files[0];
                setPdfFile(file);
                console.log("Selected PDF File:", file);
              }}
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
          className={`bg-black text-white py-3 px-4 mt-4 hover:bg-gray-800 transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading} // Disable the button while loading
        >
          {loading ? "Adding..." : "Add eBook"} {/* Change button text based on loading state */}
        </button>
      </form>
    </div>
  );
};

export default AddEBook;
