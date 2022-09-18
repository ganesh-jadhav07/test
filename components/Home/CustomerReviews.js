import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import style from "./screen4.module.css";

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
          <p className={style.text}>{review[currentReview].title}</p>
          <ChevronLeftIcon className={style.next} onClick={handleNext} />
          <ChevronRightIcon className={style.prev} onClick={handlePrev} />
          <p className={style.comma}>“</p>
          <p className={style.foot}>BitSight Technologies</p>
          <div className={style.lists}>
            <ul>
              <li
                className={style.rec1}
                style={{ left: "40%", top: "0.4rem" }}
              />
              <li
                className={style.rec2}
                style={{ left: "42.5%", top: "0.1rem" }}
              />
              <li
                className={style.rec2}
                style={{ left: "45%", bottom: "0.3rem" }}
              />
              <li
                className={style.rec2}
                style={{ left: "48%", bottom: "0.7rem" }}
              />
              <li
                className={style.rec2}
                style={{ left: "50.5%", bottom: "1.7rem" }}
              />
              <li
                className={style.rec2}
                style={{ left: "53%", bottom: "2.7rem" }}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
