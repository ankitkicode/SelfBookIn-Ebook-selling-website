// import React, { useContext } from "react";
// import { ProductContext } from "./context/ProductContext";

// const OrderSummary = () => {
//   const { cart } = useContext(ProductContext);
//   return (
//     <div className="border border-gray-200 py-3 px-3 rounded-md">
//       <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
//       <div className="space-y-4">
//           {cart.map((item, index) => (
//         // <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//              <img src={item.image} alt="Product 1" className="w-16 h-16" />
//             <div>
//               <h3 className="text-2xl max-[740px]:text-lg font-bold">{item.title}</h3>
//               <p className="text-sm font-semibold">Rs. - {item.price}</p>
//             </div>
//             </div>
          
//           <div className="flex items-center space-x-2">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//             >
//               -
//             </button>
//             <span>01</span>
//             <button
//               type="button"
//               className="inline-flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//             >
//               +
//             </button>
//           </div>
//         </div>
//         ))}
      
//       </div>
//       <div className="mt-6 space-y-2">
//         <div className="flex justify-between">
//           <span className="text-sm font-medium">Subtotal</span>
//           <span className="text-sm font-medium">$1030.60</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="text-sm font-medium">Shipping</span>
//           <span className="text-sm font-medium">$20.00</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="text-lg font-semibold">Total (USD)</span>
//           <span className="text-lg font-semibold">$1050.60</span>
//         </div>
//       </div>
//       <button className="w-full mt-4 px-4 py-2 text-white bg-gray-900 rounded-md shadow-sm hover:bg-gray-800 ">
//         Confirm Order
//       </button>
//     </div>
//   );
// };

// export default OrderSummary;
