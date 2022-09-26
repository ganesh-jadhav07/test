import React, { useEffect, useState, useContext } from "react";

//componenet for full page scroll
import ReactPageScroller from "react-page-scroller";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, update } from "../../lib/Redux/slice";

//sections of home page
import CloudServices from "../../components/Home/CloudServices";
import InnovationServicesScreen from "../../components/Home/InnovationServicesScreen";
import Product from "../../components/Home/Product";
import CustomerReviews from "../../components/Home/CustomerReviews";

//data fetcher and api imports
// import dataFetcher from "../../lib/wordpress/dataFetcher";
// import { DEMO } from "../../lib/wordpress/api";

function Home() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(increment(currentPage));
  }, [currentPage]);

  const handlePageChange = (num) => {
    setCurrentPage(num);
  };
  const handleBeforePageChange = (num) => {
    // console.log(num);
  };
  return (
    <ReactPageScroller
      pageOnChange={handlePageChange}
      onBeforePageScroll={handleBeforePageChange}
      customPageNumber={currentPage}
    >
      <CloudServices />
      <InnovationServicesScreen />
      <Product />
      <CustomerReviews />
    </ReactPageScroller>
  );
}

export default Home;
