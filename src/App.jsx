import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Layouts/Header";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="font-inter">
      <Header />
    </div>
  );
}

export default App;
