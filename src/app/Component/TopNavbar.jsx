import Link from "next/link";
import React from "react";
import {
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import { LuPhone } from "react-icons/lu";

const TopNavbar = () => {
  return (
    <section className="bg-indigo-950 w-full h-10 z-10">
      <nav className="md:w-[80%] lg-w-[80%] sm:w-full mx-auto flex md:justify-between lg-justify-between items-center py-1 sm:justify-center">
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
          <Link href="https://twitter.com" passHref>
            <div target="_blank" rel="noopener noreferrer">
              <SlSocialTwitter />
            </div>
          </Link>
        </div>

        <div className=" font-bold flex">
          <a className="flex items-center sm:space-x-2">
            <LuPhone />
            <p className="text-green-800">+880 1621 910 870</p>
          </a>
          {/* <p className="text-green-800 ps-3">
            House 39, Road 13, Sector 13, Uttara Model Town, Dhaka-1230
          </p> */}
        </div>
      </nav>
    </section>
  );
};

export default TopNavbar;
