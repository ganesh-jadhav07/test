import React from "react";
import CloudServices from "../components/Home/CloudServices";
import InnovationServicesScreen from "../components/Home/InnovationServicesScreen";
import Product from "../components/Home/Product";
import CustomerReviews from "../components/Home/CustomerReviews";

function Home() {
  return (
    <div>
      <CloudServices />
      <InnovationServicesScreen />
      <Product />
      <CustomerReviews />
    </div>
  );
}

export default Home;
