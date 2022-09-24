import React, { useEffect, useState } from "react";
import { HomePageSection1 } from "../../lib/wordpress/api";
import dataFetcher from "../../lib/wordpress/dataFetcher";

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
        <div className={classes.section1Title}>Unlock 10x Performane</div>
        <div className={classes.section1Subtitle}>
          Bluepineapple comes with more than 200 years of collective experience
          to help you achieve this.
        </div>
        <div className={classes.section1Tagline}>
          Bluepineapple comes with more than 200 years of collective experience
          to help you achieve this.
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
            <div>
              <ChevronLeftIcon className="w-3 justify-center" />
            </div>
            <div>
              With immense experience and heaps of platform certifications, our
              consultants have built full lifecycle, turnkey solutions on the
              platform: from Sales cloud, Communities and Service cloud
              implementations to bespoke business process solutions involving
              complex workflows and integrations.
            </div>
            <div>
              <ChevronRightIcon className="w-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudServices;
