import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import NavItem from "../Shared/NavItem";
import SectionWrapper from "../Shared/SectionWrapper";
const Navbar = () => {
  const items = (
    <>
      <NavItem path="/" name="Home" />
      <NavItem path="/biodatas" name="Biodatas" />
      <NavItem path="/about" name="About" />
      <NavItem path="/contact-us" name="Contact Us" />
      <NavItem path="/dashboard" name="dashboard" />
    </>
  );
  return (
    <SectionWrapper>
      <div className="navbar bg-transparent px-0 items-center py-2 md:py-4">
        <div className="navbar-start">
          <div className="dropdown  lg:hidden">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="drawer-button">
                  <HiBars3 className="text-2xl md:text-3xl cursor-pointer" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  {items}
                </ul>
              </div>
            </div>
          </div>
          <Link className="btn btn-ghost text-xl">
            <img
              src="https://i.ibb.co/QcmSdYT/logo.png"
              alt="Unit Mates"
              className="max-w-[150px] w-full"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">{items}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Navbar;
