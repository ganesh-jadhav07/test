import React, { useEffect, useState } from "react";
import { HomePageSection1 } from "../../lib/wordpress/api";
import dataFetcher from "../../lib/wordpress/dataFetcher";
import BlueBlock from "../../public/images/home/BlueBlock.png";

import classes from "./CloudServices.module.css";

// Cloud Images
import salesF from "../../public/images/home/SalesLogo.png";

// Icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

let count = 0;
const CloudServices = () => {
  const [services, setServices] = useState(null);
  const [content, setContent] = useState(null);

  const [service, setService] = useState(0);

  // Fetching data
  useEffect(() => {
    (async function Clouds() {
      const res = await dataFetcher(HomePageSection1);
      const allData = res.data;
      console.log(allData);
      setServices(allData.services.nodes);
      setContent(allData.page.homepage_customfields);
    })();
  }, []);

  // view next service
  const handleNext = () => {
    count = (count + 1) % services.length;
    setService(count);
  };

  // view previous service
  const handlePrev = () => {
    const cloudLength = services.length;
    count = (cloud + cloudLength - 1) % cloudLength;
    setService(count);
  };

  // services !== null
  //   ? services.map((service) => {
  //       console.log(service);
  //     })
  //   : "";
  // console.log(content);
  return (
    <div className={classes.section}>
      <div className={classes.content}>
        <div className={classes.section1Title}>
          <div className={classes.blueBlock}>
            <img src={BlueBlock.src} alt="dot.png" />
          </div>
          <p>{content !== null ? content.section1Title : ""}</p>
        </div>
        <div className={classes.section1Subtitle}>
          {content !== null ? content.section1Subtitle : ""}
        </div>
        <div className={classes.section1Tagline}>
          {content !== null ? content.section1Tagline : ""}
        </div>
        <div className={classes.section1Content}>
          {content !== null ? content.section1Content : ""}
        </div>
      </div>
      <div className={classes.cloudSection}>
        <div className={classes.cloud}>
          <div className={classes.cloudLogo}>
            <img
              src={
                services !== null
                  ? services[service].services.logo.sourceUrl
                  : ""
              }
              alt="CloudLogo"
            />
          </div>
          <div className={classes.cloudDescription}>
            <div className={classes.leftIcon} onClick={handlePrev}>
              <ChevronLeftIcon className={`justify-center`} />
            </div>
            <div>
              {services !== null ? services[service].services.overview : ""}
            </div>
            <div className={classes.rightIcon} onClick={handleNext}>
              <ChevronRightIcon className={`justify-center`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudServices;
