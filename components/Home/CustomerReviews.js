import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import style from "./CustomerReviews.module.css";
import Contact from "../../public/images/home/Vector820.png";
import { customerReview } from "../../lib/wordpress/api";
import dataFetcher from "../../lib/wordpress/dataFetcher";

function CustomerReviews() {
  const [reviews, setReviews] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);

  // function for fetching the data
  const customer = async () => {
    const response = await dataFetcher(customerReview);
    const all_Posts = response.data;
    setReviews(all_Posts.reviews.nodes);
  };

  useEffect(() => {
    customer();
  }, []);

//   useEffect(() => {
//     const intervalID = setInterval(reviews, 5000);
//     return () => clearInterval(intervalID);
// }, [reviews])


  // function to go to next review
  const handleNext = () => {
    let count = (currentReview + 1) % reviews.length;
    setCurrentReview(count);
  };

  // function to go to prev review
  const handlePrev = () => {
    const reviewLen = reviews.length;
    let count = (currentReview + reviewLen - 1) % reviewLen;
    setCurrentReview(count);
  };

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
          {/* <div className={style.textblock}>
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
          </div> */}
          <div className={style.textblock}>
          <p className={style.text}>Bluepineapple has been a trusted partner for us . They are very professional, taking a consultative approach to all development requests. We look forward to our continued partnership with Bluepineapple.</p>
          </div>
          {/* setInterval(() => {
            <p
            dangerouslySetInnerHTML={{
              __html: reviews[currentReview].content,
            }}
          />
          }, 30000); */}

          {/* left and right arrow icons */}
          {/* <ChevronLeftIcon className={style.prev} onClick={handlePrev} />
          <ChevronRightIcon className={style.next} onClick={handleNext} /> */}

          <p className={style.quote}>“</p>
          <p className={style.reviewBy}>
            {reviews === null || undefined
              ? "Data Loading"
              : reviews[currentReview].title}
          </p>
              <div className={`${style.lists} p-2`}>
                <p>hi</p>
              </div>
          {/* slider indicator */}
          {/* {reviews === null || undefined ? (
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
          )} */}
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
