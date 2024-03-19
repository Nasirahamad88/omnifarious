"use client"
import Image from 'next/image';
import React from 'react'

import Logo from '../../../public/Logo.png'
import TopNavbar from './TopNavbar';
const Navbar = () => {
    
  return (
    <section className="fixed top-0 left-0 z-10 w-full">
      <TopNavbar />
      <div className="flex  h-16    bg-indigo-300 ">
        <nav className="flex w-[98%] items-center mx-auto justify-between">
          {/* <div className="sm:w-96">
          <Image src={Logo} alt="logo" height={180} width={350} />
        </div> */}
          <div className="">
            <Image src={Logo} alt="logo" height={180} width={250} />
          </div>

          <div className="flex text-center space-x-3 justify-items-end ">
            <div className="dropdown dropdown-hover">
              <h1
                tabIndex={0}
                className=" rounded-lg my-1 text-indigo-950 font-semibold"
              >
                Welcome-to-Omnifarious
              </h1>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu shadow bg-gray-200 text-black font-bold rounded-box w-52"
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
            <div className="dropdown dropdown-hover ">
              <div tabIndex={0} className=" text-indigo-950 font-semibold my-1">
                Services
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
            <div className="dropdown dropdown-hover ">
              <div
                tabIndex={0}
                className=" text-indigo-950 font-semibold my-1 "
              >
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
            <div tabIndex={0} className=" text-indigo-950 font-semibold  my-1">
              Gallery
            </div>
            <div tabIndex={0} className=" text-indigo-950 font-semibold  my-1">
              Latest News
            </div>
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                className=" text-indigo-950 font-semibold  my-1"
              >
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
              className="font-bold border rounded-lg px-2 py-1   text-indigo-950 bg-green-800 "
            >
              Contact Us
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar