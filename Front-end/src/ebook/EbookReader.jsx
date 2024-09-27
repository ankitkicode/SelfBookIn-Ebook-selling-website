import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { useParams, Link } from 'react-router-dom';
import PDF from 'react-pdf-js'; // Assuming you're using react-pdf-js

const EbookReader = () => {
  const { ebookId } = useParams(); 
  console.log(ebookId,"from ebook reader")
  const { userEbooks } = useContext(ProductContext);
  console.log(userEbooks,"from ebboks ") 
  const ebook = userEbooks.find((ebook) => ebook._id === ebookId); 
  const [numPages, setNumPages] = useState(null); 
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0); 

  if (!ebook) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-red-600">eBook not found</h2>
        <p className="text-gray-500 mt-4">It looks like this eBook is not in your collection.</p>
        <Link to="/your-ebooks" className="text-blue-500 underline mt-6">Go back to Your eBooks</Link>
      </div>
    );
  }

  // Function to handle document load and get total pages
  const onDocumentLoadSuccess = (pdf) => {
    setNumPages(pdf.numPages);
  };

  // Go to the previous page
  const goToPreviousPage = () => {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Go to the next page
  const goToNextPage = () => {
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages));
  };

  // Function to zoom in
  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 3.0)); // Limit zoom to 300%
  };

  // Function to zoom out
  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5)); // Limit zoom out to 50%
  };

  return (
    <div className="pdf-reader-container  min-h-screen bg-gray-100 p-2">
      {/* Display the eBook title */}
      <h2 className="text-xl md:text-2xl font-semibold my-4 text-center">{ebook.title}</h2>
      <div className="flex items-center justify-between w-[90%] md:w-[52vw] mb-2 m-auto mt-4">

               {/* Zoom Out Button */}
               <button
          onClick={zoomOut}
          className="px-4 py-2 bg-black text-white rounded"
        >
          -
        </button>


        {/* Page Info */}
        <p className="text-lg mx-4">
          Zoom-In/Zoom-out
        </p>

        
      {/* Zoom In Button */}
      <button
          onClick={zoomIn}
          className="px-4 py-2 bg-black text-white rounded"
        >
          +
        </button>
        
      </div>
      {/* PDF Viewer */}
      <div className="w-full h-[70vh]  md:h-[100vh] relative flex justify-center items-center">
        <div className="w-full md:w-[120vh] bg-cyan-600 md:m-auto flex items-center justify-center h-full p-2">
          <div className="h-full w-full bg-white shadow-lg p-2 overflow-auto">
            <PDF
              file={ebook.pdfUrl} 
              onDocumentComplete={(pages) => setNumPages(pages)} 
              page={pageNumber}
              onLoadSuccess={onDocumentLoadSuccess}
              className="w-full h-full object-contain"
              scale={scale} // Set the zoom scale here
            />
          </div>
        </div>
      </div>

      {/* Zoom and Page Navigation Controls */}
      <div className="flex items-center justify-between w-full md:w-[53vw] m-auto mt-4">

        {/* Previous Page Button */}
        <button 
          onClick={goToPreviousPage}
          disabled={pageNumber <= 1} 
          className="px-4 py-2 bg-black text-white  disabled:bg-gray-400"
        >
          Previous
        </button>

        {/* Page Info */}
        <p className="text-lg mx-4">
          Page {pageNumber} of {numPages}
        </p>

        {/* Next Page Button */}
        <button 
          onClick={goToNextPage}
          disabled={pageNumber >= numPages} 
          className="px-4 py-2 bg-black text-white  disabled:bg-gray-400"
        >
          Next
        </button>

        
      </div>
    </div>
  );
};

export default EbookReader;
