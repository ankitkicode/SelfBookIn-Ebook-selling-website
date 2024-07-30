// src/components/Card.jsx
import React, { useContext } from "react";
import { ProductContext } from "../components/context/ProductContext";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DeliveryInfoForm from "./DeliveryInfoForm ";
import OrderSummary from "./OrderSummary";

const Card = () => {
  
  const navigate = useNavigate();

  return (
    <>
    <div className="h-[100vh] w-full  ">
  {/* Back Button */}
  <button
        onClick={() => navigate(-1)}
        className="my-3 mx-8  max-[700px]:my-3 max-[740px]:mx-5 inline-flex items-center  hover:text-gray-700"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
        Back
      </button>
      <div className="flex flex-col items-center mt-[-5%]  justify-center min-h-screen w-[90%] max-[740px]:w-full m-auto ">
        <div className="grid  max-w-6xl grid-cols-1 gap-8 p-8  w-full md:grid-cols-2">
          <DeliveryInfoForm />
          <OrderSummary />
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
