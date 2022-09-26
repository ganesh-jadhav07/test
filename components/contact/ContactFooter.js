import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

function ContactFooter(props) {
  const addresses = props.contactus.contacts.addresses.nodes;

  return (
    <footer className="text-gray-600 body-font">
      <div className="flex justify-start ml-4 mr-4 -mb-10 space-x-4 text-center md:text-center">
        {addresses.map((address) => {
          return (
            <div key={address.title}>
              <MapPinIcon className="w-5 h-5 md:" />
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

        {/* <div>
          <MapPinIcon className="w-5 h-5 md:" />
          <div>
            <h2 className="pl-2 mb-3 text-xs font-bold tracking-widest text-left text-gray-900 title-font md:text-sm">
              INDIA
            </h2>
            <nav className="w-2/4 pl-2 mb-10 text-xs text-left list-none md:text-sm">
              India 3rd Floor, Vasudha House, Baner Road, Pune, Maharashtra
              411045, India{" "}
            </nav>{" "}
          </div>
        </div>

        <div>
          <MapPinIcon className="w-5 h-5 md:" />
          <h2 className="pl-2 mb-3 text-xs font-bold tracking-widest text-left text-gray-900 title-font md:text-sm">
            INDIA
          </h2>
          <nav className="w-2/4 pl-2 mb-10 text-xs text-left list-none md:text-sm">
            India 3rd Floor, Vasudha House, Baner Road, Pune, Maharashtra
            411045, India{" "}
          </nav>{" "}
        </div> */}
      </div>
    </footer>
  );
}

export default ContactFooter;
