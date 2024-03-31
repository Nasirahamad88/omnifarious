import React from "react";
import GoogleMapsLink from "../Component/GoogleMapsLink";

const Contact = () => {
  return (
    <section className="bg-white pt-12 sm:pt-20 pb-12 sm:pb-20">
      <div className="w-[90%] mx-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We'd love to hear from you. Contact us using the details below.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center lg:flex-row md:flex-row">
          <div className="w-full lg:w-1/2 md:w-1/2 mb-8 lg:mb-0 md:mb-0">
            <GoogleMapsLink />
          </div>
          <div className="w-full lg:w-1/2 md:w-1/2">
            <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-8">
              <div className="flex items-center space-x-4">
                <svg
                  className="h-8 w-8 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0V3zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10-8a1 1 0 0 1 1 1v9a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1zm-2 6a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v3zm2 0a3 3 0 0 1-6 0V5a3 3 0 0 1 6 0v6z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    House 39, Road 13, Sector 13, Uttara Model Town, Dhaka-1230,
                    Bangladesh.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="h-8 w-8 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0V3zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10-8a1 1 0 0 1 1 1v9a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1zm-2 6a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v3zm2 0a3 3 0 0 1-6 0V5a3 3 0 0 1 6 0v6z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">
                    +880 1673 901414 <br />
                    +880 1632 330977
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="h-8 w-8 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a9 9 0 0 1 5.959 16.401l4.535 4.535a1 1 0 0 1-1.32 1.497l-.096-.083-4.536-4.535A9 9 0 1 1 10 1zm0 2a7 7 0 1 0 0 14A7 7 0 0 0 10 3zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@omnifariousinc.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
