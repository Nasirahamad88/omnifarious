import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Logo1 from "../../../public/alllogo/1.jpeg";
import Logo2 from "../../../public/alllogo/2.png";
import Logo3 from "../../../public/alllogo/3.jpg";
import Logo4 from "../../../public/alllogo/4.jpg";
import Logo6 from "../../../public/alllogo/6.jpg";
import Logo7 from "../../../public/alllogo/7.jpg";
import Logo8 from "../../../public/alllogo/8.jpg";
import Logo9 from "../../../public/alllogo/9.png";
import Logo10 from "../../../public/alllogo/10.png";
import Logo11 from "../../../public/alllogo/11.png";
import Logo12 from "../../../public/alllogo/12.jpg";
import Logo13 from "../../../public/alllogo/13.png";
import Logo14 from "../../../public/alllogo/14.png";
import Logo15 from "../../../public/alllogo/15.JPG";
import Logo16 from "../../../public/alllogo/16.png";
import Logo17 from "../../../public/alllogo/17.jpeg";
import Logo18 from "../../../public/alllogo/18.gif";
import Logo19 from "../../../public/alllogo/19.jpeg";
import Logo20 from "../../../public/alllogo/20.jpeg";
import Logo21 from "../../../public/alllogo/21.png";
import Logo22 from "../../../public/alllogo/22.jpg";
import Logo23 from "../../../public/alllogo/23.jpg";
import Logo24 from "../../../public/alllogo/24.jpg";
import Logo25 from "../../../public/alllogo/25.jpg";
import Logo26 from "../../../public/alllogo/26.jpeg";
import Logo27 from "../../../public/alllogo/27.png";
import Logo28 from "../../../public/alllogo/28.jpg";
import Logo29 from "../../../public/alllogo/29.jpeg";
import Logo30 from "../../../public/alllogo/30.jpg";
import Logo31 from "../../../public/alllogo/31.jpeg";
import Logo32 from "../../../public/alllogo/32.jpg";
import Logo33 from "../../../public/alllogo/33.jpg";
import Logo34 from "../../../public/alllogo/34.png";
import Logo35 from "../../../public/alllogo/35.png";
import Logo36 from "../../../public/alllogo/36.webp";
import Logo37 from "../../../public/alllogo/37.png";
import Logo38 from "../../../public/alllogo/38.png";
import Logo39 from "../../../public/alllogo/39.png";
import Logo40 from "../../../public/alllogo/40.png";
import Logo41 from "../../../public/alllogo/41.png";
import Logo42 from "../../../public/alllogo/42.jpeg";
import Logo43 from "../../../public/alllogo/43.jpg";
import Logo44 from "../../../public/alllogo/44.jpeg";
import Logo45 from "../../../public/alllogo/45.png";
import Logo46 from "../../../public/alllogo/46.png";
import Logo47 from "../../../public/alllogo/47.png";
import Logo48 from "../../../public/alllogo/48.jpeg";
import Logo49 from "../../../public/alllogo/49.jpeg";
import Logo50 from "../../../public/alllogo/50.gif";



const logos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  Logo11,
  Logo12,
  Logo13,
  Logo14,
  Logo15,
  Logo16,
  Logo17,
  Logo18,
  Logo19,
  Logo20,
  Logo21,
  Logo22,
  Logo23,
  Logo24,
  Logo25,
  Logo26,
  Logo27,
  Logo28,
  Logo29,
  Logo30,
  Logo31,
  Logo32,
  Logo33,
  Logo34,
  Logo35,
  Logo36,
  Logo37,
  Logo38,
  Logo39,
  Logo40,
  Logo41,
  Logo42,
  Logo43,
  Logo44,
  Logo45,
  Logo46,
  Logo47,
  Logo48,
  Logo49,
  Logo50,
];

const AllLogo = () => {
  const settings = {
    direction: "left",
    speed: 50,
    pauseOnHover: true,
    gradient: false,
    gradientColor: "#ffffff00",
    gradientWidth: 10,
  };

  return (
    <section className="bg-white py-20">
      <div className="space-x-6 w-[80%] mx-auto">
        <h2 className="pb-10 text-4xl font-bold text-black hover:underline text-center">
          Our Customers
        </h2>
        <Marquee
          {...settings}
          className="flex space-x-4 py-4 bg-gray-100 rounded-lg shadow-lg"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-32 w-32 mx-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-full w-full object-contain rounded-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default AllLogo;
