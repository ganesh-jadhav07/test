import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

//logo import
import logo from "../../public/bp.png";
import bplogo from "../../public/images/bplogo.png";

//icon imports
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavBar() {
  const route = useRouter();
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("black");
  const [textColor, setTextColor] = useState("#999999");
  const [opacity, setOpacity] = useState("1");

  //useSelector for accessing managing state of full PageScroller
  const count = useSelector((state) => state.update.value);

  //useSelector for accessing managing state of navigation Links
  const navdata = useSelector((state) => state.navigation.value);

  const handleNav = () => {
    setNav(!nav);
  };

  //use Effect for changing color of navigation while scrolling
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "auto";

    //function for changing color of nav
    const changeColor = () => {
      if (count % 2 === 0) {
        setOpacity("1");
        setColor("black");
        setTextColor("#999999");
      } else {
        setOpacity("0.8");
        setColor("white");
        setTextColor("#999999");
      }
    };
    // window.addEventListener("scroll", changeColor);
    changeColor();
  });

  return (
    <div
      className="fixed top-0 left-0 z-10 w-full p-2 bg-opacity-30 sm:p-2 "
      style={{
        backgroundColor: `${route.pathname === "/Contact" ? "white" : color}`,
        opacity: `${route.pathname === "/Contact" ? 1 : opacity}`,
      }}
    >
      {/* logo section */}
      <div className="max-w-[1240px] m-auto flex justify-between items-center text-[#999999]">
        <Link href="/">
          <h1
            style={{ color: `${textColor}` }}
            className={
              "text-sm flex m-[-5] sm:text-base md:text-xl lg:text-2xl xl:3xl 2xl:text-5xl "
            }
          >
            <img
              src={bplogo.src}
              alt="logo"
              className="self-start h-8 w-44 sm:w-44 sm:h-8 md:w-44 lg:w-44 lg:h-8 xl:w-48 xl:h-9 2xl:w-52 2xl:h-10"
            />
            {/* <p className="self-center text-[0.5rem] sm:text-base md:text-lg lg:text-xl 2xl:text-4xl">
              Bluepineapple
            </p> */}
          </h1>
        </Link>

        {/* main navigation */}
        <ul style={{ color: `${textColor}` }} className="hidden lg:flex">
          {navdata.map((data) => (
            <li
              key={data.title}
              className={`p-4 text-[0.5rem] hover:text-blue-700 sm:text-base md:text-lg lg:text-xl 2xl:text-2xl ${
                route.pathname === data.navigation.path
                  ? "text-blue-700"
                  : "text-[#999999]"
              }`}
            >
              <Link href={data.navigation.path}>{data.title}</Link>
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
            <XMarkIcon className="w-7 text-[#999999] rotate-45 translate-x-9 translate-y-9 ease-in-out duration-500" />
          ) : (
            <Bars3Icon className="w-7 text-[#999999] -rotate-45 translate-x-9 -translate-y-9 ease-in-out duration-500" />
          )}
        </div>

        {/* Hamburger Menu */}
        <div
          className={
            nav
              ? "overscroll-y-none lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-screen h-screen bg-white text-center ease-in duration-500"
              : "overscroll-y-none lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-500 "
          }
        >
          <ul>
            {navdata.map((data) => (
              <li
                key={data.title}
                onClick={handleNav}
                className={`p-4 font-bold text-2xl ${
                  route.pathname === data.navigation.path
                    ? "text-blue-700"
                    : "text-[#999999]"
                }`}
              >
                <Link href={data.navigation.path}>{data.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
