"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Hero1 from "../../../public/slide/1.png";
import Hero2 from "../../../public/slide/2.png";
import Hero3 from "../../../public/slide/3.png";
import Hero4 from "../../../public/slide/4.png";
import Hero5 from "../../../public/slide/5.png";

const Carousel = () => {
  const images = [Hero1, Hero2, Hero3, Hero4, Hero5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="sm:pt-28 mt-1  bg-white">
      <div className="carousel w-full relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item relative w-full ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <div className="relative w-auto">
              <Image src={image} className="w-full" alt="Hero Image" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-100"></div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 sm:left-10 sm:right-10 md:left-20 md:right-20">
              <button className=" hover:slate-300 w-[20%]" onClick={handlePrev}>
                ❮
              </button>
              <button className="hover:slate-300 w-[20%]" onClick={handleNext}>
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
