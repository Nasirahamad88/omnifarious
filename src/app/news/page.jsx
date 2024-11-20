import Image from "next/image";
import React from "react";
import Childcare from '../../../public/Childcare.png'
const page = () => {
  return (
    <div className="flex pt-20 flex-col justify-center items-center h-full bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 font-semibold text-center px-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-blue-700">
          Omnifarious Inc. is Hiring!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We are offering exclusive training on Child Care for Care Givers and
          Management staffs with affordable options. For more details pls
          contact us.
        </p>
        <Image src={Childcare} alt="team" className="w-full" />
        <h3 className="text-md md:text-lg text-red-500 mb-4">
          {/* The deadline for application is September 5, 2024. */}
        </h3>
        <a
          href=""
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default page;
