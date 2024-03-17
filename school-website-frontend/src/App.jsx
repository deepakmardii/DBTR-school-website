import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Blogs from "./components/Blogs";
import Categories from "./components/Categories";
import { setBlogs } from "./feature/slices/blogSlice";
import { setCategories } from "./feature/slices/categorySlice";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryRes = await fetch("http://127.0.0.1:1337/api/categories");
        const categoryData = await categoryRes.json();
        dispatch(setCategories(categoryData.data));

        const blogRes = await fetch(
          "http://127.0.0.1:1337/api/blogs?populate=*"
        );
        const blogData = await blogRes.json();
        dispatch(setBlogs(blogData.data));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Blogs />
      <Footer />
    </>
  );
};

export default App;
