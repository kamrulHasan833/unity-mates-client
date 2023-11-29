import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Layouts/Header";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "./Layouts/Footer";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="font-inter">
      <Header />

      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
