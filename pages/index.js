import React, { useEffect, useState, useContext } from "react";

//componenet for full page scroll
import ReactPageScroller from "react-page-scroller";
import { useDispatch } from "react-redux";
import { increment } from "../lib/Redux/slice";

//sections of home page
import CloudServices from "../components/Home/CloudServices";
import InnovationServicesScreen from "../components/Home/InnovationServicesScreen";
import Product from "../components/Home/Product";
import CustomerReviews from "../components/Home/CustomerReviews";

//data fetcher and api imports
import dataFetcher from "../lib/wordpress/dataFetcher";
import { HOMEPAGE } from "../lib/wordpress/api";
import { navItems } from "../lib/Redux/navSlice";

function Home(props) {
  // console.log("***************");
  console.log(props.all_Posts.navigations);
  const dispatch = useDispatch();
  const navigationData =props.all_Posts.navigations.nodes.map(data => data);
  console.log('navigationData: ', navigationData);

  const [currentPage, setCurrentPage] = useState(0);
   


  dispatch(navItems(navigationData))

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
      animationTimer={2000}
      transitionTimingFunction="ease-in-out"
    >
      <CloudServices services={props.all_Posts} />
      <InnovationServicesScreen innovation={props.all_Posts} />
      <Product products={props.all_Posts} />
      <CustomerReviews reviews={props.all_Posts} />
    </ReactPageScroller>
  );
}

export default Home;

export async function getStaticProps() {
  const response = await dataFetcher(HOMEPAGE);
  console.log(response);
  const all_Posts = response.data;
  // console.log("All posts...  " + all_Posts);
  return {
    props: { all_Posts },
  };
}
