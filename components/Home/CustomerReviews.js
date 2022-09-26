import React, { useEffect, useState } from "react";
import style from "./CustomerReviews.module.css";
import Contact from "../../public/images/home/Vector820.png";
import { customerReview } from "../../lib/wordpress/api";
import dataFetcher from "../../lib/wordpress/dataFetcher";

let count = 0;

function CustomerReviews() {
  const [reviews, setReviews] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [pause, setPause] = useState(false);

  // function for fetching the data

  useEffect(() => {
    (async () => {
      const response = await dataFetcher(customerReview);
      const all_Posts = response.data;
      setReviews(all_Posts.reviews.nodes);
    })();
  }, []);

  // function to go to next review

  const handleNext = () => {
    count = (count + 1) % reviews.length;
    console.log(count);
    setCurrentReview(count);
  };

  useEffect(() => {
    const next = setInterval(() => {
      if (
        currentReview < (reviews !== null ? reviews.length : 0) &&
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
        <img src={Contact.src} className={style.img} alt="loading.png" />
      </div>

      {/* content card */}
      <div className={style.rightCard}>
        <div className={style.reviewCard}>
          <h1 className={style.reviewTitle}>Customer Speak</h1>

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
              {reviews === null || undefined ? (
                "Data Loading"
              ) : (
                <p
                  dangerouslySetInnerHTML={{
                    __html: reviews[currentReview].content,
                  }}
                />
              )}{" "}
            </div>
          </div>

          <p className={style.quote}>“</p>
          <p className={style.reviewBy}>
            {reviews === null || undefined
              ? "Data Loading"
              : reviews[currentReview].title}
          </p>

          {/* slider indicator */}
          {reviews === null || undefined ? (
            "Loading"
          ) : (
            <div className={`${style.lists} p-2`}>
              {reviews.map((item, index) => (
                <div key={item.id} onClick={() => currentReview(index)}>
                  {currentReview === index ? (
                    <img src="images/blue.png" className={style.r1} />
                  ) : (
                    <img src="images/gray.png" className={style.r1} />
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
