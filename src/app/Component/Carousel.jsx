"use client"

import Hero1 from "../../../public/slide/1.png";
import Hero2 from "../../../public/slide/2.png";
import Hero3 from "../../../public/slide/3.png";
import Hero4 from "../../../public/slide/4.png";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const images = ["1.png", "2.png", "3.png", "4.png"];


  
  const Carousel = () => {
    const carouselRef = useRef(0);

    useEffect(() => {
      const slideCarousel = () => {
        const carouselItems =
          carouselRef.current.querySelectorAll(".carousel-item");
        let currentIndex = 0;
        const nextIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.remove("active");
        carouselItems[nextIndex].classList.add("active");
        currentIndex = nextIndex;
      };

      const intervalId = setInterval(slideCarousel, 1000); // Change interval duration to 2000ms (2 seconds)

      return () => clearInterval(intervalId);
    }, [""]);

    return (
      <div className="carousel w-full" ref={carouselRef}>
        <div id="slide1" className="carousel-item relative w-full active">
          {/* <Image src={Hero1} className="w-auto  shadow" /> */}
          <div className="relative w-auto">
            <Image src={Hero1} className="w-full" alt="Hero Image" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-100"></div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="relative w-auto">
            <Image src={Hero2} className="w-full" alt="Hero Image" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-100"></div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="relative w-auto">
            <Image src={Hero3} className="w-full" alt="Hero Image" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-100"></div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="relative w-auto">
            <Image src={Hero4} className="w-full" alt="Hero Image" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-100"></div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
  };

export default Carousel;
