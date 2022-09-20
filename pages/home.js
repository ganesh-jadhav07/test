import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import CloudServices from "../components/Home/CloudServices";
import InnovationServicesScreen from "../components/Home/InnovationServicesScreen";
import Product from "../components/Home/Product";
import CustomerReviews from "../components/Home/CustomerReviews";
import dataFetcher from "../lib/wordpress/dataFetcher";
import { DEMO } from "../lib/wordpress/api";

function Home(props) {
  console.log(props);
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
      customPageNumber={currentPage}>
      <CloudServices />
      <InnovationServicesScreen />
      {/* <Product /> */}
      <CustomerReviews />
    </ReactPageScroller>
  );
}

export default Home;

//function to fetch data

export async function getStaticProps() {
  const response = await dataFetcher(`query HomeSection_2_Query { 

    page(id: "cG9zdDo5") { 
    title 
     homepage_customfields { 
     section2Title 
    section2Content 
  
      } 
  
    } 
  
  }`);
  console.log(response);
  const all_Posts = response.data;

  return {
    props: { all_Posts },
  };
}
