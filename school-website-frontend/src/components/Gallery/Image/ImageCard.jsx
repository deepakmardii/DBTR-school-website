import React from "react";
import Modal from "../Modal/Modal";
import NCC from "../../../assets/NCC1.png";
import { CiCalendar } from "react-icons/ci";

const ImageCard = () => {
  return (
    <>
      <div className="max-w-md text-dark1 rounded-2xl shadow">
        <a href="#">
          <img className="rounded-t-2xl" src={NCC} alt="asd" />
        </a>
        <div className="p-5 border rounded-b-2xl">
          <h5 className="mb-2 text-2xl font-playfair font-medium">
            NCC (National cadet corps)
          </h5>
          <div className="flex gap-2 items-center">
            <CiCalendar className="text-blue1 text-2xl" />
            <p>26th Jan 2023</p>
          </div>
        </div>
      </div>

      {/* <Modal /> */}
    </>
  );
};

export default ImageCard;
