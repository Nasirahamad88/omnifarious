import Image from "next/image";
import React from "react";
import Image1 from "../../../public/banner/hero3.jpg";
const OurTeam = () => {
  return (
    <section className="bg-white py-28 pt-5 lg:pt-28 md:pt-20 md:flex md:justify-center md:items-center mx-auto space-x-2">
      <div className="ps-20 w-1/2  items-center text-right">
        <h1 className="text-4xl text-black font-bold text-center mb-8">
          Our Team
        </h1>
        <h3 className="text-xl text-center mb-12">MEET THE ENTIRE TEAM</h3>
        <p className="ms-12 font-light justify-end">
          Our team is the heart of our company, a dedicated group of
          professionals who bring their expertise, passion, and commitment to
          every project. We are a diverse team of experienced roofing
          specialists, each with a unique set of skills and a shared dedication
          to providing exceptional service.
        </p>
      </div>
      <div className="md:w-1/2 lg:w-1/2 w-1/2 mx-auto ">
        <div className="flex -mb-12 ms-24">
          <Image
            src={Image1}
            alt="team"
            className=" mask mask-diamond h-44 w-44"
          />
          <Image
            src={Image1}
            alt="team"
            className="mask mask-diamond h-44 w-44"
          />
          <Image
            src={Image1}
            alt="team"
            className="mask mask-diamond h-44 w-44"
          />
        </div>
        <div className="flex">
          <Image
            src={Image1}
            alt="team"
            className="mask mask-diamond h-44 w-44"
          />
          <Image
            src={Image1}
            alt="team"
            className="mask mask-diamond h-44 w-44"
          />
          <Image
            src={Image1}
            alt="team"
            className="mask mask-diamond h-44 w-44"
          />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
