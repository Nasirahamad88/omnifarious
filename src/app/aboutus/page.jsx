import React from 'react'

import AboutUsSide from '../Component/AboutUs-side';
import Image from 'next/image';
import Earth from '../../../public/earth.jpg'
const AboutUs = () => {
  
    return (
      <section className="bg-white flex md:py-20 lg:py-20 sm:py-7 justify-between">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 items-center lg:items-start w-full px-5 sm:px-2">
          <div className="space-y-6 lg:w-2/3 w-full">
            <h1 className="font-bold text-xl ps-4 sm:text-2xl lg:text-3xl underline text-black ">
              About Us
            </h1>
            <p className="text-xs sm:text-sm lg:text-lg leading-relaxed ps-4 text-gray-700">
              Omnifarious Inc. is a total solution for your sustainability
              requirements. It is a collective business platform for the first
              time in Bangladesh with collaboration of reputed and experienced
              organizations for different fields.
              
              We believe sustainability is the core to any business nowadays and
              we are here to ensure sustainability is maintained in your
              organization with our services. Our clients trust us to ensure
              quality, safety, and sustainability in their businesses and to
              help them gain competitive improvement.
              
              Through our global network, local knowledge, and subject-matter
              expertise, we are ideally positioned to provide you with a unique
              collective way of total solution to all your sustainability
              requirements from one platform, Omnifarious Inc. We can help you
              meaningfully demonstrate your commitment to sustainability and
              manage risk and resilience while supporting your ability to
              operate effectively and act responsibly.
            </p>
          </div>
          <div className="lg:w-1/3 w-full">
            <Image
              src={Earth}
              alt="About Us Image"
              className="w-full h-auto rounded-lg shadow-lg "
            />
          </div>
        </div>

        {/* <div className=" item-start">
          <div className="hidden sm:block   h-[20%] w-[20%] ">
            <AboutUsSide />
          </div>
        </div> */}
      </section>
    );
}

export default AboutUs