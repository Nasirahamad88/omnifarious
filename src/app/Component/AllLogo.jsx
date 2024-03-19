import React from 'react'
import Marquee from "react-fast-marquee";
import Logo1 from '../../../public/alllogo/1.png'
import Logo2 from '../../../public/alllogo/2.png'
import Logo3 from '../../../public/alllogo/3.png'
import Logo4 from '../../../public/alllogo/4.png'
import Logo5 from '../../../public/alllogo/5.png'
import Logo6 from '../../../public/alllogo/6.png'
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
    <div className="space-x-6 bg-white py-20">
      <h2 className="pb-10 text-4xl font-bold text-black hover:underline text-center">
        Significant Works
      </h2>
      <Marquee {...settings} className="flex ">
        <Image src={Logo1} className="w-32 rounded-full px-2" />
        <Image src={Logo2} className="w-32 rounded-full px-2" />
        <Image src={Logo3} className="w-32 rounded-full px-2" />
        <Image src={Logo4} className="w-32 rounded-full px-2" />
        <Image src={Logo5} className="w-32 rounded-full px-2" />
        <Image src={Logo6} className="w-32 rounded-full px-2" />
        <Image src={Logo1} className="w-32 rounded-full px-2" />
        <Image src={Logo2} className="w-32 rounded-full px-2" />
        <Image src={Logo3} className="w-32 rounded-full px-2" />
        <Image src={Logo4} className="w-32 rounded-full px-2" />
        <Image src={Logo5} className="w-32 rounded-full px-2" />
        <Image src={Logo6} className="w-32 rounded-full px-2" />
      </Marquee>
    </div>
  );
}

export default AllLogo