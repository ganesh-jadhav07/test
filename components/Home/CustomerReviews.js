import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import style from "./CustomerReviews.module.css";

let count = 0;
function CustomerReviews() {
  const [currentReview, setReview] = useState(0);
  const review = [
    {
      id: 1,
      title:
        "Bluepineapple has been a trusted partner for us. They are very professional, taking a consultative approach to all development requests. We look forward to our continued partnership with Bluepineapple.",
    },
    {
      id: 2,
      title:
        "Very proactive and responsive. Always willing to go the extra mile to support the end customer.",
    },
    {
      id: 3,
      title:
        " What I really liked was their flexibility especially when we ran into unexpected issues. They were meticulous in following up on feedback.",
    },
    {
      id: 4,
      title:
        "Quick to onboard and embed with the team. I hope we get to work together in the future.",
    },
  ];

  const handleNext = () => {
    count = (count + 1) % review.length;
    setReview(count);
  };
  const handlePrev = () => {
    const productLength = review.length;
    count = (currentReview + productLength - 1) % productLength;
    setReview(count);
  };
  return (
    <div className={style.card}>
      <div className={style.card1}>
        <img src="Vector.png" className={style.img} alt="loading.png" />
      </div>
      <div className={style.card2}>
        <div className={style.innercard}>
          <h1 className={style.heading}>Customer Speak</h1>
          <div className={style.textblock}>
            <p className={style.text}>{review[currentReview].title}</p>
          </div>
          <ChevronLeftIcon  className={style.prev} onClick={handlePrev}   />
          <ChevronRightIcon className={style.next} onClick={handleNext} />
          <p className={style.comma}>“</p>
          <p className={style.foot}>BitSight Technologies</p>
          <div className={style.lists}>
            {Array.from({ length: 4 }).map((item, index) => (
              <div
                onClick={() => currentReview(index)}>
                
                 { currentReview === index ? (
                    <img src="images/blue.png" className={style.r1} />
                  ) : (
                    <img src="images/gray.png" className={style.r1} />
                  )
          
               }
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
