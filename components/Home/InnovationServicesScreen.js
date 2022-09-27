import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

//imports for data Fetching
import dataFetcher from "../../lib/wordpress/dataFetcher";
import { HomePageSection2 } from "../../lib/wordpress/api";

// style imports
import style from "./InnovationServicesScreen.module.css";

// Image imports
import fone from "../../public/images/home/fone.jpg";
import arrow1 from "../../public/images/home/arrow1.png";
import arrow2 from "../../public/images/home/arrow2.png";
import arrow3 from "../../public/images/home/arrow3.png";
import arrow4 from "../../public/images/home/arrow4.png";

function InnovationServicesScreen() {
  // const [title, setTitle] = useState(null);
  // // Fetching data
  // useEffect(() => {
  //   async function Innovation() {
  //     const res = await dataFetcher(HomePageSection2);
  //     const all_Posts = res.data;
  //     setTitle(all_Posts.page.homepage_customfields);
  //     console.log(all_Posts.page.homepage_customfields);
  //   }
  //   Innovation();
  // }, []);

  const router = useRouter();
  function buttonHandler() {
    router.push("/Contact");
  }

  return (
    <div className="h-screen ">
      {/* Content div */}
      <div className={`${style.backgroundContainer} h-1/2 pt-20 `}>
        <h1 className={style.textContainer}>
          {/* {innovation.title.section2Title} */}
          Accelerate your business with our Innovation Services
          {/* {title === null || undefined ? "Data Loading" : title.section2Title} */}
        </h1>
        <div className={style.gridWrapper}>
          <div className={style.gridItem}>
            <img
              className={style.imageStyle2}
              src={arrow1.src}
              alt="Arrow Iamge Not Found"
            />
            <img
              className={style.imageStyle3}
              src={arrow2.src}
              alt="Arrow Iamge Not Found"
            />
          </div>
          <div className={style.gridItem}>
            <p className={style.textContent}>
              Our customer first innovation services are tailored to provide a
              unified approach to global delivery methodology while leveraging
              the knowledge base of our entire team – across multiple cloud
              platforms. A dedicated customer DevCon helps us constantly
              innovate while keeping the business context of the customer front
              and centre.
              {/* {title === null || undefined
                ? "Data Loading"
                : title.section2Content} */}
            </p>
            <div>
              {/* Button Section */}
              <button
                className={style.btnStyle}
                type="button"
                onClick={buttonHandler}
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className={style.gridItem}>
            <img
              className={style.imageStyle5}
              src={arrow4.src}
              alt="Arrow Iamge Not Found"
            />
            <img
              className={style.imageStyle4}
              src={arrow3.src}
              alt="Arrow Iamge Not Found"
            />
          </div>
        </div>
      </div>

      {/*  Image Div */}
      {/* <div className={style.imageWrapper}> */}
      <div className="h-1/2">
        <img
          className={`${style.imageContainer} object-cover lg:h-full `}
          src={fone.src}
          alt="Car Image Not Found"
        />
      </div>
    </div>
  );
}
export default InnovationServicesScreen;
