import { useLocation } from "react-router-dom";
import HeroSlider from "../Components/Sections/HeroSlider";
import Navbar from "../Components/Sections/Navbar";

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <header>
      <Navbar />
      {isHome && <HeroSlider />}
    </header>
  );
};

export default Header;
