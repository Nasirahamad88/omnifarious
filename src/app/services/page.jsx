import React from "react";
import Link from "next/link";


import Image from "next/image";
import Social from '../../../public/Icons/Social.png'
import Environmental from "../../../public/Icons/Environmental.png";
import Electrical from "../../../public/Icons/Electrical.jpg";
import Fire from '../../../public/Icons/Fire.jpg'
import Head from '../../../public/Icons/Head.png'
import Leather from "../../../public/Icons/Leather.JPG";
import Signage from "../../../public/Icons/Signage.png";
import Structural from "../../../public/Icons/Structural.JPG";
import Calibration from "../../../public/Icons/Calibration.png";
import Training from "../../../public/Icons/Training.png";

const Services = () => {
    return (
      <section className="bg-white">
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
                One Stop Solution in Compliance &amp; Engineering Services to
                Ensure Sustainability.
              </p>
            </header>
            {/* End heading */}
            {/* row */}
            <div className="flex flex-wrap flex-row -mx-4 text-center">
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
                  <div className="flex items-center justify-center ">
                    <div className="text-black text-4xl ">
                      <Image
                        src={Social}
                        alt="Social Compliance"
                        className="w-10"
                      />
                    </div>
                  </div>

                  <div className="inline-block text-gray-900 mb-4"></div>
                  <h3 className="text-lg leading-normal mb-2  font-semibold text-black">
                    Social Compliance
                  </h3>
                  <p className="text-gray-500">
                    Assisting in any kind of Social Compliance audit and
                    organizational development.
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
                      <Image
                        src={Environmental}
                        alt="Environmental Compliance"
                        className="w-10"
                      />
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
                <Link href="/aboutLWG">
                  <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    {/* icons */}
                    <div className="flex items-center justify-center">
                      <div className="text-black text-4xl">
                        <Image
                          src={Leather}
                          alt="Leather Working Group (LWG) Certification"
                          className="w-10"
                        />
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
                </Link>
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
                      <Image
                        src={Structural}
                        alt="Structural Safety"
                        className="w-10"
                      />
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
                      <Image
                        src={Electrical}
                        alt="Electrical Safety"
                        className="w-10"
                      />
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
                <Link href="./fireSafety">
                  <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    {/* icons */}
                    <div className="flex items-center justify-center">
                      <div className="text-black text-4xl">
                        <Image src={Fire} alt="Fire Safety" className="w-10" />
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
                </Link>
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
                  <div className="flex items-center justify-center">
                    <div className="text-black text-4xl">
                      <Image
                        src={Head}
                        alt="Head Hunting/Recruitment Services"
                        className="w-10"
                      />
                    </div>
                  </div>

                  <div className="inline-block text-gray-900 mb-4"></div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Head Hunting/Recruitment Services
                  </h3>
                  <p className="text-gray-500">
                    All department employees recruitment services including head
                    hunting, interview & selection.
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
                  {/* {/* icons */}
                  <div className="flex items-center justify-center">
                    <div className="text-black text-4xl">
                      <Image
                        src={Calibration}
                        alt="Calibration Services"
                        className="w-10"
                      />
                    </div>
                  </div>

                  <div className="inline-block text-gray-900 mb-4"></div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Calibration Services
                  </h3>
                  <p className="text-gray-500">
                    Machine, Equipment, Lift Calibration Services.
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
                      <Image src={Signage} alt="Signage" className="w-10" />
                    </div>
                  </div>

                  <div className="inline-block text-gray-900 mb-4"></div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Digital Signage & Evacuation Plan
                  </h3>
                  <p className="text-gray-500">
                    Design, Supply and Installation of all kinds of Signage,
                    Poster, Banner, Plans etc.
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
                      <Image src={Training} alt="Signage" className="w-10" />
                    </div>
                  </div>

                  <div className="inline-block text-gray-900 mb-4"></div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Training Organizer & Facilitator
                  </h3>
                  <p className="text-gray-500">
                    HR & Compliance related soft skill training programs
                    organizer and facilitator.
                  </p>
                </div>
              </div>
            </div>
            {/* End row */}
          </div>
        </div>
      </section>
    );
};

export default Services;
