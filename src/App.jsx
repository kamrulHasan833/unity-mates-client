import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Layouts/Header";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="font-inter">
      <Header />

      <Outlet />
    </div>
  );
}

export default App;
