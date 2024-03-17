import React from "react";

const Category = () => {
  return (
    <div>
      <div className="group inline-block rounded-full bg-pill-border hover:bg-blue1 p-[2px] focus:outline-none focus:ring active:text-opacity-75 cursor-pointer">
        <span className="block rounded-full px-8 py-3 text-sm font-medium group-hover:bg-blue1 bg-pill-bg text-pill-text hover:text-white">
          Category
        </span>
      </div>
    </div>
  );
};

export default Category;
