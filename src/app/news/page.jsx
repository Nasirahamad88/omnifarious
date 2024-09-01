import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 font-semibold text-center px-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-blue-700">
          Omnifarious Inc. is Hiring!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We are looking for a compliance specialist immediately. If interested,
          please apply.
        </p>
        <h3 className="text-md md:text-lg text-red-500 mb-4">
          The deadline for application is September 5, 2024.
        </h3>
        <a
          href="https://www.facebook.com/share/p/1BwzS3JxYHsnusCJ/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default page;
