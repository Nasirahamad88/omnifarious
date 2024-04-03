import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-5 md:p-10 bg-base-200 text-base-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <nav className=" space-x-2">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className=" space-x-2">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>{/* <GoogleMapsLink/> */}</nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join sm:flex flex-col md:flex-row items-center">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item mb-2 md:mb-0 md:mr-2"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
