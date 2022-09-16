import { useState } from "react";
import Image from "next/image";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import logo from "../../public/images/bp.png";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "/Services" },
    { name: "ABOUT", link: "/" },
    { name: "CAREERS", link: "/" },
    { name: "BLOGS", link: "/" },
    { name: "CONTACT", link: "/Contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className={`fixed w-full bg-white bg-opacity-0 ${open?"bg-opacity-0":""}`}>
      <div className="items-center justify-between px-4 py-2 md:flex md:px-4">
        
        {/* Logo Section */}
        <div className="font-bold text-2xl cursor-pointer flex items-baseline font-[Poppins]  text-black">
          <Image src={logo} height={25} width={25} />
          <span className="text-white">Bluepineapple</span>
        </div>

        {/* HamBurger Icon Section */}
        <div
          role="button"
          onClick={() => setOpen(!open)}
          className="absolute text-3xl cursor-pointer right-4 top-3 md:hidden">
          {open ? (<XMarkIcon className="w-6 align-middle bg-white" />) : (<Bars3Icon className="w-6 bg-white" />)}
        </div>

        {/* Nav Section */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white bg-opacity-0 md:z-auto z-[10] left-0 w-full md:w-auto md:pl-0 pl-4 ${open ? "top-10 bg-opacity-50" : "top-[-490px] bg-opacity-0"}`}>
          {Links.map((link) => (
            <li key={link.name} className="text-m md:ml-8 md:my-0 my-7" onClick={() => setOpen(!open)}>
              <Link href={link.link}>
                <a className={`font-semibold hover:text-blue-700 ${router.pathname === link.link? "text-blue-700 font-extrabold": "text-white"}`} >
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
