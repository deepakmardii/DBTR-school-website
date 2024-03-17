import React, { useState } from "react";
import Modal from "./Modal";
import { CiCalendar } from "react-icons/ci";

const BlogCard = ({ blog, blogs }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const blogImageData = blog.attributes.Img?.data;
  const blogImageURL = blogImageData
    ? `http://127.0.0.1:1337${blogImageData.attributes.url}`
    : "";
  const initialIndex = blogs.findIndex((b) => b.id === blog.id);

  return (
    <>
      <div
        className="w-full text-dark1 rounded-2xl shadow cursor-pointer flex flex-col"
        onClick={handleModalOpen}
      >
        <div className="h-[50vh] w-full">
          {blogImageURL && (
            <img
              className="rounded-t-2xl object-cover object-center w-full h-full"
              src={blogImageURL}
              alt={blog.attributes.Title}
            />
          )}
        </div>
        <div className="p-5 border rounded-b-2xl flex flex-col ">
          <h5 className="mb-2 text-2xl font-playfair font-medium">
            {blog.attributes.Title}
          </h5>
          <div className="flex gap-2 items-center">
            <CiCalendar className="text-blue1 text-2xl" />
            <p className="text-base font-normal">
              {blog.attributes.publishedAt}
            </p>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        blogs={blogs}
        initialIndex={initialIndex}
      />
    </>
  );
};

export default BlogCard;
