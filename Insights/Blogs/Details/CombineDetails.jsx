import React from "react";
import Details from "./CEOAbout/Details";
import LandScapeDetails from "./LandScape/LandScapeDetails";
import MonitoringDetails from "./Monitoring/MonitoringDetails";
import FromDetails from "./FromDetails/FromDetails";
import Header from "../../../../Component/Header/Header";
import Footer from "../../../../Component/Footer/Footer";
import News from "../../../../Component/News/News";

const CombineDetails = () => {
  return (
    <div>
      <Header />
      <Details />
      <LandScapeDetails />
      <MonitoringDetails />
      <FromDetails />
      <News />
      <Footer />
    </div>
  );
};

export default CombineDetails;
