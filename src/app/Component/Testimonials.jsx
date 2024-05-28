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
    <section>
      <div className="bg-white py-10">
        <h1 className=" text-4xl font-bold text-center py-10 text-black">
          Words From Our Partners And Clients
        </h1>
        {/* <button onClick={handleAutoplayToggle}>
        {autoplay ? "Stop Autoplay" : "Start Autoplay"}
      </button> */}
        <Marquee {...settings} className="flex space-x-6">
          <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
            <div className="flex flex-col items-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                SPARKLE KNIT COMPOSITE LTD.
              </h2>
              <p className="text-sm sm:text-base text-gray-700 text-center mb-4">
                "The team provided exceptional consultancy services, ensuring
                our electrical and fire safety measures were top-notch. Their
                professionalism and thorough approach have greatly improved our
                safety standards."
                <br />-  Chief Safety Officer
              </p>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
            <div className="flex flex-col items-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                FASHION POINT LTD.
              </h2>
              <p className="text-sm sm:text-base text-gray-700 text-center mb-4">
                "Their expertise in engineering assessment and fire safety
                consultancy has been invaluable. We are highly satisfied with
                the improvements and the peace of mind it brings to our
                operations."
                <br />- Operations Director
              </p>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
            <div className="flex flex-col items-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                SOUTHERN KNITWEAR LTD.
              </h2>
              <p className="text-sm sm:text-base text-gray-700 text-center mb-4">
                "Thanks to their detailed consultancy on safety systems, our
                facility is now equipped with a robust fire safety and lightning
                protection system. The team's dedication and expertise have been
                outstanding."
                <br />- Plant Manager
              </p>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
            <div className="flex flex-col items-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                MEGHNA SUGAR REFINERY LTD.
              </h2>
              <p className="text-sm sm:text-base text-gray-700 text-center mb-4">
                "Their work on our fire alarm and detection systems was
                exemplary. The efficiency and reliability of the system have
                significantly boosted our safety protocols."
                <br />- Safety Manager
              </p>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
            <div className="flex flex-col items-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                MEGHNA BULK BAG INDUSTRIES LTD.
              </h2>
              <p className="text-sm sm:text-base text-gray-700 text-center mb-4">
                "Their fire alarm and safety design services were top-notch.
                We've noticed a considerable improvement in our safety measures,
                thanks to their thorough and professional approach."
                <br />-Operations Director
              </p>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
            <div className="flex flex-col items-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                ASR SWEATER LTD.
              </h2>
              <p className="text-sm sm:text-base text-gray-700 text-center mb-4">
                "The installation of our fire alarm system and the development
                of a single line diagram were handled expertly. Their attention
                to detail and commitment to safety are truly commendable."
                <br />- Plant Manager
              </p>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
            <div className="flex flex-col items-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                SPARKLE KNIT COMPOSITE LTD.
              </h2>
              <p className="text-sm sm:text-base text-gray-700 text-center mb-4">
                "Their consultancy services have been instrumental in enhancing
                our electrical and fire safety measures. The improvements are
                evident, and we feel much more secure."
                <br />- Chief Safety Officer
              </p>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
            <div className="flex flex-col items-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                LA-MUNI APPARELS LTD. (MAKSONS GROUP)
              </h2>
              <p className="text-sm sm:text-base text-gray-700 text-center mb-4">
                "The team's expertise in fire safety and electrical consultancy
                has greatly benefited our operations. Their dedication and
                professional approach have significantly improved our safety
                culture."
                <br />- Chief Safety Officer
              </p>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
            <div className="flex flex-col items-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                GARDENIA WEARS LTD.
              </h2>
              <p className="text-sm sm:text-base text-gray-700 text-center mb-4">
                "With the assistance of their consultants, we have successfully
                elevated our safety measures to meet international standards.
                Their thoroughness and attention to detail are commendable."
                <br />- Chief Safety Officer
              </p>
            </div>
          </div>
          <div className="container mx-auto px-4 py-8 border shadow-xl rounded-xl">
            <div className="flex flex-col items-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                AXIS KNITWEAR LTD.
              </h2>
              <p className="text-sm sm:text-base text-gray-700 text-center mb-4">
                "The professional consultancy provided for our electrical and
                fire safety needs has made a significant impact on our
                operations. We now have a much safer working environment."
                <br />- Chief Safety Officer
              </p>
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
