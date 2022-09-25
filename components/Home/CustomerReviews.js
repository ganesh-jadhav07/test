import React, { useEffect, useState,useContext} from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import style from "./CustomerReviews.module.css";
import Contact from "../../public/images/home/Vector820.png";
import { customerReview } from "../../lib/wordpress/api";
import dataFetcher from "../../lib/wordpress/dataFetcher";
let count = 0;

function CustomerReviews() {
  const [reviews, setReviews] = useState(null);
  
 
  // function for fetching the data
  const customer = async () => {
    const response = await dataFetcher(customerReview);
    const all_Posts = response.data;
    setReviews(all_Posts.reviews.nodes)
  };

  // console.log(reviews);
  useEffect(() => {
    customer();
  }, []);

  const [currentReview, setReview] = useState(0);
  
  // function to go to next review
  const handleNext = () => {
    count = (count + 1) % reviews.length;
    setReview(count);
  };

  // function to go to prev review
  const handlePrev = () => {
    const reviewLen = reviews.length;
    count = (currentReview + reviewLen - 1) % reviewLen;
    setReview(count);
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
          <div className={style.textblock}>
            <div className={style.text}>{reviews === null || undefined ? "Data Loading" : <p dangerouslySetInnerHTML={{ __html: reviews[currentReview].content }}  />} </div>
          </div>

          {/* left and right arrow icons */}
          <ChevronLeftIcon className={style.prev} onClick={handlePrev} />
          <ChevronRightIcon className={style.next} onClick={handleNext} />

          <p className={style.quote}>“</p>
          <p className={style.reviewBy}>{reviews === null || undefined ? "Data Loading" : reviews[currentReview].title}</p>

          {/* slider indicator */}
          <div className={`${style.lists} p-2`}>
            {Array.from({ length: 4 }).map((item, index) => (
              <div key={index} onClick={() => currentReview(index)}>
                {currentReview === index ? (
                  <img src="images/blue.png" className={style.r1} />
                ) : (
                  <img src="images/gray.png" className={style.r1} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;