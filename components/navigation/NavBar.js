import React, { useState, useEffect } from "react";
import logo from "../../public/images/bp.png";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Image from "next/image";

function NavBar() {
  const route = useRouter();
  console.log(route);

  const [nav, setNav] = useState(true);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [opacity, setOpacity] = useState("1");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 500) {
        setOpacity("0.6");
        setColor("#000000");
        setTextColor("#ffffff");
      } else {
        setOpacity("1");
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  });

  return (
    <div
      className="fixed top-0 left-0 z-10 w-full bg-opacity-30"
      style={{ backgroundColor: `${color}`, opacity: `${opacity}` }}
    >
      {/* logo section */}
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1
            style={{ color: `${textColor}` }}
            className={"text-3xl font-bold flex m-[-5]"}
          >
            <Image src={logo} alt="logo" height={40} width={40} />
            <sapn>Bluepineapple</sapn>
          </h1>
        </Link>

        {/* main navigation */}
        <ul style={{ color: `${textColor}` }} className="hidden lg:flex">
          <li
            className={`p-4 font-bold ${
              route.pathname === "/" ? "text-blue-700" : "text-white"
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`p-4 font-bold ${
              route.pathname === "/services" ? "text-blue-700" : "text-white"
            }`}
          >
            <Link href="/Services">Services</Link>
          </li>
          <li
            className={`p-4  font-bold ${
              route.pathname === "/innovation" ? "text-blue-700" : "text-white"
            }`}
          >
            <Link href="/innovation">Innovation</Link>
          </li>
          <li
            className={`p-4  font-bold ${
              route.pathname === "/about" ? "text-blue-700" : "text-white"
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`p-4  font-bold ${
              route.pathname === "/careers" ? "text-blue-700" : "text-white"
            }`}
          >
            <Link href="/careers">Careers</Link>
          </li>
          <li
            className={`p-4  font-bold ${
              route.pathname === "/blog" ? "text-blue-700" : "text-white"
            }`}
          >
            <Link href="/blog">Blog</Link>
          </li>
          <li
            className={`p-4  font-bold ${
              route.pathname === "/Contact" ? "text-blue-700" : "text-white"
            }`}
          >
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>

        {/* mobile button */}
        <div
          role="button"
          tabIndex={-1}
          onClick={handleNav}
          className="z-10 block lg:hidden"
        >
          {nav ? (
            <XMarkIcon className="w-10 text-black bg-white" fill />
          ) : (
            <Bars3Icon className="w-10 text-black bg-white" fill />
          )}
        </div>

        {/* Hamburger Menu */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              role="presentation"
              tabIndex={-1}
              onClick={handleNav}
              className={`p-4 font-bold text-5xl ${
                route.pathname === "/" ? "text-blue-700" : "text-white"
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              role="presentation"
              tabIndex={-1}
              onClick={handleNav}
              className={`p-4 font-bold text-5xl ${
                route.pathname === "/Services" ? "text-blue-700" : "text-white"
              }`}
            >
              <Link href="/Services">Services</Link>
            </li>
            <li
              role="presentation"
              tabIndex={-1}
              onClick={handleNav}
              className={`p-4 font-bold text-5xl ${
                route.pathname === "/innovation" ? "text-blue-700" : "text-white"
              }`}
            >
              <Link href="/innovation">Innovation</Link>
            </li>
            <li
              role="presentation"
              tabIndex={-1}
              onClick={handleNav}
              className={`p-4 font-bold text-5xl ${
                route.pathname === "/about" ? "text-blue-700" : "text-white"
              }`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              role="presentation"
              tabIndex={-1}
              onClick={handleNav}
              className={`p-4 font-bold text-5xl ${
                route.pathname === "/careers" ? "text-blue-700" : "text-white"
              }`}
            >
              <Link href="/careers">Careers</Link>
            </li>
            <li
              role="presentation"
              tabIndex={-1}
              onClick={handleNav}
              className={`p-4 font-bold text-5xl ${
                route.pathname === "/blog" ? "text-blue-700" : "text-white"
              }`}
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li
              role="presentation"
              tabIndex={-1}
              onClick={handleNav}
              className={`p-4 font-bold text-5xl ${
                route.pathname === "/Contact" ? "text-blue-700" : "text-white"
              }`}
            >
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
