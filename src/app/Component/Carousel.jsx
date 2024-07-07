"use client";
// import Hero4 from "../../../public/slide/1.png";
import Hero3 from "../../../public/slide/2.png";
import Hero1 from "../../../public/slide/3.png";
// import Hero2 from "../../../public/slide/4.png";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const images = [Hero1, Hero3,];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideInterval, setSlideInterval] = useState(null);
// useEffect(() => {
//   import("flowbite");
// }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    setSlideInterval(interval);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className=" bg-white">
      <div className="carousel w-full relative">
        {images.map((image, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className={`carousel-item relative w-full ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <div className="relative w-auto">
              <Image src={image} className="w-full" alt="Hero Image" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-100"></div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 sm:left-10 sm:right-10 md:left-20 md:right-20">
              <a
                href={`#slide${
                  ((index + images.length - 1) % images.length) + 1
                }`}
                className="btn btn-circle bg-white"
                onClick={handlePrev}
              >
                ❮
              </a>
              <a
                href={`#slide${
                  ((index + images.length + 1) % images.length) + 1
                }`}
                className="btn btn-circle bg-white"
                onClick={handleNext}
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="max-w-2xl mx-auto">
        <div id="default-carousel" className="relative" data-carousel="static">
          <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                First Slide
              </span>
              <div className="relative w-auto">
                <Image src={Hero1} className="w-full" alt="Hero1 Image" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-100"></div>
              </div>
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="relative w-auto">
                <Image src={Hero3} className="w-full" alt="Hero3 Image" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-100"></div>
              </div>
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <div className="relative w-auto">
              <Image src={Hero1} className="w-full" alt="Hero1 Image" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-100"></div>
            </div>
            </div>
          </div>
          <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div>
          <button
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
        
      </div> */}
    </section>
  );
};

export default Carousel;
