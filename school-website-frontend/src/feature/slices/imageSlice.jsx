import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
      state.filteredImages = action.payload;
    },
  },
});

export const { setImages } = imageSlice.actions;
export default imageSlice.reducer;
