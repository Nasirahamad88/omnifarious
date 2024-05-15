"use client";
import Hero4 from "../../../public/slide/1.png";
import Hero3 from "../../../public/slide/2.png";
import Hero1 from "../../../public/slide/3.png";
import Hero2 from "../../../public/slide/4.png";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const images = [Hero1, Hero2, Hero3, Hero4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideInterval, setSlideInterval] = useState(null);

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
    <section className="pt-24 bg-white">
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
    </section>
  );
};

export default Carousel;
