"use client";
import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [slideInterval, setSlideInterval] = useState(null);

  useEffect(() => {
    // Fetch images from the API when the component mounts
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        // Map the data to extract imageUrl and title
        const formattedImages = data.map((item) => ({
          url: item.imageUrl,
          title: item.title,
        }));
        setImages(formattedImages);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };

    fetchImages();

    // Set up the automatic slide interval
    const intervalId = setInterval(handleNext, 3000);
    setSlideInterval(intervalId);

    return () => clearInterval(intervalId);
  }, []);

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
    <section className="bg-white py-10 md:py-20">
      <h1 className="text-3xl md:text-4xl text-center py-5 md:py-10 font-bold">
        Gallery
      </h1>
      <div
        id="default-carousel"
        className="relative md:w-[60%] lg:w-[60%] w-[90%] mx-auto h-auto"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative w-full h-80 md:auto lg:h-auto overflow-hidden rounded-lg">
          {/* Carousel items */}
          {images.length > 0 ? (
            images.map((image, index) => (
              <div
                key={index}
                className={`${
                  index === currentIndex ? "" : "hidden"
                } duration-700 ease-in-out`}
                data-carousel-item
              >
                <img
                  src={image.url}
                  className="block w-full h-full object-cover"
                  alt={`Slide ${index + 1}`}
                />
                <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full text-center py-2">
                  {image.title}
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p> // Placeholder while images are loading
          )}
        </div>
        {/* Slider controls */}
        {images.length > 0 && (
          <div className="absolute z-10 bottom-3 md:bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-20 justify-between">
            <button
              type="button"
              className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center focus:outline-none"
              data-carousel-prev
              onClick={handlePrev}
            >
              <FiChevronLeft className="text-gray-600" />
            </button>
            <button
              type="button"
              className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center focus:outline-none"
              data-carousel-next
              onClick={handleNext}
            >
              <FiChevronRight className="text-gray-600" />
            </button>
          </div>
        )}
        {/* Slider indicators */}
        {images.length > 0 && (
          <div className="absolute z-10 bottom-3 md:bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 bg-gray-300 rounded-full focus:outline-none ${
                  index === currentIndex ? "bg-green-700" : ""
                }`}
                aria-current={index === currentIndex ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                onClick={() => handleSlideTo(index)}
              ></button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
