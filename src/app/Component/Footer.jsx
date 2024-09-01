import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-5 md:p-10 bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <nav>
            <h6 className="text-lg font-bold mb-4">Services</h6>
            <ul>
              <li>
                <a className="link link-hover hover:text-blue-600 transition duration-200">
                  Fire Safety
                </a>
              </li>
              <li>
                <a className="link link-hover hover:text-blue-600 transition duration-200">
                  Social Compliance
                </a>
              </li>
              <li>
                <a className="link link-hover hover:text-blue-600 transition duration-200">
                  Electrical Safety
                </a>
              </li>
              <li>
                <a className="link link-hover hover:text-blue-600 transition duration-200">
                  Training Organizer
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h6 className="text-lg font-bold mb-4">Company</h6>
            <ul>
              <li>
                <Link
                  href="/"
                  className="link link-hover hover:text-blue-600 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutUs"
                  className="link link-hover hover:text-blue-600 transition duration-200"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="link link-hover hover:text-blue-600 transition duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a className="link link-hover hover:text-blue-600 transition duration-200">
                  Jobs
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h6 className="text-lg font-bold mb-4">Find Us</h6>
           
              <div>
                <div
                  href="#"
                  className="link link-hover hover:text-blue-600 transition duration-200"
                >
                  <Link href="https://maps.app.goo.gl/cbNuhnQVguJhLWhj8">
                    
                    Google Maps Link
                  </Link>
                </div>
              </div>
              
            
          </div>
          <form>
            <h6 className="text-lg font-bold mb-4">Newsletter</h6>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="username@site.com"
                  className="input input-bordered w-full max-w-xs"
                />
                <button className="btn btn-primary bg-green-600">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="border-t mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2024 Omnifarious Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
