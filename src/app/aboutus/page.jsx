import React from 'react'

import AboutUsSide from '../Component/AboutUs-side';
const AboutUs = () => {
  
    return (
      <section className="bg-white flex md:py-20 lg:py-20 sm:py-7 justify-center items-center ">
        <div className="space-y-8 lg:w-2/3 md:w-2/3 w-full px-5 sm:px-2">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl underline text-black">
            About Us
          </h1>
          <p className="text-sm sm:text-base lg:text-lg">
            Omnifarious Inc. is a total solution for your sustainability
            requirements. It is a collective business platform for the first
            time in Bangladesh with collaboration of reputed and experienced
            organizations for different fields.
            <br />
            We believe sustainability is the core to any business nowadays and
            we are here to ensure sustainability is maintained in your
            organization with our services. Our clients trust us to ensure
            quality, safety, and sustainability in their businesses and to help
            them gain competitive improvement.
            <br />
            Through our global network, local knowledge, and subject-matter
            expertise, we are ideally positioned to provide you with a unique
            collective way of total solution to all your sustainability
            requirements from one platform, Omnifarious Inc. We can help you
            meaningfully demonstrate your commitment to sustainability and
            manage risk and resilience while supporting your ability to operate
            effectively and act responsibly.
          </p>
        </div>

        <div className=" item-start">
          <div className="hidden sm:block   h-[20%] w-[20%] ">
            <AboutUsSide />
          </div>
        </div>
      </section>
    );
}

export default AboutUs