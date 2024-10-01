import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import { FaBagShopping } from "react-icons/fa6";
import { IoClose, IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  // when scroll apply bg color to navbar
  useEffect(()=>{
    const handleScroll = () =>{
      if (window.scrollY > 50) {
        setIsScrolled(true);
      }
      else{
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return ()=>{
      window.addEventListener('scroll',handleScroll);
    }
  },[]);
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition duration-300 ease-in-out ${isScrolled ? "bg-white shadow-md" : "bg-transparent text-white"}`}
    >
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center px-4 py-6">
        {/* logo */}
        <Link to="/" className="font-bold">
          Logo
        </Link>
        {/* hamburger menu for mobile menu */}
        <div
          onClick={handleClick}
          className="md:hidden text-xl cursor-pointer hover:text-primary"
        >
          {isOpen ? null : <IoMenu />}
        </div>
        {/* desktop menu items */}
        <div className="hidden md:flex">
          <NavItems />
        </div>
        {/* mobile menu items */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            onClick={handleClick}
            className="cursor-pointer absolute top-6 right-4"
          >
            <IoClose className="text-xl" />
          </div>
          <NavItems handleClick={handleClick} />
        </div>
        {/* cart icons */}
        <div className="hidden md:block cursor-pointer relative">
          <FaBagShopping className="text-xl" />
          <sup className="absolute top-0 -right-3 h-5 w-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;