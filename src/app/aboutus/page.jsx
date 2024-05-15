import React from 'react'
import Marquee from 'react-fast-marquee';
import AboutUsSide from '../Component/AboutUs-side';
const AboutUs = () => {
  
    return (
      <section className="bg-white flex py-20 justify-center items-center ">
        <div className=" space-y-8 lg:w-2/3 md:w-2/3 w-2/3 px-5">
          <h1 className=" font-bold text-4xl underline  text-black">
            About Us
          </h1>
          <p>
            Omnifarious Inc. is a total solution for your sustainability
            requirements. It is a collective business platform for the first
            time in Bangladesh with collaboration of reputed and experienced
            organizations for different fields.
            <br />
            We belief sustainability is the core to any business nowadays and we
            are to ensure sustainability is maintained in your organization with
            our services. Our clients trust us to ensure quality, safety and
            sustainability in their businesses and to help them gain competitive
            improvement.
            <br />
            Through our global network, local knowledge and subject -matter
            expertise we are ideally positioned to provide you with an unique
            collective way of total solution to your all sustainability
            requirements from one platform i.e Omnifarious Inc. We can help you
            to meaningfully demonstrate your commitment to sustainability and
            manage risk and resilience, whilst supporting your ability to
            operate effectively and act responsibly
          </p>
        </div>
        <div className=" item-start">
          <div className="  h-[20%] w-[20%] ">
            <AboutUsSide/>
          </div>
        </div>
      </section>
    );
}

export default AboutUs