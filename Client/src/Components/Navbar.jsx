import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "/src/assets/images/logo.png";
import Footer from "./Footer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="space-y-16">
        <div>
          <nav className="flex items-center justify-between px-4 bg-primary fixed top-0 left-0 right-0 z-20 md:px-6 ">
            <div className="flex items-center gap-2 ">
              <img
                className="w-10 h-10"
                src={logo}
                alt=""
              />
              <h1 className="text-gray-300">Rowgrid</h1>
            </div>

            <div className="flex items-center gap-5">
              <p  className="cursor-pointer text-sm tracking-wide font-semibold border-[0] border-b border-solid hover:text-[#eab308] ">
                <a className="cl no-underline text-gray-300 hover:text-[#eab308]" href="tel:+919645284458">LET'S TALK</a>
              </p>

              <h1
                onClick={openMenu}
                className="cursor-pointer text-gray-300 hover:text-[#eab308] text-sm tracking-wide font-semibold border-[0] border-b border-solid"
              >
                {isOpen ? "CLOSE" : "MENU "}
              </h1>
            </div>
          </nav>
        </div>

        {isOpen && (
          <div className="h-screen bg-primary text-lg flex flex-col justify-center items-center gap-10 fixed top-0 left-0 right-0 z-10">
            <Link to='/' onClick={closeMenu} className="no-underline text-[#B4B4B4]">
              Home
            </Link>
            <Link to='/about' onClick={closeMenu} className="no-underline text-[#B4B4B4]">
              About
            </Link>
            <Link to='/service' onClick={closeMenu} className="no-underline text-[#B4B4B4]">
              Services
            </Link>
            <Link to='/project' onClick={closeMenu} className="no-underline text-[#B4B4B4]">
              Projects
            </Link>
            <Link to='/contact' onClick={closeMenu} className="no-underline text-[#B4B4B4]">
              Contact
            </Link>
          </div>
        )}
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default Navbar;
