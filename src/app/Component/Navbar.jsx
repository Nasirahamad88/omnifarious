"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../../public/Logo.png";
import TopNavbar from "./TopNavbar";
import Link from "next/link";
import MobileNav from "./MobileNav";
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
    <section className="bg-white">
      <div
        id="mobile-menu-backdrop"
        className={`fixed top-0 left-0 w-full h-screen bg-white opacity-50 z-[1000] ${
          !mobileMenuOpen && "hidden"
        }`}
        onClick={handleCloseMobileMenu}
      ></div>
      {/* Desktop menu items */}
      {!isMobile && (
        <>
          <div className="fixed top-0 left-0 z-10 w-full ">
            <TopNavbar />
            <div
              className="flex  h-16 text-indigo-950 bg-green-200 opacity-90"
              
            >
              <nav className="flex items-center justify-between mx-auto md:space-x-10 lg:space-x-40 sm:space-x-8">
                <div className=" ">
                  <Link href="/">
                    <Image src={Logo} alt="logo" height={180} width={180} />
                  </Link>
                </div>

                <div className="flex text-center space-x-3 justify-items-end ">
                  <div className="dropdown dropdown-hover">
                    <h1
                      tabIndex={0}
                      className=" rounded-lg my-1 px-1 text-indigo-950 font-medium"
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
                      <li>
                        <Link href="/aboutus">About Us</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown dropdown-hover ">
                    <div
                      tabIndex={0}
                      className=" text-indigo-950 font-medium px-1 my-1"
                    >
                      <Link href="/services">Services</Link>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 text-black font-bold rounded-box w-64"
                    >
                      <li>
                        <a>Head Hunting & Talent Acquisition</a>
                      </li>
                      <li>
                        <a>Digital Signage & Evacuation Plan</a>
                      </li>
                      <li>
                        <a>Social Compliance</a>
                      </li>
                      <li>
                        <a>Training & Facilitation</a>
                      </li>
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
                        <a>Organizational Capacity Assessment & Development </a>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="dropdown dropdown-hover ">
                    <div
                      tabIndex={0}
                      className=" text-indigo-950 font-medium my-1 px-1 "
                    >
                      Training & Facilitation (T&F)
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 text-black font-bold rounded-box w-52"
                    >
                      <li>
                        <Link href="/training">
                          Onsite (On Customer's Site)
                        </Link>
                      </li>
                      <li>
                        <a> Online Course </a>
                      </li>
                      <li>
                        <a> Own Facility </a>
                      </li>
                    </ul>
                  </div> */}
                  <div className="text-indigo-950 font-medium px-1 my-1">
                    <Link href="/gallery">
                      <div className="hover:text-blue-500 focus:outline-none focus:text-blue-500">
                        Gallery
                      </div>
                    </Link>
                  </div>
                  <div
                    tabIndex={0}
                    className=" text-indigo-950 font-medium px-1 my-1"
                  >
                    <Link href='/news'>Latest News</Link>
                  </div>
                  <div className="dropdown dropdown-hover">
                    <div
                      tabIndex={0}
                      className=" text-indigo-950font-medium px-1  my-1"
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
};

export default Navbar;
