import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

//logo import
import logo from "../../public/bp.png";

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
      className="fixed top-0 left-0 z-10 w-full p-4 bg-opacity-30 sm:p-2 "
      style={{
        backgroundColor: `${route.pathname === "/Contact" ? "white" : color}`,
        opacity: `${route.pathname === "/Contact" ? 0.8 : opacity}`,
      }}
    >
      {/* logo section */}
      <div className="max-w-[1240px] m-auto flex justify-between items-center text-[#999999]">
        <Link href="/">
          <h1
            style={{ color: `${textColor}` }}
            className={
              "text-sm flex m-[-5] sm:text-base md:text-xl lg:text-2xl xl:3xl "
            }
          >
            <img
              src={logo.src}
              alt="logo"
              className="self-center w-2 h-2 sm:w-4 sm:h-5 md:w-5 lg:w-6 lg:h-6"
            />
            <p className="self-center text-[0.5rem] sm:text-base md:text-lg lg:text-xl">
              Bluepineapple
            </p>
          </h1>
        </Link>

        {/* main navigation */}
        <ul style={{ color: `${textColor}` }} className="hidden lg:flex">
          {navdata.map((data) => (
            <li
              key={data.title}
              className={`p-4 font-bold ${
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
            <XMarkIcon className="w-5 text-[#999999]" />
          ) : (
            <Bars3Icon className="w-5 text-[#999999]" />
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
            {navdata.map((data) => (
              <li
                key={data.title}
                onClick={handleNav}
                className={`p-2 font-bold text-2xl ${
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
