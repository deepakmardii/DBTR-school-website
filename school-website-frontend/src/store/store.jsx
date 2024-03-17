import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "../feature/slices/imageSlice";
import categorySlice from "../feature/slices/categoriesSlice";

const store = configureStore({
  reducer: {
    image: imageSlice,
    categories: categorySlice,
  },
});

export default store;
