import React from "react";
import "./SecondPage.css";
import pic6 from "../Assets/Study.png";
import roadmap from "./Assets/Road Map With content.png";

const SecondPage = () => {
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-2 col-md-12"></div>
          <div className="col-lg-8 col-md-12 mb-5">
            <div className="Welcome_1">
              <h2>Welcome to the experience</h2>
              <p> where brand meets design, AI and analytics</p>
            </div>
            <div className="welcome_2">
              <p>
                Problem-solving is not just about finding answers, but also
                about asking more questions until we know what will determine
                success. Our focus is&nbsp; on helping you drive the right
                course of action, dispel ambiguity, & move ahead with confidence
                by bringing the best of design, AI & analytics
              </p>
              <div className="leave">
                <p># I Wouldn't Leave The House Without Analytics.</p>
                <img src={pic6} alt="" />
              </div>{" "}
            </div>
          </div>
          <div className="col-lg-2 col-md-12"></div>
          <div className="container">
            <div className="row welcome_3">
              <div className="welcome_4">
                <h2>
                  What <span>benefits will you gain</span> from partnering with
                  us ?
                </h2>
                {/* <p className="p_third" /> */}
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12 welcome_5 ">
                  <img src={roadmap} alt="" />
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-2 col-md-12 col-sm-12 Fourth1"></div>
                <div className="col-lg-8 col-md-12 col-sm-12 Fourth1">
                  <div className="Fourth2">
                    <p>Clean your data like you clean your office bag.</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12 col-sm-12 Fourth1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
