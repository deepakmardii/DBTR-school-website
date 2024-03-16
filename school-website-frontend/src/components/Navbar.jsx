import logo from "../assets/logo.png";
import { Heart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-14 py-2 items-center">
      <div>
        <img src={logo} alt="logo" className="h-20" />
      </div>
      <ul className="flex gap-10">
        <li>The school</li>
        <li>Academics</li>
        <li>Life @ DBTR</li>
        <li>Contact us</li>
      </ul>
      <div className="flex gap-10">
        <button className="inline-block rounded border border-school-red px-12 py-3 text-sm font-medium text-school-red focus:outline-none focus:ring active:bg-school-red">
          CSR
        </button>
        <button className="rounded border border-school-red bg-school-red px-10 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:text-school-red flex gap-2">
          Donate <Heart size={20} fill="white" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
