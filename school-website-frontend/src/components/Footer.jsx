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
    <div className="mx-auto space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-20 bg-neutral-100">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="flex gap-6">
          <div>
            <img src={logo} alt="logo" className="w-56 object-contain	" />
          </div>
          <div className="pr-14">
            <div className="font-playfair text-lg font-semibold">
              DBTR National Higher Secondary School
            </div>
            <div className="text-school-blue font-normal">
              Virtuousness is Life
            </div>
            <div className="py-6 font-extralight text-sm">
              Established in 1901, DBTR is situated in the temple town of
              Mayiladuthurai.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
          <div>
            <p className="font-medium text-dark1">QUICK LINKS</p>
            <ul className="mt-6 space-y-4 text-dark2 font-medium">
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
            <p className="font-medium text-dark1">CONTACT</p>

            <ul className="mt-6 space-y-4 text-dark2 font-medium">
              <li>
                <a href="#" className="transition hover:opacity-75">
                  DBTR NHSS, Mahadhana Street, Kamarajar Salai, Mayiladuthurai,
                  Tamilnadu – 609001
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:opacity-75 ">
                  +91.436.422.3272
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:opacity-75 underline">
                  contact@nationalhighschool.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="transition hover:opacity-75 font-playfair text-2xl">
                Big or small, you can make an impact.
              </li>
              <li>
                <a
                  href="#"
                  className="rounded border border-school-red bg-school-red px-10 py-3 text-xl font-medium text-white focus:outline-none focus:ring active:text-school-red flex gap-2 justify-center items-center"
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
        <div className="text-dark1 font-light">
          <div className="flex gap-6">
            <p>&copy; DBTR 2023, All Rights Reserved</p> | <p>Sitemap</p>
          </div>
          <div className=" flex flex-row justify-center items-center gap-4">
            Designed by
            <span className="text-4xl font-extralight">
              DEEPAK M<span className="text-school-red">A</span>RDI
            </span>
          </div>
        </div>
        <div className="flex gap-6 text-school-socials text-2xl">
          <a href="#">
            <FaTwitter className="opacity-40 hover:opacity-100" />
          </a>
          <a href="#">
            <FaLinkedin className="opacity-40 hover:opacity-100" />
          </a>
          <a href="#">
            <FaInstagram className="opacity-40 hover:opacity-100" />
          </a>
          <a href="#">
            <FaFacebook className="opacity-40 hover:opacity-100" />
          </a>
          <a href="#">
            <FaYoutube className="opacity-40 hover:opacity-100" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
