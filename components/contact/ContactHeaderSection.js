import React from "react";
import mailLogo from "../../public/images/home/mail1.png";
import { CheckIcon } from "@heroicons/react/24/solid";
import styles from "./ContactSectionOne.module.css";

function ContactSectionOne(props) {
  // console.log(props.contactus.contacts.page.contactus.contactBg.sourceUrl);
  const bgImage = props.contactus.contacts.page.contactus.contactBg.sourceUrl;
  const mailIcon = props.contactus.contacts.page.contactus.contactMail.sourceUrl;
  const contactTitle = props.contactus.contacts.page.contactus.contactTitle;
  const contactSubTitle = props.contactus.contacts.page.contactus.contactSubtitle;
  const point1 = props.contactus.contacts.page.contactus.contactPoint1;
  const point2 = props.contactus.contacts.page.contactus.contactPoint2;
  const point3 = props.contactus.contacts.page.contactus.contactPoint3;

  return (
    // Main container
    <div className="relative w-screen bg-auto">
      {/*backgroundImageContainer */}
      <div className="relative">
        <div className={styles.backgroundImageContainer}>
          <img
            src={bgImage}
            className={`${styles.backgroundImageContainerImage} object-cover`}
          />
        </div>
        <div className={styles.mailIcon}>
          <img src={mailIcon} className="" alt="mail" />
        </div>
      </div>
      {/* //main header */}
      <h1 className={styles.backgroundImageHeading}>{contactTitle}</h1>
      <h3 className={styles.backgroundImageText}>
        {contactSubTitle}
      </h3>
      {/* content section */}
      <div className={styles.backgroundImageContentContainer}>
        <div className="">
          <CheckIcon className="inline w-5 h-5" />{" "}
          <span>{point1}</span>
        </div>
        <div className="">
          <CheckIcon className="inline w-5 h-5" />{" "}
          <span>{point2}</span>
        </div>
        <div className="">
          <CheckIcon className="inline w-5 h-5" />{" "}
          <span>{point3}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactSectionOne;
