import React from "react";
import CustomButton from "../components/Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen  w-fit m-auto gap-2">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600">
        404 - Page Not Found
      </h1>
      <CustomButton
        label="Back to Home page"
        bgColor="bg-[#00ab7f]"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Error;
