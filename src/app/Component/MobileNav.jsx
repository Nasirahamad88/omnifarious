import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io"; // Import close icon
import Logo from "../../../public/Logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-full">
      <div className="bg-indigo-300 flex justify-between items-center h-16">
        <div className="pl-4">
          <Link href="/">
            <div>
              <Image src={Logo} alt="logo" height={180} width={250} />
            </div>
          </Link>
        </div>
        <div className="pr-4">
          {mobileMenuOpen ? (
            <IoMdClose
              className="text-black text-3xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
          ) : (
            <FaBars
              className="text-black text-3xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="bg-indigo-300">
          <ul className="menu bg-white w-full rounded-box">
            <li>
              <h1 className="rounded-lg my-1 px-1 text-indigo-950 font-semibold">
                Welcome to Omnifarious
              </h1>
            </li>
            <li>
              <Link href="/services">
                <div
                  onClick={handleCloseMobileMenu}
                  className="text-indigo-950 font-semibold px-1 my-1"
                >
                  Services
                </div>
              </Link>
              <ul className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 text-black font-bold rounded-box w-64">
                <li>
                  <a>Consultancy Services</a>
                </li>
                <li>
                  <a>Research & Analysis</a>
                </li>
                <li>
                  <a>Environmental Services</a>
                </li>
                {/* Add other service items */}
              </ul>
            </li>
            <li>
              <Link href="/gallery">
                <div
                  onClick={handleCloseMobileMenu}
                  className="text-indigo-950 font-semibold px-1 my-1 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                >
                  Gallery
                </div>
              </Link>
            </li>
            <li>
              <a className="text-indigo-950 font-semibold px-1 my-1">
                Latest News
              </a>
            </li>
            <li>
              <a
                className="text-indigo-950 font-semibold px-1 my-1 dropdown-hover"
                onClick={handleCloseMobileMenu}
              >
                Request Quotation
              </a>
              <ul className="dropdown-content z-[1] menu p-2 shadow bg-gray-100 text-black font-bold rounded-box w-52">
                <li>
                  <a>For Consultancy Services</a>
                </li>
                <li>
                  <a>For Engineering Services</a>
                </li>
                {/* Add other quotation items */}
              </ul>
            </li>
            <li>
              <Link href="/contact">
                <button
                  onClick={handleCloseMobileMenu}
                  className="font-bold border rounded-lg px-2 py-1 text-indigo-950 bg-green-800 focus:outline-none"
                >
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
