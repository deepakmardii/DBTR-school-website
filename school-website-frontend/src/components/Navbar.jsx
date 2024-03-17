import logo from "../assets/logo.png";
import { Heart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex flex-wrap justify-between px-14 py-2 items-center text-lg">
      <div>
        <img src={logo} alt="logo" className="h-20" />
      </div>
      <ul className="flex gap-10">
        <li>
          <a href="#">The school</a>
        </li>
        <li>
          <a href="#">Academics</a>
        </li>
        <li>
          <a href="#">Life @ DBTR</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>
      <div className="flex gap-10">
        <button className="inline-block rounded border-2 border-school-red px-12 py-3 text-school-red  active:bg-school-red">
          CSR
        </button>
        <button className="rounded border border-school-red bg-school-red px-10 py-3 text-white active:text-school-red flex gap-2 items-center">
          Donate <Heart size={20} fill="white" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
