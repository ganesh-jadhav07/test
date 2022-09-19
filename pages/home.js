import React from "react";
import CloudServices from "../components/Home/CloudServices";
import InnovationServicesScreen from "../components/Home/InnovationServicesScreen";
import Products from "../components/Home/Products";
import CustomerReviews from "../components/Home/CustomerReviews";

function Home() {
  return (
    <div>
      {/* <CloudServices /> */}
      <InnovationServicesScreen />
      {/* <Products /> */}
      <CustomerReviews />
    </div>
  );
}

export default Home;
