import React from "react";
import style from "./InnovationServicesScreen.module.css";
import fone from "../../public/images/home/fone.jpg";
import arrow1 from "../../public/images/home/arrow1.png";
import arrow2 from "../../public/images/home/arrow2.png";
import arrow3 from "../../public/images/home/arrow3.png";
import arrow4 from "../../public/images/home/arrow4.png";

function InnovationServicesScreen() {
  return (
    <div>
      <div className={style.backgroundContainer}>
        <h1 className={style.textContainer}>
          Accelerate your business with our Innovation Services
        </h1>
        <div className={style.containWrapper}>
          <img className={style.imageStyle2} src={arrow1.src} alt="Not Found" />
          <img className={style.imageStyle3} src={arrow2.src} alt="Not Found" />
          <p className={style.textContent}>
            Our customer first innovation services are tailored to provide a
            unified approach to global delivery methodology while leveraging the
            knowledge base of our entire team – across multiple cloud platforms.
            A dedicated customer DevCon helps us constantly innovate while
            keeping the business context of the customer front and centre.
          </p>
          <img className={style.imageStyle4} src={arrow3.src} alt="Not Found" />
          <img className={style.imageStyle5} src={arrow4.src} alt="Not Found" />
        </div>
        <button className={style.btnStyle} type="button">
          Get In Touch
        </button>
      </div>
      <div>
        <img
          className={`${style.imageContainer} object-cover lg:h-full xl:h-full 2xl:h-full `}
          src={fone.src}
          alt="Not Found"
        />
      </div>
    </div>
  );
}
export default InnovationServicesScreen;
