import React, { useState, useEffect } from "react";
//style import
import styles from "./Product.module.css";

// icons import
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { useRouter } from "next/router";

function Product(props) {
  console.log("Data ", props.products);

  const products = props.products.products.nodes;

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
      <div className={`${styles.bodyContent}  px-6`}>
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
                  src="https://s3-alpha-sig.figma.com/img/d306/1d86/284cb069f62e8fb441c140e46f8bcae7?Expires=1664150400&Signature=fwubHvqif68DftC7fj~06UI3TGc4VDlZx1MTccOZt48hP5Za3kfFfUu8QBz1ClYmfGUY7QyQ1GycB4Co4yLO7aNQOu99acmuanM6MsLtTd~Ro-T4aBtPWzt59ciRShWDr47w0eoAKOeR~4FMlWQ5wtGHVAF7DfLhXdciBsA60z3D51S~8K1lxqTPVQnZr2P0nW2mEFkC1I4m8GvEShOMDItu8JA208EKmSeI2Kxa5mbpYbbI-lb9RhuqAAkV-nCw4MmqZlvDLkwX10jsvRsdko1kXRrL0oNisHWPEiT5xoaRLmY1Y2sjiNANCpu1E1kvSExqhnTK0iM2j0-6wHlb5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
