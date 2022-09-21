import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

//logo import
import logo from "../../public/bp.png";

//icon imports
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";



function NavBar() {
  //navigation list
  const navList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/Services",
    },
    {
      name: "Innovation",
      path: "/Innovation",
    },
    {
      name: "About",
      path: "/About",
    },
    {
      name: "Careers",
      path: "/Careers",
    },
    {
      name: "Blog",
      path: "/Blog",
    },
    {
      name: "Contact",
      path: "/Contact",
    },
  ];

  const route = useRouter();
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("black");
  const [textColor, setTextColor] = useState("white");
  const [opacity, setOpacity] = useState("1");

  const handleNav = () => {
    setNav(!nav);
  };

  //use Effect for changing color of navigation while scrolling
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "auto";

    //function for changing color of nav
    const changeColor = () => {
      if (window.scrollY >= 500) {
        setOpacity("1");
        setColor("#000000");
        setTextColor("#ffffff");
      } else {
        setOpacity("1");
        setColor("black");
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
            className={"text-3xl flex m-[-5]"}
          >
            <Image src={logo} alt="logo" height={40} width={40} />
            <p>Bluepineapple</p>
          </h1>
        </Link>

        {/* main navigation */}
        <ul style={{ color: `${textColor}` }} className="hidden lg:flex">
          {navList.map((data) => (
            <li
              key={data.name}
              className={`p-4 font-bold ${
                route.pathname === data.path ? "text-blue-700" : "text-white"
              }`}
            >
              <Link href={data.path}>{data.name}</Link>
            </li>
          ))}
        </ul>

        {/* mobile button */}
        <div
          role="button"
          tabIndex={-1}
          onClick={handleNav}
          className="z-10 block lg:hidden"
        >
          {/* Hamburger Icons */}
          {nav ? (
            <XMarkIcon className="w-10 text-black bg-white" />
          ) : (
            <Bars3Icon className="w-10 text-black bg-white" />
          )}
        </div>

        {/* Hamburger Menu */}
        <div
          className={
            nav
              ? "overscroll-y-none lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "overscroll-y-none lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 "
          }
        >
          <ul>
            {navList.map((data) => (
              <li
                key={data.name}
                onClick={handleNav}
                className={`p-4 font-bold text-2xl ${
                  route.pathname === data.path ? "text-blue-700" : "text-white"
                }`}
              >
                <Link href={data.path}>{data.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
