import React from 'react';
import Marquee from 'react-fast-marquee';


const AboutUsSide = () => {
  const settings = {
    direction: "up",
    
  };

  return (
    <Marquee
      {...settings}
      className=" space-y-0 mx-auto bg-green-600 text-white rounded-xl "
    >
      <div className="  text-center mx-auto">
        <div>
          <p className="my-1">OHS Risk Assessment and Management</p>
          <p className="my-1">Effective Grievance Management</p>
          <p className="mx-1">Fire Safety</p>
          <p className="mx-1">5s Training</p>
          <p className="mx-1">Lean Manufacturing</p>
          <p className="mx-1">Leadership and Communication Skills</p>
          <p className="mx-1">Chemical Safety and Management</p>
          <p className="mx-1">Job Knowledge and Motivational Aspects</p>
          <p className="mx-1">Legal Rights and Responsibilities</p>
          <p className="mx-1">Stress/anger Management</p>
          <p className="mx-1">Environmental Sustainability and Management</p>
          <p className="mx-1">Productivity</p>
          <p className="mx-1">Supply Chain Management</p>
          <p className="mx-1">Quality Management</p>
          <p className="mx-1">COC</p>
        </div>
      </div>
    </Marquee>
  );
}

export default AboutUsSide;
