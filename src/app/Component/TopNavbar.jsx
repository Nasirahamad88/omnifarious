import Link from "next/link";
import React from "react";
import {
  SlSocialFacebook,
  SlSocialLinkedin,
  
} from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

import { LuPhone } from "react-icons/lu";

const TopNavbar = () => {
  return (
    <section className="bg-indigo-50 w-full h-10 z-10 text-black">
      <nav className="md:w-[80%]  lg-w-[80%] sm:w-full mx-auto flex md:justify-between lg-justify-between items-center py-1 justify-between">
        <div className="flex px-2 space-x-5 sm:space-x-2">
          <Link href="www.facebook.com/omnifariousinc " passHref>
            <div target="_blank" rel="noopener noreferrer">
              <SlSocialFacebook />
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/company/omnifariousinc/mycompany/"
            passHref
          >
            <div target="_blank" rel="noopener noreferrer">
              <SlSocialLinkedin />
            </div>
          </Link>
          <Link href="https://wa.me/8801673901414" passHref>
            <div target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </div>
          </Link>
        </div>

        <div className=" font-bold flex">
          <a className="flex items-center sm:space-x-2">
            <LuPhone />
            <p className="white shadow-lg">+880 1316 137842</p>
          </a>
        </div>
      </nav>
    </section>
  );
};

export default TopNavbar;
