import React from "react";

const Category = ({ cat, onCategoryClick, isSelected }) => {
  const handleClick = () => {
    onCategoryClick(cat.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`rounded-full ${
        isSelected
          ? "bg-blue1 hover:bg-blue1 text-white"
          : "bg-pill-border hover:bg-blue1 cursor-pointer"
      }  focus:outline-none focus:ring active:text-opacity-75`}
    >
      <span
        className={`block rounded-full px-8 py-3 text-sm font-medium ${
          isSelected
            ? "bg-blue1"
            : "bg-pill-bg text-pill-text hover:text-white hover:bg-blue1"
        }`}
      >
        {cat.attributes.Title}
      </span>
    </div>
  );
};

export default Category;
