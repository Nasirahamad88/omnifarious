import Image from 'next/image';
import React from 'react'
import Image1 from '../../../public/banner/hero2.jpg'
const AboutUs = () => {
    return (
      <section className="bg-white flex py-20 justify-center items-center">
        <div className="">
          <Image
            src={Image1}
            alt="about"
            className="w-[50%] mx-auto pt-20 rounded-full border-8 border-blue-400"
          />
        </div>
        <div className=" space-y-8 ">
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
      </section>
    );
}

export default AboutUs