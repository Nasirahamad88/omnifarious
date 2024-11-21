import Image from "next/image";
import React from "react";
import Team from "../../../public/Team.png";

const OurTeam = () => {
  return (
    <section className="bg-white py-10 md:py-28 pt-5 lg:pt-28 justify-center">
      <div className="px-4 md:px-20 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-8">
          Organization Chart
        </h1>
        <h3 className="text-lg md:text-xl mb-8">MEET THE CORE TEAM</h3>
      </div>
      <div className="w-11/12 mx-auto">
        <Image src={Team} alt="team" className="w-full" />
      </div>
    </section>
  );
};

export default OurTeam

