import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../feature/slices/blogSlice";
import categorySlice from "../feature/slices/categorySlice";

const store = configureStore({
  reducer: {
    blogs: blogSlice,
    categories: categorySlice,
  },
});

export default store;
