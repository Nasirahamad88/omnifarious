"use client"
import React, { useRef, useState, useEffect } from "react";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
const [slideInterval, setSlideInterval] = useState(null);
  
  useEffect(() => {
    if (slideInterval) clearInterval(slideInterval);
    setSlideInterval(setInterval(handleNext, 2500));
    return () => clearInterval(slideInterval);
  }, [slideInterval]);

  const images = [
    "/gallery/1.jpg",
    "/gallery/1 (3).jpg",
    "/gallery/1 (4).jpg",
    "/gallery/1 (5).jpg",
    "/gallery/1 (6).jpg",
    "/gallery/1 (9).jpg",
  ];

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

  const handleSlideTo = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white py-20">
      <h1 className=" text-4xl text-center py-10 font-bold">Gallery</h1>
      <div
        id="default-carousel"
        className="relative w-[60%] mx-auto h-auto"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div
          className="relative h-auto overflow-hidden rounded-lg md:h-96"
          ref={carouselRef}
        >
          {/* Carousel items */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`${
                index === currentIndex ? "" : "hidden"
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              <img
                src={image}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-900" : ""
              }`}
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleSlideTo(index)}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrev}
        >
          <h1 className=" text-3xl">
            <FiArrowLeftCircle />
          </h1>
          {/* Previous button content */}
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNext}
        >
          <h1 className=" text-3xl">
            <FiArrowRightCircle />
          </h1>
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
