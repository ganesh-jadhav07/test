import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

function ContactFooter(props) {
  const addresses = props.contactus.contacts.addresses.nodes;

  const footerContent = () => (
    <footer className="self-end pt-5 text-gray-600 body-font sm:pt-10">
      <div className="flex justify-around ml-4 mr-4 -mb-10 space-x-4 text-center md:text-center lg:justify-start xl:justify-start 2xl:justify-start">
        {addresses.map((address) => {
          return (
            <div key={address.title} className="flex">
              {/* MAP ICON */}
              <div>
                <MapPinIcon className="w-5 h-5 md:" />
              </div>

              {/* ADDRESS SECTION */}
              <div>
                <h2 className="pl-2 mb-3 text-xs font-bold tracking-widest text-left text-gray-900 title-font md:text-sm">
                  {address.title}
                </h2>
                <nav
                  className="justify-start pl-2 mb-10 text-xs text-left list-none md:text-sm"
                  dangerouslySetInnerHTML={{
                    __html: address.content,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );

  //returnig homePage containt
  return footerContent();
}

export default ContactFooter;
