import React from "react";
import { GrCompliance } from "react-icons/gr";

import { FaHouseFire, FaHouseChimneyCrack } from "react-icons/fa6";
import {
  MdOutlineSolarPower,
  MdOutlineDepartureBoard,
  MdMiscellaneousServices,
  MdOutlineAssessment,
  MdOutlineElectricalServices,
  MdDesignServices,
} from "react-icons/md";

import { FaGoogleWallet } from "react-icons/fa";


const Services = () => {
    return (
      <section className="bg-white">
        <div className="text-white -mt-28 py-8 px-6 mb-10 text-center bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg shadow-xl max-w-md relative mx-28 ">
          <h1 className="text-2xl font-bold mb-2">Today's Offer!</h1>
          <h3 className="text-lg font-semibold mb-2">Sunday Deal: 20% Off</h3>
          <p className="text-sm mb-4">
            Safety, Renewable Energy & Solar System
          </p>
          <button className="bg-white text-blue-800 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition duration-300">
            Book Now
          </button>
        </div>

        <div
          id="services"
          className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
        >
          <div className="container xl:max-w-6xl mx-auto px-4">
            {/* Heading start */}
            <header className="text-center mx-auto mb-12 lg:px-20">
              <h2 className="lg:text-4xl leading-normal mb-2 font-bold text-black">
                Services
              </h2>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 100 60"
                style={{ margin: "0 auto", height: "35px" }}
                xmlSpace="preserve"
              >
                <circle
                  cx="50.1"
                  cy="30.4"
                  r="5"
                  className="stroke-primary"
                  style={{
                    fill: "transparent",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                  }}
                />
                <line
                  x1="55.1"
                  y1="30.4"
                  x2="100"
                  y2="30.4"
                  className="stroke-primary"
                  style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
                />
                <line
                  x1="45.1"
                  y1="30.4"
                  x2="0"
                  y2="30.4"
                  className="stroke-primary"
                  style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
                />
              </svg>
              <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                Save time managing advertising &amp; Content for your business.
              </p>
            </header>
            {/* End heading */}
            {/* row */}
            <div className="flex flex-wrap flex-row -mx-4 text-center">
              {/* Service block 1: SEO Services */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  {/* icons */}
                  <div className="flex items-center justify-center">
                    <div className="text-black text-4xl">
                      <GrCompliance />
                    </div>
                  </div>

                  <div className="inline-block text-gray-900 mb-4"></div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Social Compliance
                  </h3>
                  <p className="text-gray-500">
                    Assisting in any kind of Social Compliance audit and
                    organizational development.
                  </p>
                </div>
              </div>
              {/* End service block 1 */}
              {/* Service block 2: Social Content */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  {/* icons */}
                  <div className="flex items-center justify-center">
                    <div className="text-black text-4xl">
                      <MdOutlineAssessment />
                    </div>
                  </div>
                  <div className="inline-block text-gray-900 mb-4"></div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Environmental Compliance
                  </h3>
                  <p className="text-gray-500">
                    All type of Environmental Testing, Inspection, Assessment,
                    Audit and training for sustainability.
                  </p>
                </div>
              </div>
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  {/* icons */}
                  <div className="flex items-center justify-center">
                    <div className="text-black text-4xl">
                      <FaGoogleWallet />
                    </div>
                  </div>
                  <div className="inline-block text-gray-900 mb-4"></div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Leather Working Group (LWG) Certification
                  </h3>
                  <p className="text-gray-500">
                    Providing consultancy services and guidance to prepare
                    factory for certification as per the LWG audit protocol.
                  </p>
                </div>
              </div>
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  {/* icons */}
                  <div className="flex items-center justify-center">
                    <div className="text-black text-4xl">
                      <FaHouseFire />
                    </div>
                  </div>

                  <div className="inline-block text-gray-900 mb-4"></div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Fire Safety
                  </h3>
                  <p className="text-gray-500">
                    Fire Detection and Protection System design & drawing,
                    material supply, installation, T&C and training for
                    sustainability.
                  </p>
                </div>
              </div>
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  {/* icons */}
                  <div className="flex items-center justify-center">
                    <div className="text-black text-4xl">
                      <MdOutlineElectricalServices />
                    </div>
                  </div>

                  <div className="inline-block text-gray-900 mb-4"></div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Electrical Safety
                  </h3>
                  <p className="text-gray-500">
                    Electrical requirement assessment, design & drawing,
                    material supply, installation, T&C and training for
                    sustainability.
                  </p>
                </div>
              </div>
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  {/* icons */}
                  <div className="flex items-center justify-center">
                    <div className="text-black text-4xl">
                      <FaHouseChimneyCrack />
                    </div>
                  </div>

                  <div className="inline-block text-gray-900 mb-4"></div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Structural Safety
                  </h3>
                  <p className="text-gray-500">
                    DEA - Detail Engineering Assessment * RCC & Steel building
                    design, drawing & construction * Retrofitting design,
                    drawing & construction.
                  </p>
                </div>
              </div>
              {/* <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  {/* icons */}
                  {/* <div className="flex items-center justify-center">
                    <div className="text-black text-4xl">
                      <MdOutlineSolarPower />
                    </div>
                  </div>

                  <div className="inline-block text-gray-900 mb-4"></div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Renewable Energy & Solar System
                  </h3>
                  <p className="text-gray-500">
                    Site survey, analysis, design & drawing, material supply,
                    installation, T&C and training for sustainability.
                  </p>
                </div>
              </div> */} 
              
              {/* <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  {/* icons */}
                  {/* <div className="flex items-center justify-center">
                    <div className="text-black text-4xl">
                      <MdMiscellaneousServices />
                    </div>
                  </div>

                  <div className="inline-block text-gray-900 mb-4"></div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Pest Control Services
                  </h3>
                  <p className="text-gray-500">
                    Cockroach, Termites, Bedbugs, Rodent, Mosquito, Ants, Snakes
                    etc control, Fumigation Services, Residential, Commercial &
                    Industrial Pest Control and Cleaning Services
                  </p>
                </div>
              </div> */} 
              {/* <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  {/* icons */}
                  {/* <div className="flex items-center justify-center">
                    <div className="text-black text-4xl">
                      <MdDesignServices />
                    </div>
                  </div>

                  <div className="inline-block text-gray-900 mb-4"></div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    ETP{" "}
                    <span className=" text-xs">(Effluent Treatment Plant)</span>{" "}
                    Solution
                  </h3>
                  <p className="text-gray-500">
                    ETP planning, set-up, construction, modification, T&C,
                    servicing and training for sustainability. Consultancy
                    services for all the mentioned areas.
                  </p>
                </div>
              </div> */} 

              {/* End service block 2 */}
              {/* Add more service blocks similarly */}
            </div>
            {/* End row */}
          </div>
        </div>
      </section>
    );
};

export default Services;
