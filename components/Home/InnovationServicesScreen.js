import React from "react";
import { useRouter } from "next/router";

// style imports
import style from "./InnovationServicesScreen.module.css";

function InnovationServicesScreen(props) {
  const title = props.innovation.page.homepage_customfields;
  const arrowIcons = props.innovation.post.icons.greenUpwardsArrow;

  const router = useRouter();
  function buttonHandler() {
    router.push("/Contact");
  }

  return (
    <div className="h-screen ">
      {/* Content div */}
      <div className={`${style.backgroundContainer} h-1/2 pt-20 `}>
        <h1 className={style.textContainer}>{title.section2Title}</h1>
        <div className={style.gridWrapper}>
          <div className={style.gridItem}>
            <img
              className={style.imageStyle2}
              src={arrowIcons.sourceUrl}
              alt="Arrow Iamge Not Found"
            />
            <img
              className={style.imageStyle3}
              src={arrowIcons.sourceUrl}
              alt="Arrow Iamge Not Found"
            />
          </div>
          <div className={style.gridItem}>
            <p className={style.textContent}>{title.section2Content}</p>
            <div>
              {/* Button Section */}
              <button
                className={style.btnStyle}
                type="button"
                onClick={buttonHandler}
              >
                {title.section2Buttondata}
              </button>
            </div>
          </div>

          <div className={style.gridItem}>
            <img
              className={style.imageStyle5}
              src={arrowIcons.sourceUrl}
              alt="Arrow Iamge Not Found"
            />
            <img
              className={style.imageStyle4}
              src={arrowIcons.sourceUrl}
              alt="Arrow Iamge Not Found"
            />
          </div>
        </div>
      </div>

      {/*  Image Div */}
      <div className="h-1/2">
        <img
          className={`${style.imageContainer} object-cover lg:h-full `}
          src={title.section2Bg.sourceUrl}
          alt="Car Image Not Found"
        />
      </div>
    </div>
  );
}
export default InnovationServicesScreen;
