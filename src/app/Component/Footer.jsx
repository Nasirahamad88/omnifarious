import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
  <footer className="footer p-6 md:p-12 bg-gray-100 text-gray-800">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Services Section */}
      <nav>
        <h6 className="text-lg font-semibold mb-4">Services</h6>
        <ul>
          <li>
            <a className="link link-hover text-gray-700 hover:text-green-600 transition duration-300">
              Fire Safety
            </a>
          </li>
          <li>
            <a className="link link-hover text-gray-700 hover:text-green-600 transition duration-300">
              Social Compliance
            </a>
          </li>
          <li>
            <a className="link link-hover text-gray-700 hover:text-green-600 transition duration-300">
              Electrical Safety
            </a>
          </li>
          <li>
            <a className="link link-hover text-gray-700 hover:text-green-600 transition duration-300">
              Training Organizer
            </a>
          </li>
        </ul>
      </nav>

      {/* Company Section */}
      <nav>
        <h6 className="text-lg font-semibold mb-4">Company</h6>
        <ul>
          <li>
            <Link
              href="/"
              className="link link-hover text-gray-700 hover:text-green-600 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/aboutUs"
              className="link link-hover text-gray-700 hover:text-green-600 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="link link-hover text-gray-700 hover:text-green-600 transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <a className="link link-hover text-gray-700 hover:text-green-600 transition duration-300">
              Jobs
            </a>
          </li>
        </ul>
      </nav>

      {/* Find Us Section */}
      <div>
        <h6 className="text-lg font-semibold mb-4">Find Us</h6>
        <div>
          <a
            href="https://maps.app.goo.gl/cbNuhnQVguJhLWhj8"
            className="link link-hover text-gray-700 hover:text-green-600 transition duration-300"
          >
            Google Maps Link
          </a>
        </div>
      </div>

      {/* Newsletter Section */}
      <form>
        <h6 className="text-lg font-semibold mb-4">Newsletter</h6>
        <fieldset className="form-control">
          <label className="label">
            <span className="label-text text-gray-600">Enter your email address</span>
          </label>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="username@site.com"
              className="input input-bordered w-full max-w-xs focus:border-green-600"
            />
            <button className="btn btn-primary bg-green-600 hover:bg-green-700 transition duration-300 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  </footer>

  {/* Copyright Section */}
  <div className="border-t py-6 text-center bg-slate-100">
    <p className="text-sm text-gray-500">
      &copy; 2024 Omnifarious Inc. All rights reserved.
    </p>
  </div>
</div>

  );
};

export default Footer;
