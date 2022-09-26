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
            src="https://s3-alpha-sig.figma.com/img/09dd/72a8/71326e2675aef7698b40697340b3f664?Expires=1664150400&Signature=alPUDoP9rqzZBMbWIx~OptanTXLIugPI9Z8PuFscbhfF6D0Njw0tR4qo07~u1i99TfkfggcEIC1BCstrnEsWfZ3CWp4pK-IRJwQLm8t4JD8kcQWRddTsLUxf3LP550Se-Nba4HgcxttFQhp4xXzb1438o9kWcVOJtD8i0tssbPavQgfzxwzLsw9yhKvWBjudWhYNB7dILxnVLSWnzxPy-TXcOgW61f1-fZur0syP49tARLZA~57YrP3wzXbxn0frWddWjt~9Hgdzrx-oXjDfdfhkB7I8d~CEHbxgOdBCp9tAt033HoiZYT5sKS6erFm4sultuF2o1A8ZC36ELtffWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
