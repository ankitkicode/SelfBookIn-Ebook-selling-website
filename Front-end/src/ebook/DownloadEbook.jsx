import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const DownloadEbook = () => {
  const { id } = useParams();
  const { ebooks } = useContext(ProductContext);
  const ebook = ebooks.find((ebook) => ebook._id === id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const handleDownload = async () => {
    if (!ebook) {
      setError("Ebook not found.");
      return;
    }
  
    setLoading(true);
    setError(null);
    setSuccess(false); 
    try {
      // Make a request to your backend to get the signed URL
      const response = await axiosInstance.get(`/ebooks/download/${ebook._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        responseType: 'blob', // Important: This tells Axios to treat the response as binary data (file).
      });
  
      // Create a download URL from the blob
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      
      // Use a hidden anchor tag to trigger the download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'ebook.pdf'); // You can customize the file name
      document.body.appendChild(link);
      link.click();
      link.remove();
  
      setSuccess(true); // Set success to true after successful download
    } catch (error) {
      // Properly handle the error message from the server
      setError(error.response?.data?.message || 'Error downloading the ebook');
      console.error('Error downloading ebook:', error);
    } finally {
      setLoading(false); // Set loading false after everything is complete
    }
  };
  

  return (
    <div className="flex flex-col items-center text-center h-[80vh] px-6 justify-center">
      <h1 className="text-2xl font-semibold mb-4">Download Your Ebook</h1>
      <p className="text-gray-500 mb-6">This link will expire in 5 minutes. Please download the ebook before that.</p>
      <button
        onClick={handleDownload}
        className="bg-black text-white py-2 px-4 shadow hover:bg-gray-800 transition-colors"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Download Ebook'}
      </button>
      {success && (
        <h1 className="text-xl font-semibold mt-4">Thanks for downloading!</h1>  // Success message
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <Link
        to={"/"}
        className={"text-gray-700 mt-4 underline  hover:underline"}>
        Back to home
      </Link>
    </div>
  );
};

export default DownloadEbook;
