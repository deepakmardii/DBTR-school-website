import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Categories from "./components/Gallery/Category/Categories";
import Images from "./components/Gallery/Image/Images";
import { useDispatch } from "react-redux";
import { setImages } from "./feature/slices/imageSlice";
import { setCategories } from "./feature/slices/categoriesSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryRes = await fetch("http://127.0.0.1:1337/api/categories");
        const categoryData = await categoryRes.json();
        console.log(categoryData);
        dispatch(setCategories(categoryData.data));

        const imageRes = await fetch(
          "http://127.0.0.1:1337/api/images?populate=*"
        );
        const imageData = await imageRes.json();
        console.log(imageData);
        dispatch(setImages(imageData.data));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <>
      <div className="font-poppins">
        <Navbar />
        <Hero />
        <div>
          <Categories />
          <Images />
        </div>
        <Footer />
      </div>
    </>
  );
}
