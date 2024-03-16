import React from "react";
import logo from "../assets/logo.png";
import { Heart } from "lucide-react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="flex">
          <div>
            <img src={logo} alt="logo" />
          </div>

          <div>
            <div>DBTR National Higher Secondary School</div>
            <div>Virtuousness is Life</div>
            <div>
              Established in 1901, DBTR is situated in the temple town of
              Mayiladuthurai.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
          <div>
            <p className="font-medium">QUICK LINKS</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="transition hover:opacity-75">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:opacity-75">
                  Alumni association
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:opacity-75">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:opacity-75">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Contact</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="transition hover:opacity-75">
                  DBTR NHSS, Mahadhana Street, Kamarajar Salai, Mayiladuthurai,
                  Tamilnadu – 609001
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:opacity-75">
                  +91.436.422.3272
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:opacity-75">
                  contact@nationalhighschool.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="transition hover:opacity-75">
                Big or small, you can make an impact.
              </li>
              <li>
                <a
                  href="#"
                  className="rounded border border-school-red bg-school-red px-10 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:text-school-red flex gap-2 justify-center items-center"
                >
                  Donate <Heart size={16} fill="white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between">
        <div>
          <div className="flex">
            <p>&copy; DBTR 2023, All Rights Reserved</p> | <p>Sitemap</p>
          </div>
          <div>Designed by Deepak Mardi</div>
        </div>
        <div className="flex gap-2">
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
