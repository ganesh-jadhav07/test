import React, { useEffect, useState } from "react";

//componenet for full page scroll
import ReactPageScroller from "react-page-scroller";

//sections of home page
import CloudServices from "../../components/Home/CloudServices";
import InnovationServicesScreen from "../../components/Home/InnovationServicesScreen";
import Product from "../../components/Home/Product";
import CustomerReviews from "../../components/Home/CustomerReviews";

//data fetcher and api imports
import dataFetcher from "../../lib/wordpress/dataFetcher";
import { DEMO } from "../../lib/wordpress/api";


function Home() {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = (num) => {
    setCurrentPage(num);
  };
  const handleBeforePageChange = (num) => {
    console.log(num);
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
