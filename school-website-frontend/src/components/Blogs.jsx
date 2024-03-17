import React, { useState } from "react";
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const filteredBlogs = useSelector((state) => state.blogs.filteredBlogs);
  const selectedCategoryId = useSelector(
    (state) => state.blogs.selectedCategoryId
  );
  const [visibleBlogs, setVisibleBlogs] = useState([]);
  const [loadMoreCount, setLoadMoreCount] = useState(4);

  const categoryBlogs =
    selectedCategoryId === 1
      ? filteredBlogs
      : filteredBlogs.filter((blog) =>
          blog.attributes.categories.data.some(
            (category) => category.id === selectedCategoryId
          )
        );

  const loadMoreBlogs = () => {
    setLoadMoreCount((prevCount) => prevCount + 4);
  };

  React.useEffect(() => {
    setVisibleBlogs(categoryBlogs.slice(0, loadMoreCount));
  }, [categoryBlogs, loadMoreCount]);

  return (
    <div className="flex flex-col py-10 px-40 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10  justify-items-center ">
        {visibleBlogs.map((blog) => (
          <div
            key={blog.id}
            className="flex justify-center items-center w-full"
          >
            <BlogCard blog={blog} blogs={categoryBlogs} className="w-full" />
          </div>
        ))}
      </div>
      {loadMoreCount < categoryBlogs.length && (
        <div className="flex justify-center mt-8 w-full">
          <button
            onClick={loadMoreBlogs}
            className="inline-block rounded border-2 border-school-red px-12 py-3 text-school-red focus:outline-none focus:ring active:bg-school-red font-semibold"
          >
            View more
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
