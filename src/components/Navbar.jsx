import React from "react";
import { useState } from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import ".././index.css";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [logo, setlogo] = useState(false);

  const handleNav = () => {
    setnav(!nav);
    setlogo(!logo);
  };

  return (
    <div className=" flex w-full justify-between items-center h-20 px-4 absalute z-10">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          TRAVELIGO
        </h1>
      </div>
      <div>
        <ul className="hidden md:flex">
          <li>HOME</li>
          <li>About</li>
          <li>Contact</li>
          <li>Gallery</li>
          <li>Book</li>
        </ul>
      </div>
      <div className="hidden md:flex ">
        <BsPerson size={20} className="mr-2 cursor-pointer" />
        <BsSearch size={20} className="cursor-pointer" />
      </div>
      <div onClick={handleNav} className=" md:hidden z-10">
        {nav ? (
          <AiOutlineClose size={20} className="text-black" />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* here */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absalute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-1 flex flex-col"
            : "hidden md:absolute"
        }
      >
        <ul>
          <h1>Traveligo</h1>
          <li className="border-b ">HOME</li>

          <li className="border-b ">About</li>

          <li className="border-b ">Contact</li>

          <li className="border-b ">Gallery</li>

          <li>Book</li>
          <div className="flex flex-col">
            <button className="my-4">Search</button>
            <button>Account</button>
          </div>
          <div className="absalute left-0 flex p-4 justify-between my-3">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
