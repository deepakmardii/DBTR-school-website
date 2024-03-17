import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  filteredBlogs: [],
  selectedCategoryId: 1, // Initial category ID
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
      state.filteredBlogs = action.payload;
    },
    filterBlogs: (state, action) => {
      const categoryId = action.payload;
      state.selectedCategoryId = categoryId; // Update selected category ID
      if (categoryId === 1) {
        state.filteredBlogs = state.blogs;
      } else {
        state.filteredBlogs = state.blogs.filter((blog) =>
          blog.attributes.categories.data.some(
            (category) => category.id === categoryId
          )
        );
      }
    },
  },
});

export const { setBlogs, filterBlogs } = blogSlice.actions;
export default blogSlice.reducer;
