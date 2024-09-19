// import React from 'react';

// const DeliveryInfoForm = () => {
//   return (
//     <div className='border border-gray-200 py-3 px-3 rounded-md'>
//       <h2 className="mb-4 text-xl font-semibold">Delivery Information</h2>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//             Name
//           </label>
//           <input
//             id="name"
//             defaultValue="Bryan Cranston"
//             className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div className="space-y-2">
//           <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700">
//             Mobile Number
//           </label>
//           <input
//             id="mobile-number"
//             defaultValue="+1 424-236-3574"
//             className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div className="space-y-2 col-span-2">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             id="email"
//             defaultValue="bryancranston@example.com"
//             className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div className="space-y-2">
//           <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//             City
//           </label>
//           <input
//             id="city"
//             defaultValue="Hawthorne"
//             className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div className="space-y-2">
//           <label htmlFor="state" className="block text-sm font-medium text-gray-700">
//             State
//           </label>
//           <select
//             id="state"
//             className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           >
//             <option value="CA">California</option>
//             <option value="NY">New York</option>
//             <option value="TX">Texas</option>
//           </select>
//         </div>
//         <div className="space-y-2">
//           <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
//             ZIP
//           </label>
//           <input
//             id="zip"
//             defaultValue="90250"
//             className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div className="space-y-2 col-span-2">
//           <label htmlFor="address" className="block text-sm font-medium text-gray-700">
//             Address
//           </label>
//           <input
//             id="address"
//             defaultValue="4796 Libby Street"
//             className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
//           />
//           <button className="w-full mt-4 px-4 py-2 text-white bg-gray-900 rounded-md shadow-sm hover:bg-gray-800 ">
//         Add Address
//       </button>
//         </div>
//       </div>
//       {/* <div className="mt-6">
//         <h3 className="mb-2 text-lg font-semibold">Schedule Delivery</h3>
//         <div className="flex items-center space-x-2">
//           <input
//             type="checkbox"
//             id="schedule-delivery"
//             className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//           />
//           <label htmlFor="schedule-delivery" className="text-sm font-medium text-gray-700">
//             Schedule Delivery
//           </label>
//         </div>
//         <div className="grid grid-cols-2 gap-4 mt-4">
//           <div className="space-y-2 col-span-2">
//             <label htmlFor="dates" className="block text-sm font-medium text-gray-700">
//               Dates
//             </label>
//             <input
//               id="dates"
//               defaultValue="17 Apr, 23 - 22 Apr, 23"
//               className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="space-y-2 col-span-2">
//             <label htmlFor="note" className="block text-sm font-medium text-gray-700">
//               Note
//             </label>
//             <textarea
//               id="note"
//               placeholder="Type your note"
//               className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             ></textarea>
//           </div>
//         </div>
//       </div>
//       <div className="mt-6">
//         <h3 className="mb-2 text-lg font-semibold">Payment Method</h3>
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2">
//             <input
//               type="radio"
//               id="online-payment"
//               name="payment-method"
//               value="online-payment"
//               className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
//             />
//             <label htmlFor="online-payment" className="text-sm font-medium text-gray-700">
//               Online Payment
//             </label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <input
//               type="radio"
//               id="cash-on-delivery"
//               name="payment-method"
//               value="cash-on-delivery"
//               defaultChecked
//               className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
//             />
//             <label htmlFor="cash-on-delivery" className="text-sm font-medium text-gray-700">
//               Cash on Delivery
//             </label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <input
//               type="radio"
//               id="pos-on-delivery"
//               name="payment-method"
//               value="pos-on-delivery"
//               className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
//             />
//             <label htmlFor="pos-on-delivery" className="text-sm font-medium text-gray-700">
//               POS on Delivery
//             </label>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default DeliveryInfoForm;
