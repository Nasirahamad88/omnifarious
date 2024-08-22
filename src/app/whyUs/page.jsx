import React from "react";
import Image from "next/image";
import Image2 from "../../../public/whyus.jpg";
import Image1 from "../../../public/banner/whyus.png";

const WhyUs = () => {
  return (
    <div className="card w-auto mb-10 bg-slate-700 shadow-xl image-full">
      <figure>
        <Image
          src={Image1}
          className="rounded-t-lg"
          alt="Shoes"
          width={800}
          height={400}
        />
      </figure>
      <div className="card-body p-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <Image
              src={Image2}
              className="w-[50%] mx-auto rounded-xl"
              alt="About"
            />
          </div>
          <div className="md:w-1/2 md:pl-4">
            <div className="text-white pt-12">
              <h1 className="mb-3 text-3xl font-bold">Why Choose Us</h1>
              <p className="mb-3 text-sm md:text-base">
                Expert safety consultancy with comprehensive solutions,
                experienced professionals, and a client-focused approach.
                Trusted by leading companies for cutting-edge safety standards.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
