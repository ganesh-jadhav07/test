import Image from "next/image";
import React from "react";
import diamond from "../public/images/diamond.svg";

export default function Innovation() {
  return (
    <div className="w-full h-screen bg-white">
      <div className="relative grid items-center justify-center grid-cols-1 gap-y-4 top-32 left-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="w-48 h-48 rotate-45 bg-black rounded-xl">
          <div className="ml-2 text-white -rotate-45">
            hello world
          </div>
        </div>
        <div className="w-48 h-48 rotate-45 bg-black rounded-xl">
          <div className="ml-2 text-white -rotate-45">
            <img src="https://toppng.com/uploads/preview/salesforce-transparent-logo-11552506310l3i696ymtl.png" className="justify-center w-10 h-10"/>
          </div>
        </div>
        <div className="w-48 h-48 rotate-45 bg-black rounded-xl">
          <div className="ml-2 text-white -rotate-45">
            hello world
          </div>
        </div>
        <div className="w-48 h-48 rotate-45 bg-black rounded-xl">
          <div className="ml-2 text-white -rotate-45">
            hello world
          </div>
        </div>
        
        {/* <div className="relative">
          <Image
            src={diamond}
            alt="Diamond"
            className=""
            height={300}
            width={300}
          />
        </div> */}
      </div>
      <div className="self-end"></div>
    </div>
  );
}
