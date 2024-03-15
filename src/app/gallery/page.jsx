import Image from "next/image";
import Image1 from "../../../public/gallery/1.jpg";
import Image2 from "../../../public/gallery/1 (3).jpg";
import Image3 from "../../../public/gallery/1 (4).jpg";
import Image4 from "../../../public/gallery/1 (5).jpg";
import Image5 from "../../../public/gallery/1 (6).jpg";
import Image6 from "../../../public/gallery/1 (9).jpg";



import React from 'react'

const Gallery = () => {
  return (
    <div className="bg-white ">
      <div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>

          <p className="text-xl text-gray-500 text-center mb-4">
            WE HAVE THE BEST CAR IMAGES
          </p>
        </div>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image2}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image3}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image4}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image5}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery


