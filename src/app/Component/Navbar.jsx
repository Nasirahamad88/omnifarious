"use client"
import Image from 'next/image';
import React from 'react'

import Logo from '../../../public/Logo.png'
const Navbar = () => {
    
  return (
    <div className="flex bg-blue-300 h-16 fixed top-0 left-0 w-full z-10 ">
      <nav className="flex w-[80%] mx-auto items-center justify-between ">
        <div>
          <Image src={Logo} alt="logo" height={180} width={180} />
        </div>
        <div className="flex space-x-3">
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              className=" text-black md:font-bold hover:bg-blue-400 rounded-lg m-1"
            >
              Welcome to Omnifarious
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-200 text-black font-bold rounded-box w-52"
            >
              <li>
                <a>Introduction</a>
              </li>
              <li>
                <a> Mission Vision</a>
              </li>
              <li>
                <a> Our Team</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} className=" text-black font-bold  m-1">
              Our Services
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 text-black font-bold rounded-box w-64"
            >
              <li>
                <a>Consultancy Services</a>
              </li>
              <li>
                <a> Research & Analysis </a>
              </li>
              <li>
                <a> Environmental Services </a>
              </li>
              <li>
                <a> Energy Assessment </a>
              </li>
              <li>
                <a> Calibration of Machines </a>
              </li>
              <li>
                <a> Safety Audit Services & Consultancy </a>
              </li>
              <li>
                <a> Structural Engineering & Consultancy Services </a>
              </li>
              <li>
                <a> Fire Safety Engineering & Consultancy Services </a>
              </li>
              <li>
                <a> Electrical Engineering & Consultancy Services </a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} className=" text-black font-bold  m-1">
              Training & Workshop
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 text-black font-bold rounded-box w-52"
            >
              <li>
                <a>Onsite (On Customer's Site)</a>
              </li>
              <li>
                <a> Online Course </a>
              </li>
              <li>
                <a> Own Facility </a>
              </li>
            </ul>
          </div>
          <div tabIndex={0} className=" text-black font-bold  m-1">
            Gallery
          </div>
          <div tabIndex={0} className=" text-black font-bold  m-1">
            Latest News
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} className=" text-black font-extrabold  m-1">
              Request Quotation
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 text-black font-bold rounded-box w-52"
            >
              <li>
                <a>For Consultancy Services </a>
              </li>
              <li>
                <a> For Engineering Services </a>
              </li>
              <li>
                <a> For Environmental Services </a>
              </li>
              <li>
                <a> For Calibration Services </a>
              </li>
              <li>
                <a> For Supply Services </a>
              </li>
            </ul>
          </div>
          <div
            tabIndex={0}
            className=" text-black font-bold bg-blue-500 rounded-lg px-2 py-1  m-1"
          >
            Contact Us
          </div>
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar