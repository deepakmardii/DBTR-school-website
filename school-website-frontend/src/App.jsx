import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Categories from "./components/Gallery/Category/Categories";
import Images from "./components/Gallery/Image/Images";

export default function App() {
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
