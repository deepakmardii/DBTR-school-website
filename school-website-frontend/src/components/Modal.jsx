import React, { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, blogs, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  if (!isOpen) return null;

  const currentBlog = blogs[currentIndex];
  const blogImageData = currentBlog.attributes.Img?.data;
  const blogImageURL = blogImageData
    ? `http://127.0.0.1:1337${blogImageData.attributes.url}`
    : "";

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden  bg-black bg-opacity-75">
      <div className="relative w-auto mx-auto max-w-3xl">
        <div className="relative flex flex-col w-full border-0 rounded-lg">
          <div className="flex items-start justify-between">
            <button
              className="bg-transparent border-0 text-white float-right text-3xl"
              onClick={onClose}
              style={{ marginLeft: "auto" }}
            >
              <span className="bg-transparent text-white h-6 w-6 text-5xl block mx-20">
                <IoClose />
              </span>
            </button>
          </div>
          <div className="relative flex-auto p-6 flex flex-col justify-between">
            {blogImageURL && (
              <img
                src={blogImageURL}
                alt={currentBlog.attributes.Title}
                className="rounded-lg m-10"
              />
            )}
            <div className="flex justify-between text-xl text-white mx-10">
              <h3 className="font-playfair text-2xl">
                {currentBlog.attributes.Title}
              </h3>
              <h3>{currentBlog.attributes.date}</h3>
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button onClick={handlePrevClick} className="text-white text-4xl">
                <SlArrowLeft />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button onClick={handleNextClick} className="text-white text-4xl">
                <SlArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
