import React, { useEffect, useState } from "react";
import { HomePageSection1 } from "../../lib/wordpress/api";
import dataFetcher from "../../lib/wordpress/dataFetcher";
import BlueBlock from "../../public/images/home/BlueBlock.png";

import classes from "./CloudServices.module.css";

// Cloud Images
import salesF from "../../public/images/home/SalesLogo.png";

// Icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const CloudServices = () => {
  const [services, setServices] = useState(null);
  const [content, setContent] = useState(null);

  // Fetching data
  useEffect(() => {
    (async function Clouds() {
      const res = await dataFetcher(HomePageSection1);
      const allData = res.data;
      // console.log(allData);
      setServices(allData.services.nodes);
      setContent(allData.page.homepage_customfields);
    })();
  }, []);

  console.log(services);
  console.log(content);
  return (
    <div className={classes.section}>
      <div className={classes.content}>
        <div className={classes.section1Title}>
          <div className={classes.blueBlock}>
            <img src={BlueBlock.src} alt="dot.png" />
          </div>
          <p>Unlock 10x Performance</p>
        </div>
        <div className={classes.section1Subtitle}>
          Bluepineapple comes with more than 200 years of collective experience
          to help you achieve this.
        </div>
        <div className={classes.section1Tagline}>
          Leverage our multi-cloud expertise to fast-track your digital
          transformation
        </div>
        <div className={classes.section1Content}>
          Maximize your ROI on platform investments and speed up your cloud
          adoption. Fast track your digital transformation journey by drawing
          synergies across multiple cloud platforms.
        </div>
      </div>
      <div className={classes.cloudSection}>
        <div className={classes.cloud}>
          <div className={classes.cloudLogo}>
            <img src={salesF.src} alt="SalesForce" />
          </div>
          <div className={classes.cloudDescription}>
            <div className={classes.leftIcon}>
              <ChevronLeftIcon className={`justify-center`} />
            </div>
            <div>
              With expertise spanning the platform gamut from IT Asset
              management and IT Service Management to Project Portfolio to CSM
              and FSM, we help customers achieve tactical and strategic wins on
              the ServiceNow platform and help them build a sustainable vision
              and roadmap.
            </div>
            <div className={classes.rightIcon}>
              <ChevronRightIcon className={`justify-center`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudServices;
