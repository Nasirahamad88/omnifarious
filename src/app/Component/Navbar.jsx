"use client"
import Image from 'next/image';
import React from 'react'
import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../../public/Logo.png'
import TopNavbar from './TopNavbar';
import Link from 'next/link';
import MobileNav from './MobileNav';
const Navbar = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen((prevState) => !prevState);
    };

    const handleCloseMobileMenu = () => {
      setMobileMenuOpen(false);
    };
  
  return (
    <section>
      <div
        id="mobile-menu-backdrop"
        className={`fixed top-0 left-0 w-full h-screen bg-black opacity-50 z-[1000] ${
          !mobileMenuOpen && "hidden"
        }`}
        onClick={handleCloseMobileMenu}
      ></div>
      {/* Desktop menu items */}
      {!isMobile && (
        <>
          <div className="fixed top-0 left-0 z-10 w-full">
            <TopNavbar />
            <div
              className="flex  h-16 text-indigo-950 "
              style={{ backgroundColor: "rgba(0, 128, 1, 0.25)" }}
            >
              <nav className="flex items-center mx-auto justify-between">
                <div className="">
                  <Link href="/">
                    <Image src={Logo} alt="logo" height={180} width={250} />
                  </Link>
                </div>

                <div className="flex text-center space-x-1 justify-items-end ">
                  <div className="dropdown dropdown-hover">
                    <h1
                      tabIndex={0}
                      className=" rounded-lg my-1 px-1 text-indigo-950 font-semibold"
                    >
                      Welcome to Omnifarious
                    </h1>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu shadow bg-gray-200 text-black font-bold rounded-box w-52"
                    >
                      <li>
                        <a>Introduction</a>
                      </li>
                      <li>
                        <Link href="/mission-Vision">Mission Vision</Link>
                      </li>
                      <li>
                        <Link href="/ourTeam"> Our Team</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown dropdown-hover ">
                    <div
                      tabIndex={0}
                      className=" text-indigo-950 font-semibold px-1 my-1"
                    >
                      <Link href="/services">Services</Link>
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
                      <li>
                        <a> Organizational Development (OD) </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown dropdown-hover ">
                    <div
                      tabIndex={0}
                      className=" text-indigo-950 font-semibold my-1 px-1 "
                    >
                      Training & Facilitation (T&F)
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
                  <div className="text-indigo-950 font-semibold px-1 my-1">
                    <Link href="/gallery">
                      <div className="hover:text-blue-500 focus:outline-none focus:text-blue-500">
                        Gallery
                      </div>
                    </Link>
                  </div>
                  <div
                    tabIndex={0}
                    className=" text-indigo-950 font-semibold px-1 my-1"
                  >
                    Latest News
                  </div>
                  <div className="dropdown dropdown-hover">
                    <div
                      tabIndex={0}
                      className=" text-indigo-950 font-semibold px-1  my-1"
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
                  <li>
                    <Link href="/contact">
                      <button
                        tabIndex={0}
                        className="font-bold border rounded-lg px-2 py-1   text-indigo-950 bg-green-600 "
                      >
                        <div>Contact Us</div>
                      </button>
                    </Link>
                  </li>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
      {/* Mobile menu items */}
      {isMobile && (
        <div>
          <MobileNav />
        </div>
      )}
    </section>
  );
}

export default Navbar