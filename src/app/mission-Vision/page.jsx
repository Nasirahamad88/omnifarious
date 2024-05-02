import React from "react";
import AllLogo from "../Component/AllLogo";

const MissionVision = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white py-32  md:py-32 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
          <div className="flex flex-col justify-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight py-12 text-black sm:text-4xl">
                Our Mission
              </h2>
              <p className="text-lg leading-8 text-gray-900">
                To make a reputation in this competitive market providing
                quality services in best price, brighten the name of us and our
                clients’ in the global market and sustain with milestone.
              </p>
            </div>
          </div>
          <div className="mt-16 lg:mt-0">
            <div className="text-black">
              <h2 className="text-3xl py-12 font-bold tracking-tight sm:text-4xl">
                Our Vision
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-900">
                To make a reputation at the stage when our name will come first
                with trust and enthusiasm when a service is required by a
                company.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AllLogo></AllLogo>
    </section>
  );
};

export default MissionVision;
