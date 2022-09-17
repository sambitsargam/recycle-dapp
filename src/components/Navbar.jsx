import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="sm:w-10 lg:w-24  cursor-pointer" />
      </div>
      <ul className="text-white lg:text-3xl md:flex hidden  items-center flex-initial">
        <Link to="/">Home</Link>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Link to="/create">Create-waste</Link>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Link to="/explore">Marketplace</Link>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Link to="/about">About</Link>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

        <li className="text-black font-semibold bg-green-300 py-5 px-20 mx-14 rounded-full cursor-pointer hover:bg-green-800 hover:text-white">
          <a href="https://mumbai.polygonscan.com/address/0xc73dc999d4a42e5263ee8b122a7dff20b04ba157" target="_blank" rel="noreferrer">
            Contract Address
          </a>
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Home", "Create Waste", "Explore", "About"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
