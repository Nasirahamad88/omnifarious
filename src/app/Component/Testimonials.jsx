"use client"
import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {

  const settings = {
    direction: "left",
    speed: 50,
    pauseOnHover: true,
    gradient: false,
    gradientColor: "#ffffff00",
    gradientWidth: 10,
    // style: { height: "200px" },
  };

  

  return (
    <div className="bg-white py-10">
      <h1 className=" text-4xl font-bold text-center py-10">
        Words From Our Partners And Clients
      </h1>
      {/* <button onClick={handleAutoplayToggle}>
        {autoplay ? "Stop Autoplay" : "Start Autoplay"}
      </button> */}
      <Marquee {...settings} className="flex space-x-6">
        <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              SPARKLE KNIT COMPOSITE LTD.
            </h2>
            <p className="text-gray-500 text-center mb-4">
              Location: Kabirpur, Savar, Dhaka
            </p>
            <div className="text-gray-700">
              <p className="font-bold">Project Entity:</p>
              <ul className="list-disc pl-4 ml-4">
                <li>Electrical Safety Consultant</li>
                <li>Fire Safety Consultant</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              FAHION POINT LTD.
            </h2>
            <p className="text-gray-500 text-center mb-4">
              Location: Konabari, BSCIC, Gazipur
            </p>
            <div className="text-gray-700">
              <p className="font-bold">Project Entity:</p>
              <ul className="list-disc pl-4 ml-4">
                <li>Detail Engineering Assessment</li>
                <li>Fire Safety Consultant</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              SOUTHERN KNITWEAR LTD.
            </h2>
            <p className="text-gray-500 text-center mb-4">Location: Gazipur</p>
            <div className="text-gray-700">
              <p className="font-bold">Project Entity:</p>
              <ul className="list-disc pl-4 ml-4">
                <li>Single Line Diagram (SLD)</li>
                <li>Lightning Protection System (LPS)</li>
                <li>Fire Safety Consultant</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              MEGHNA SUGAR REFINARY LTD.
            </h2>
            <p className="text-gray-500 text-center mb-4">
              Location: Meghna Ghat
            </p>
            <div className="text-gray-700">
              <p className="font-bold">Project Entity:</p>
              <ul className="list-disc pl-4 ml-4">
                <li>Fire Alarm & Detection System</li>
                <li>Fire Standpipe System</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              MEGHNA BULK BAG INDUSTRIES LTD.
            </h2>
            <p className="text-gray-500 text-center mb-4">
              Location: Sonargaon, Narayangonj
            </p>
            <div className="text-gray-700">
              <p className="font-bold">Project Entity:</p>
              <ul className="list-disc pl-4 ml-4">
                <li>Fire Alarm & Detection System</li>
                <li>Fire Safety Design</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              ASR SWEATER LTD.
            </h2>
            <p className="text-gray-500 text-center mb-4">
              Location: Mawona, Gazipur.
            </p>
            <div className="text-gray-700">
              <p className="font-bold">Project Entity:</p>
              <ul className="list-disc pl-4 ml-4">
                <li>Fire Alarm & Detection System</li>
                <li>Single Line Diagram (SLD)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              SPARKLE KNIT COMPOSITE LTD.
            </h2>
            <p className="text-gray-500 text-center mb-4">
              Location: Kabirpur, Savar, Dhaka
            </p>
            <div className="text-gray-700">
              <p className="font-bold">Project Entity:</p>
              <ul className="list-disc pl-4 ml-4">
                <li>Electrical Safety Consultant</li>
                <li>Fire Safety Consultant</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              SPARKLE KNIT COMPOSITE LTD.
            </h2>
            <p className="text-gray-500 text-center mb-4">
              Location: Kabirpur, Savar, Dhaka
            </p>
            <div className="text-gray-700">
              <p className="font-bold">Project Entity:</p>
              <ul className="list-disc pl-4 ml-4">
                <li>Electrical Safety Consultant</li>
                <li>Fire Safety Consultant</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              SPARKLE KNIT COMPOSITE LTD.
            </h2>
            <p className="text-gray-500 text-center mb-4">
              Location: Kabirpur, Savar, Dhaka
            </p>
            <div className="text-gray-700">
              <p className="font-bold">Project Entity:</p>
              <ul className="list-disc pl-4 ml-4">
                <li>Electrical Safety Consultant</li>
                <li>Fire Safety Consultant</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              SPARKLE KNIT COMPOSITE LTD.
            </h2>
            <p className="text-gray-500 text-center mb-4">
              Location: Kabirpur, Savar, Dhaka
            </p>
            <div className="text-gray-700">
              <p className="font-bold">Project Entity:</p>
              <ul className="list-disc pl-4 ml-4">
                <li>Electrical Safety Consultant</li>
                <li>Fire Safety Consultant</li>
              </ul>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonials;
