import React, { useState } from "react";
import Image from "next/image";
import styles from "./Products.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Diamond from "../../public/Diamond.svg";

const count = 0;
function Products() {
  const products = [
    {
      id: 1,
      title:
        "Green Folder helps organisations template, version, automate as aimed at providing solutions for critical industry demands and new document related processes.",
    },
    {
      id: 2,
      title:
        "Green Verifi is a video based compliance solution for KYC processes. It helps onboard customers with proper identity verification within minutes.",
    },
  ];

  const [currentProduct, setProducts] = useState(0);

  // view next product
  const handleNext = () => {
    count = (count + 1) % products.length;
    setProducts(count);
  };

  // view previous product
  const handlePrev = () => {
    const productLength = products.length;
    count = (currentProduct + productLength - 1) % productLength;
    setProducts(count);
  };

  // JSX of Diamond Logo (Reuse it anywhere you want)
  const diamondLogo = (
    <div className={`flex flex-col items-center`}>
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
    <div className={`h-screen w-full ${styles.bgImage} `}>
      <div
        className={`${styles.headerTopContent}  flex justify-center w-full pt-4`}
      >
        <div className={`${styles.titleContent}  flex flex-col items-center `}>
          <span className={`${styles.title} flex flex-row items-center`}>
            {diamondLogo}
            <span className="ml-4">Laverage the power of our Apps</span>
          </span>
          <div className={`${styles.discription}  mt-2`}>
            We have a strong innovation culture at Bluepineapple. Our Apps are
            aimed at providing solutions for critical industry demands and new
            business needs.
          </div>
        </div>
      </div>
      <div className={`${styles.bodyContent}  px-6`}>
        <div className={`${styles.firstContent} `}>
          <ChevronLeftIcon
            className={`${styles.chevronIcon} z-[1] text-bGreen cursor-pointer`}
            onClick={handlePrev}
          />
          <div
            className={`${styles.squareDiamond} bg-slate-200 rotate-45 flex  items-center`}
          >
            <div
              className={`${styles.squareDiamondBody} -rotate-45 grid grid-cols-1 justify-evenly `}
            >
              <div className="flex justify-center items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/d306/1d86/284cb069f62e8fb441c140e46f8bcae7?Expires=1664150400&Signature=fwubHvqif68DftC7fj~06UI3TGc4VDlZx1MTccOZt48hP5Za3kfFfUu8QBz1ClYmfGUY7QyQ1GycB4Co4yLO7aNQOu99acmuanM6MsLtTd~Ro-T4aBtPWzt59ciRShWDr47w0eoAKOeR~4FMlWQ5wtGHVAF7DfLhXdciBsA60z3D51S~8K1lxqTPVQnZr2P0nW2mEFkC1I4m8GvEShOMDItu8JA208EKmSeI2Kxa5mbpYbbI-lb9RhuqAAkV-nCw4MmqZlvDLkwX10jsvRsdko1kXRrL0oNisHWPEiT5xoaRLmY1Y2sjiNANCpu1E1kvSExqhnTK0iM2j0-6wHlb5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  className={`${styles.greenFolderImage}`}
                />
              </div>
              <div
                className={`${styles.diamondParagraph} text-center font-bold flex items-center overflow-hidden`}
              >
                {products[currentProduct].title}
              </div>
              <span
                className={`${styles.diamondBottom} text-center flex flex-col items-center justify-around `}
              >
                <button className={`${styles.learnMoreButton}`}>
                  Know More
                </button>
                <ul className="flex row justify-evenly w-20">
                  {products.map((each) => (
                    <li key={each.id} className={`${styles.currentProduct}`} />
                  ))}
                </ul>
              </span>
            </div>
          </div>

          <ChevronRightIcon
            className={`${styles.chevronIcon} z-[1] text-bGreen cursor-pointer`}
            onClick={handleNext}
          />
        </div>
        <div
          className={`${styles.secondContent}  flex items-center justify-end `}
        >
          <div className={`${styles.secondBody}  `}>
            {diamondLogo}
            <div className={`${styles.firstParagraph} mt-6`}>
              A dedicated DevCon team helps us constantly innovate while keeping
              the business context of the customer front and centre.
            </div>
            <div className={`${styles.secondParagraph}`}>
              Our apps are helping customers in their digital transformation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
