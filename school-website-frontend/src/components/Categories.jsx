import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "./Category";
import { filterBlogs } from "../feature/slices/blogSlice";

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const selectedCategoryId = useSelector(
    (state) => state.blogs.selectedCategoryId
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterBlogs(selectedCategoryId));
  }, [dispatch, selectedCategoryId]);

  const handleCategoryClick = (categoryId) => {
    dispatch(filterBlogs(categoryId));
  };

  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category) => (
        <div key={category.id}>
          <Category
            cat={category}
            onCategoryClick={handleCategoryClick}
            isSelected={category.id === selectedCategoryId}
          />
        </div>
      ))}
    </div>
  );
};

export default Categories;
