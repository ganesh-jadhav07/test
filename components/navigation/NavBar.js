import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavBar() {
  const [nav, setNav] = useState(true);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [opacity, setOpacity] = useState("1");
  const handleNav = () => {
    console.log(nav);
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 500) {
        setOpacity('0.6');
        setColor("#000000");
        setTextColor("#ffffff");
      } else {
        setOpacity('1')
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  });

  return (
    <div
      className="fixed top-0 left-0 z-10 w-full bg-opacity-30"
      style={{ backgroundColor: `${color}`,opacity:`${opacity}` }}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="text-4xl font-bold">
            Bluepineapple
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden lg:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Services</Link>
          </li>
          <li className="p-4">
            <Link href="/#in">Innovation</Link>
          </li>
          <li className="p-4">
            <Link href="/#in">About</Link>
          </li>
          <li className="p-4">
            <Link href="/#in">Careeres</Link>
          </li>
          <li className="p-4">
            <Link href="/#in">Blog</Link>
          </li>
          <li className="p-4">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>

        {/* mobile button */}
        <div onClick={handleNav} className="z-10 block lg:hidden">
          {nav ? (
            <Bars3Icon className="w-10 bg-white" />
          ) : (
            <XMarkIcon className="w-10 bg-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
