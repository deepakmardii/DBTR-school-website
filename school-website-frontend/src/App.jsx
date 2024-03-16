import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Images } from "./components/Images";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Images />
        <Footer />
      </div>
    </>
  );
}
