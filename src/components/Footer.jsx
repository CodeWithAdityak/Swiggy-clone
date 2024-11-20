import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-100 ">
      <div className="w-2/3 mx-auto flex justify-between py-10">
        <div className="footer-logo">
          <img
            src="/SwiggyImages/Group.svg"
            className="w-40"
            alt="Swiggy logo"
          />
          <p className="mt-1">© 2024 Swiggy Limited</p>
        </div>
        <div className="footer-info flex justify-between gap-12">
          <div className="about">
            <div className="footer-about">
              <h2 className="font-bold text-lg mb-3">Company</h2>
            </div>
            <div className="campany">
              <ul className="flex flex-col gap-3 text-gray-600 ">
                <li>
                  <NavLink>
                    <div>About Us</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <div>Swiggy Corporate</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <div>Careers</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <div>Team</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <div>Swiggy One</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <div>Swiggy Instamart</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <div>Swiggy Dineout</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <div>Swiggy Genie</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <div>Minis</div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="ContactUs">
            <div className="first-box mb-14">
              <h2 className="font-bold text-lg mb-3">Contact Us</h2>
              <ul className="flex flex-col gap-3 text-gray-700 font-normal">
                <li>
                  <NavLink>
                    <div>Help & Support</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <div>Partner With Us</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <div>Ride With Us</div>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="second-box">
              <h2 className="font-bold text-lg mb-3">Legal</h2>
              <ul className="flex flex-col gap-3 text-gray-700 font-normal">
                <li>
                  <NavLink>
                    <div>Terms & Conditions</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <div>Cookie Policy</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <div>Privacy Policy</div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="Available">
            <h2 className="font-bold text-lg mb-3">Avaiable in:</h2>
            <ul className="flex flex-col gap-3 text-gray-700 font-normal">
              <li>
                <NavLink>
                  <div>Mumbai</div>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <div>Delhi</div>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <div>Gurugram</div>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <div>Bengaluru</div>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <div>chennai</div>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <div>Kolkata</div>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="LifeSwiggy">
            <div className="firstBox mb-14">
              <h2 className="font-bold text-lg mb-3">Life at Swiggy</h2>
              <ul className="flex flex-col gap-3 text-gray-700 font-normal">
                <li>
                  <NavLink>
                    <div>Explore with Swiggy</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <div>Swiggy News</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <div>Snackables</div>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="socialMedia">
              <h2 className="font-bold text-lg mb-3">Social Links</h2>
              <div className="socialMediaBox">
                <ul className="flex justify-between items-center text-lg">
                  <li>
                    <NavLink
                      to="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="https://www.pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoPinterest />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="download w-[90%] mx-auto py-10 border-t border-black">
        <div className="innerBox w-[90%] mx-auto flex items-center justify-center gap-4">
            <div className="footer-heading ">
                <h2 className="font-bold text-[23px] text-gray-700">For better experience, download the Swiggy app now</h2>
            </div>
            <div className="app flex items-center gap-4">
                <NavLink to="/" className="hover:scale-105">
                    <img src="SwiggyImages/AppStore.png" alt="" />
                </NavLink>
                <NavLink to="www.googleplaystore.com" className="hover:scale-105">
                    <img src="SwiggyImages/GooglePlay.png" alt="" />
                </NavLink>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
