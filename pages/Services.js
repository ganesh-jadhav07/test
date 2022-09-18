import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import contactImage from "../public/images/contact.jpg";
import Image from "next/image";

function Services() {
  return (
    <div className="grid order-last w-screen h-screen bg-black grid-col-1 lg:grid-cols-2">
      <div className="grid items-end justify-center mt-20 text-white bg-black grid-row-1 sm:mt-20 md:mt-20 lg:items-center lg:order-last">
        <div className="text-center text-white">
          <h1 className="text-3xl">Customers Speaks</h1>
          <p className="p-8 text-xl">
            Bluepineapple has been a trusted partner for us . They are very
            professional, taking a consultative approach to all development
            requests. We look forward to our continued partnership with
            Bluepineapple.
          </p>
          <ChatBubbleLeftRightIcon className="inline-block w-12 left-50 ml-15" />
          <p className="text-3xl">BitSight Technologies</p>
          <div className="flex justify-center mt-10 mb-10 space-4">
            <div className="w-8 bg-white">1</div>
            <div className="w-8 bg-white">1</div>
            <div className="w-8 bg-white">1</div>
          </div>
        </div>
      </div>

      {/* image part */}
      <div className="items-end self-end lg:self-center lg:order-first">
        <Image
          src={contactImage}
          alt="Contact"
          className="self-end object-cover h-8 rounded-tr-full rounded-bl-full mt-14"
        />
      </div>
    </div>
  );
}

export default Services;
