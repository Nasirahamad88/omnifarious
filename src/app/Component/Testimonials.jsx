import Image from "next/image";
import React from "react";
import Image1 from "../../../public/banner/whyus.png";
import Image2 from "../../../public/banner/about1.jpg";
import Image3 from "../../../public/banner/about1.jpg";
import Image4 from "../../../public/banner/about1.jpg";

const Testimonials = () => {
  return (
    <section className="bg-white py-20 ">
      <div className="flex flex-col justify-center items-center text-center py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Testimonials</h1>
        <p className="text-xl text-gray-500">People Love Us</p>
      </div>

      <div className="carousel w-full">
        <div
          id="item1"
          className="carousel-item w-full flex justify-center items-center"
        >
          <div className="text-center">
            <Image
              src={Image1}
              alt="Testimonial 1"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-full"
            />
            <p className="text-gray-700">
              "Very happy with the service. They were professional, efficient,
              and delivered high-quality work."
            </p>
            <h4 className="text-lg font-bold">John Doe</h4>
            <span className="text-gray-500 block">CEO, Company Name</span>
          </div>
        </div>
        <div
          id="item2"
          className="carousel-item w-full flex justify-center items-center"
        >
          <div className="text-center">
            <Image
              src={Image2}
              alt="Testimonial 2"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-full"
            />
            <p className="text-gray-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <h4 className="text-lg font-bold">Jane Smith</h4>
            <span className="text-gray-500 block">CTO, Another Company</span>
          </div>
        </div>
        <div
          id="item3"
          className="carousel-item w-full flex justify-center items-center"
        >
          <div className="text-center">
            <Image
              src={Image3}
              alt="Testimonial 3"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-full"
            />
            <p className="text-gray-700">
              "Another testimonial content goes here."
            </p>
            <h4 className="text-lg font-bold">Another Person</h4>
            <span className="text-gray-500 block">Position, Company</span>
          </div>
        </div>
        <div
          id="item4"
          className="carousel-item w-full flex justify-center items-center"
        >
          <div className="text-center">
            <Image
              src={Image4}
              alt="Testimonial 4"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-full"
            />
            <p className="text-gray-700">"Yet another testimonial content."</p>
            <h4 className="text-lg font-bold">Testimonial Person</h4>
            <span className="text-gray-500 block">Role, Company</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          *
        </a>
        <a href="#item2" className="btn btn-xs">
          *
        </a>
        <a href="#item3" className="btn btn-xs">
          *
        </a>
        <a href="#item4" className="btn btn-xs">
          *
        </a>
        <a href="#item1" className="btn btn-xs">
          *
        </a>
        <a href="#item2" className="btn btn-xs">
          *
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
