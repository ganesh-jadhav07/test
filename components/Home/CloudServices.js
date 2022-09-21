import { useEffect, useState } from "react";
import classes from "./CloudServices.module.css";
import BlueBlock from "../../public/images/home/BlueBlock.png";

// Cloud sevices
import SalesF from "../../public/images/home/SalesF.png";
import ServiceN from "../../public/images/home/ServiceN.png";
import Azure from "../../public/images/home/Azure.png";
import AWS from "../../public/images/home/AWS.png";

function CloudServices() {
  const clouds = [SalesF, ServiceN, Azure, AWS];
  return (
    <div className={`pt-16 ${classes.div}`}>
      <div className="text-white p-8">
        <div>
          <img
            src={BlueBlock.src}
            alt="..."
            className="ml-[10.75rem] md:ml-[9.5rem] w-3 -mb-4"
          />
          <p className="text-[1.275rem] md:text-[2rem]">
            Unlock 10x Performance
          </p>
        </div>
        <p className="text-[1rem] md:text-[1rem] mt-2">
          Bluepineapple comes with more than 200 years of collective experience
          to help you achieve this.
        </p>
        <p className="text-[1.5rem] md:text-[1.5rem] max-w-xl mt-4">
          Leverage our multi-cloud expertise to fast-track your digital
          transformation
        </p>
        <p className="text-[0.725rem] md:text-[0.725rem] max-w-sm mt-4">
          Maximize your ROI on platform investments and speed up your cloud
          adoption. Fast track your digital transformation journey by drawing
          synergies across multiple cloud platforms.
        </p>
        <button
          type="button"
          className="p-1 md:p-2 bg-[#3C71FF] rounded-[4px] mt-4 mb-1">
          Learn More
        </button>
      </div>
      <div className={classes.cloudCardSection}>
        {clouds.map((cloud) => (
          <img key={cloud.src} src={cloud.src} alt="..." className="w-64" />
        ))}
      </div>
    </div>
  );
}

export default CloudServices;

//fetch data from wordpress server
