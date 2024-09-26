import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../context/ProductContext";
import AuthContext from "../context/AuthContext";
import axiosInstance from "../utils/axiosInstance";

const EbookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ebooks, } = useContext(ProductContext);
  const { user } = useContext(AuthContext);
  const ebook = ebooks.find((ebook) => ebook._id === id);
  const [loading, setLoading] = useState(false);



  const handleBuyNow = async (ebook) => {
    console.log(user)
    if (!user) {
      navigate('/login');
      return;
    }
    setLoading(true);
    try {
      // Call the backend to create a Razorpay order
      const response = await axiosInstance.post('/ebooks/create-order', {
        ebookId: ebook._id, // Send ebookId in the request body
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("authToken")}`, // Set the Authorization header here
        },
      });

      const data = await response.data;
      // console.log("data from create order",data)
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: data.amount,
        currency: data.currency,
        name: "Selfbook.In",
        description: "Purchase of " + ebook.title,
        order_id: data.id,
        handler: async function (response) {

          try {
            // Call the backend to verify the payment
            const paymentVerificationResponse = await axiosInstance.post('/ebooks/payment', {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              ebookId: ebook._id,
            }, {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem("authToken")}`, // Set the Authorization header here
              }
            });

            // If payment verification is successful
            if (paymentVerificationResponse.status === 200) {
              // Redirect to the download page
              navigate(`/download/${ebook._id}`);
            }
          } catch (error) {
            console.error('Error verifying payment:', error);

          } finally {
            setLoading(false);
          }

        },
        prefill: {
          name: user.fullName,
          email: user.email,
          contact: user.number
        },
        notes: {
          ebookId: ebook._id
        },
        theme: {
          color: "#c0ccfa"
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error creating order:', error);
    } finally {
      setLoading(false);
    }

  };





  if (!ebook) {
    return <div className="text-center py-10 text-gray-600 font-mono min-h-[80vh] flex items-center justify-center ">
      <div>
        <h1 className="text-2xl font-bold">Product not found!</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-3 bg-black text-white text-sm font-semibold shadow-lg hover:bg-white hover:text-black border-2 border-black transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Go Back
        </button>
      </div>
    </div>;
  }

  return (
    <>
      <div className="text-center my-6 ">
        <h1 className="text-2xl font-bold text-gray-600 ">E-BOOKS</h1>
        <hr className="w-20 mx-auto mt-2 border-gray-400" />
      </div>

      <div className="container w-full mx-auto md:px-[5%] font-mono">
        <div
          key={ebook._id}
          className="bg-gray-50 mb-3 shadow-md overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6"
        >
          {/* ebook Image */}
          <div className="w-full sm:w-[40%] h-[300px] sm:h-[400px] flex-shrink-0">
            <img
              src={ebook.coverImageUrl}
              alt={ebook.title}
              className="h-full w-full object-cover "
            />
          </div>

          {/* ebook Information */}
          <div className="w-full sm:w-[70%] flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-900">{ebook.title}</h1>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {ebook.description}
            </p>
            <p className="text-gray-800 text-sm sm:text-lg">
              <strong>Author:</strong> {ebook.author}
            </p>
            <p className="text-gray-800 text-sm sm:text-lg">
              <strong>Price:</strong> ₹{ebook.price.toFixed(2)}
            </p>
            <p className="text-gray-800 text-sm sm:text-lg">
              <strong>Rating:</strong> {ebook.rating} ⭐
            </p>
            <p className="text-gray-800 text-sm sm:text-lg">
              <strong>Category:</strong> {ebook.category}
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleBuyNow(ebook)}
              className="mt-4 px-6 py-3 bg-black text-white text-sm font-semibold shadow-lg hover:bg-white hover:text-black border-2 border-black transition-colors duration-300"
              disabled={loading}
            >
              {loading ? "Processing..." : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EbookDetails;
