import React from "react";
import Image from "next/image";
import Image1 from "../../../public/banner/whyus.png";
import Image2 from "../../../public/banner/about1.jpg"
const WhyUs = () => {
    return (
      <div className="card w-auto mb-10 bg-slate-700 shadow-xl image-full h-80">
        <figure>
          <Image src={Image1} className=" rounded-lg" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex">
            <div className="w-1/2">
              <Image src={Image2} className="w-[50%] mx-auto rounded-xl " />
            </div>
            <div className="w-1/2">
              {/* <h2 className="card-title">Shoes!</h2> */}
              <div className="text-white w-1/2">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi.
                  <br />
                  In deleniti eaque aut repudiandae et a id nisi.
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
