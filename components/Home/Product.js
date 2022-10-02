import React, { useState, useEffect } from "react";
//style import
import styles from "./Product.module.css";

// icons import
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

function Product(props) {
  // const [width, setWidth] = useState(window.innerWidth);
  // const updateDimensions = () => {
  //   setWidth(window.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", updateDimensions);
  //   return () => window.removeEventListener("resize", updateDimensions);
  // }, []);

  const backgroundImage =
    props.products.page.homepage_customfields.section3Bg.sourceUrl;

  const products = props.products.products.nodes;

  console.log(products);

  const titleContent = props.products.page.homepage_customfields;
  console.log("Tititle Content: ", titleContent);

  const greenGrayDiamondIcons = props.products.post.icons;

  const router = useRouter();

  const [currentProduct, setCurrentProduct] = useState(0);

  // view next product
  const handleNext = () => {
    let count = (currentProduct + 1) % products.length;
    setCurrentProduct(count);
  };

  // view previous product
  const handlePrev = () => {
    const productLength = products.length;
    let count = (currentProduct + productLength - 1) % productLength;
    setCurrentProduct(count);
  };

  // Diamond Logo
  const diamondLogo = (
    <div className={`${styles.diamondLogo} flex flex-col items-center`}>
      <ul>
        <li className={`${styles.diamondShapeDesign} `} />
      </ul>
      <ul className="flex flex-row">
        <li className={`${styles.diamondShapeDesign} mr-3 `} />
        <li className={`${styles.diamondShapeDesign} `} />
      </ul>
    </div>
  );

  return (
    <div className={`h-screen ${styles.bgImage}`}>
      {/* Title section */}
      <div
        className={`${styles.headerTopContent}  flex justify-center w-full pt-4`}
      >
        <div className={`${styles.titleContent}  flex flex-col items-center `}>
          <span className={`${styles.title} flex flex-row items-center`}>
            {diamondLogo}
            <span className="ml-4">{titleContent.section3Title}</span>
          </span>
          <div className={`${styles.description}  mt-2`}>
            {titleContent.section3Subtitle}
          </div>
        </div>
      </div>
      {/* Body content */}
      <div
        className={`${styles.bodyContent}  px-6`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Diamond card */}
        <div className={`${styles.firstContent} `}>
          {/* left arrow Preview previous product */}
          <ChevronLeftIcon
            className={`${styles.chevronIcon} z-[1] text-bGreen cursor-pointer`}
            onClick={handlePrev}
          />
          <div className={`${styles.squareDiamond} flex items-center`}>
            <ChevronLeftIcon
              className={`${styles.iconForSliding} w-8 text-bGreen cursor-pointer`}
              onClick={handlePrev}
            />
            <div
              className={`${styles.squareDiamondBody}  grid grid-cols-1 justify-evenly `}
            >
              <div className="flex items-center justify-center">
                <img
                  src={products[currentProduct].products.logo.sourceUrl}
                  className={`${styles.greenFolderImage}`}
                />
              </div>
              <div
                className={`${styles.diamondParagraph} text-center flex items-center overflow-hidden`}
              >
                {products[currentProduct].products.overview}
              </div>
              <span
                className={`${styles.diamondBottom} text-center flex flex-col items-center justify-around `}
              >
                <button
                  className={`${styles.learnMoreButton}`}
                  onClick={() => router.push("./Services")}
                >
                  {titleContent.section3Buttondata}
                </button>
                <ul className="flex w-20 row justify-evenly">
                  {products.map((eachProduct, index) => (
                    <>
                      {index === currentProduct ? (
                        <img
                          src={greenGrayDiamondIcons.greenDiamond.sourceUrl}
                          className={`${styles.currentProduct}`}
                        />
                      ) : (
                        <img
                          src={greenGrayDiamondIcons.greyDiamond.sourceUrl}
                          className={`${styles.currentProduct} `}
                        />
                      )}
                    </>
                  ))}
                </ul>
              </span>
            </div>
            <ChevronRightIcon
              className={` ${styles.iconForSliding} w-8 text-bGreen cursor-pointer`}
              onClick={handleNext}
            />
          </div>
          {/* right arrow (Preview next product) */}
          <ChevronRightIcon
            className={`${styles.chevronIcon} z-[1] text-bGreen cursor-pointer`}
            onClick={handleNext}
          />
        </div>
        {/* right side content */}
        <div
          className={`${styles.secondContent}  flex items-center justify-end `}
        >
          <div className={`${styles.secondBody}  `}>
            {diamondLogo}
            <div className={`${styles.firstParagraph}`}>
              {titleContent.section3Tagline}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
