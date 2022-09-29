import React, { useState } from "react";
import { useRouter } from "next/router";

// CSS
import classes from "./CloudServices.module.css";

// Icons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

let count = 0;

const CloudServices = (props) => {
  const data = props.services;
  const content = data.page.homepage_customfields;
  const icons = data.post.icons;
  const services = data.services.nodes;
  const router = useRouter();

  const [service, setService] = useState(0);

  // Learn More Button Action
  const learnMoreHandler = () => {
    router.push("/Contact");
  };

  // view next service
  const handleNext = () => {
    count = (count + 1) % services.length;
    setService(count);
  };

  // view previous service
  const handlePrev = () => {
    const cloudLength = services.length;
    count = (count + cloudLength - 1) % cloudLength;
    setService(count);
  };

  return (
    <div
      className={classes.section}
      style={{
        backgroundImage: `url(${
          content !== null ? content.section1Bg.sourceUrl : ""
        })`,
      }}>
      <div className={classes.content}>
        <div className={classes.section1Title}>
          <div className={classes.blueBlock}>
            <img
              src={icons !== null ? icons.blueDiamond.sourceUrl : ""}
              alt="dot.png"
            />
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
        <div>
          <button
            type="button"
            className={classes.btn}
            onClick={learnMoreHandler}>
            {content !== null ? content.section1Buttondata : ""}
          </button>
        </div>
      </div>
      <div className={classes.cloudSection}>
        <div className={classes.cloud}>
          <div className={classes.cloudContent}>
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
    </div>
  );
};

export default CloudServices;
