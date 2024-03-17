import React, { useState, useEffect } from "react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
      <div className="relative w-auto mx-auto max-w-3xl">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
            <h3 className="text-3xl font-semibold">
              {currentBlog.attributes.Title}
            </h3>
            <button
              className="bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <div className="relative flex-auto p-6">
            {blogImageURL && (
              <img src={blogImageURL} alt={currentBlog.attributes.Title} />
            )}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
              <button
                onClick={handlePrevClick}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
              >
                &#8249;
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <button
                onClick={handleNextClick}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
