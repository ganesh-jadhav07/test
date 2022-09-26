import React from "react";
import mailLogo from "../../public/images/home/mail1.png";
import { CheckIcon } from "@heroicons/react/24/solid";
import styles from "./ContactSectionOne.module.css";

function ContactSectionOne() {
  return (
    // Main container
    <div className="relative w-screen bg-auto">
      {/*backgroundImageContainer */}
      <div className="relative">
        <div className={styles.backgroundImageContainer}>
          <img
            src="https://s3-alpha-sig.figma.com/img/09dd/72a8/71326e2675aef7698b40697340b3f664?Expires=1665360000&Signature=dK12Fy4C5HiJvy93~Pd8~OQ1Z-d7geSDhkK2gWq-VmpFxwkHVBX9PVa4ASiPclBMYfsnSqVGhB3viFZXKGv~oT1DME0odSVNelZFQ-D3XMnxr1ow-0j0T8qdIlszf0EqNkMWyfahmrBGGSwOGZ-akrwOcvFJjGEIqOp~5jXg8mh3t9BnX-DnrKOmjoltVGDmKIpmuah-Ws45DiMKNzo335bHlnHrZB1GDcoYv-w4HCKccl4xWohQlxRwu9iUboTc3~VEqav0ofqtFO4XUfuP9myJCweAdVhWD1p22UQfiqVOA7u6~wJhghd8hKYgg28nlDLqc53l70U1ehohdCEe2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            className={`${styles.backgroundImageContainerImage} object-cover`}
          />
        </div>
        <div className={styles.mailIcon}>
          <img src={mailLogo.src} className="" alt="mail" />
        </div>
      </div>
      {/* //main header */}
      <h1 className={styles.backgroundImageHeading}>Drop a line</h1>
      <h3 className={styles.backgroundImageText}>
        We're happy to answer questions.
      </h3>
      {/* content section */}
      <div className={styles.backgroundImageContentContainer}>
        <div className="">
          <CheckIcon className="inline w-5 h-5" />{" "}
          <span>Learn how to increase team productivity</span>
        </div>
        <div className="">
          <CheckIcon className="inline w-5 h-5" />{" "}
          <span> Get pricing information</span>
        </div>
        <div className="">
          <CheckIcon className="inline w-5 h-5" />{" "}
          <span>Explore use cases for your team</span>
        </div>
      </div>
    </div>
  );
}

export default ContactSectionOne;
