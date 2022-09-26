import React, { useEffect, useState } from "react";
import style from "./CustomerReviews.module.css";

let count = 0;

function CustomerReviews(props) {
  const data = props.reviews.reviews.nodes;
  const img = props.reviews.page.homepage_customfields.section4Bg.sourceUrl;
  let blueDiamond = props.reviews.post.icons.blueDiamond.sourceUrl;
  let greyDiamond = props.reviews.post.icons.greyDiamond.sourceUrl;
  const [currentReview, setCurrentReview] = useState(0);
  const [pause, setPause] = useState(false);

  // function to go to next review
  const handleNext = () => {
    count = (count + 1) % props.reviews.reviews.nodes.length;
    setCurrentReview(count);
  };

  useEffect(() => {
    const next = setInterval(() => {
      if (
        currentReview < (data !== null ? data.length : 0) &&
        pause === false
      ) {
        handleNext();
      }
    }, 3000);

    return () => clearInterval(next);
  });

  return (
    <div className={style.outerCard}>
      {/* image div */}
      <div className={style.leftCard}>
        <img src={img} className={style.img} alt="loading.png" />
      </div>

      {/* content card */}
      <div className={style.rightCard}>
        <div className={style.reviewCard}>
          <h1 className={style.reviewTitle}>
            {props.reviews.page.homepage_customfields.section4Title}
          </h1>

          {/* main content */}
          <div
            className={style.textblock}
            onMouseEnter={() => {
              setPause(true);
            }}
            onMouseLeave={() => {
              setPause(false);
            }}
          >
            <div className={style.text}>
              {data === null || undefined ? (
                "Data Loading"
              ) : (
                <p
                  dangerouslySetInnerHTML={{
                    __html: data[currentReview].content,
                  }}
                />
              )}{" "}
            </div>
          </div>

          <p className={style.quote}>“</p>
          <p className={style.reviewBy}>
            {data === null || undefined
              ? "Data Loading"
              : data[currentReview].title}
          </p>

          {/* slider indicator */}
          {data === null || undefined ? (
            "Loading"
          ) : (
            <div className={`${style.lists} p-2`}>
              {data.map((item, index) => (
                <div key={item.id} onClick={() => setCurrentReview(index)}>
                  {currentReview === index ? (
                    <img src={blueDiamond} className={style.r1} />
                  ) : (
                    <img src={greyDiamond} className={style.r1} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
