import React from "react";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import FourthPage from "./FourthPage/FourthPage";
import FirstPage from "./FirstPage/FirstPage";
import Header from "../../../../Component/Header/Header";
import News from "../../../../Component/News/News";
import Footer from "../../../../Component/Footer/Footer";

const Analytics = () => {
  return (
    <>
      <Header />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <News />
      <Footer />
    </>
  );
};

export default Analytics;
