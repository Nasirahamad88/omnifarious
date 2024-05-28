import React from 'react'
import Marquee from "react-fast-marquee";
import Logo1 from "../../../public/alllogo/1.jpeg";
import Logo2 from "../../../public/alllogo/2.png";
import Logo3 from "../../../public/alllogo/3.jpg";
import Logo4 from "../../../public/alllogo/4.jpg";
// import Logo5 from "../../../public/alllogo/5.jpg";
import Logo6 from "../../../public/alllogo/6.jpg";
import Logo7 from "../../../public/alllogo/7.jpg";
import Logo8 from "../../../public/alllogo/8.jpg";
import Logo9 from "../../../public/alllogo/9.png";
import Logo10 from "../../../public/alllogo/10.png";
import Logo11 from "../../../public/alllogo/11.png";
import Logo12 from "../../../public/alllogo/12.jpg";
import Logo13 from "../../../public/alllogo/13.png";
import Logo14 from "../../../public/alllogo/14.png";
import Logo16 from "../../../public/alllogo/16.png";
import Logo15 from "../../../public/alllogo/15.JPG";
import Image from 'next/image';

const AllLogo = () => {
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
    <section className='bg-white py-20'>
      <div className="space-x-6  w-[80%] mx-auto">
        <h2 className="pb-10 text-4xl font-bold text-black hover:underline text-center">
          Our Customers
        </h2>
        <Marquee {...settings} className="flex ">
          <Image src={Logo1} className="w-32  px-2 " />
          <Image src={Logo2} className="w-32  px-2" />
          <Image src={Logo3} className="w-32  px-2" />
          <Image src={Logo4} className="w-32  px-2" />
          {/* <Image src={Logo5} className="w-32 rounded-full px-2" /> */}
          <Image src={Logo6} className="w-32  px-2" />
          <Image src={Logo7} className="w-32  px-2" />
          <Image src={Logo8} className="w-32  px-2" />
          <Image src={Logo9} className="w-32  px-2" />
          <Image src={Logo10} className="w-32  px-2" />
          <Image src={Logo11} className="w-32  px-2" />
          <Image src={Logo12} className="w-32  px-2" />
          <Image src={Logo13} className="w-32  px-2" />
          <Image src={Logo14} className="w-32  px-2" />
          <Image src={Logo15} className="w-32  px-2" />
          <Image src={Logo16} className="w-32  px-2" />
        </Marquee>
      </div>
    </section>
  );
}

export default AllLogo