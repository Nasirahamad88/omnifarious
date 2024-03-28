import Image from "next/image";
import React from "react";
import Team from "../../../public/team.png";
const OurTeam = () => {
  return (
    <section className="bg-white py-28 pt-5 lg:pt-28 md:pt-20 justify-center">
      <div className="ps-20  items-center text-right">
        <h1 className="text-4xl text-black font-bold text-center mb-8">Team</h1>
        <h3 className="text-xl text-center mb-12">MEET THE CORE TEAM</h3>
      </div>
      <Image src={Team} alt="team" className="w-[85%] mx-auto" />
      {/* <div className="md:w-1/2 lg:w-1/2 w-1/2 mx-auto ">
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
      </div> */}
    </section>
  );
};

export default OurTeam;
