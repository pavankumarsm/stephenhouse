import React from "react";
import "./ThirdPage.css";
import rectangle from "../Assets/Rectangles.jpg";
import ThirdVideo1 from "../Assets/3.mp4";
import ThirdVideo3 from "../Assets/5.mp4";
import ThirdVideo4 from "../Assets/4.mp4";
import ThirdVideo2 from "../Assets/6.mp4";
import ThirdVideo5 from "../Assets/2.0.mp4";

const ThirdPage = () => {
  return (
    <>
      <div className="container my-5 third_container">
        <div className="row">
          <div className="col-lg-1 col-md-12"></div>
          <div className="col-lg-10 col-md-12">
            <div className="container Third_1">
              <h1>
                {" "}
                <span className="span_third">FIVE</span> dimensions of Data
                Analytics
              </h1>
              <p>
                Establishing goals does not have to be a complex process and
                will provide significant value. Ensure your metrics are
                strategic and tactical. Align your AI strategy with your key
                performance indicators (KPIs) to measure success directly to
                your target market, whether internal or external.{" "}
              </p>

              <div className="row">
                <div className="col-lg-1 col-md-12"></div>
                <div className="col-lg-10 col-md-12 third_2 mt-5">
                  {/* <div className="row">
                    <div className="col-lg-6  col-md-6 col-sm-12 row_third1">
                      <div className="box1_third">
                        <div className="col-lg-3 col-md-3 col-sm-5 ">
                          <span className="box_thirdAll1">01</span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-7 ">
                          <h4 className="box_thirdAll2">
                            Descriptive Analytics :
                          </h4>
                          <p className="box_thirdAll3">
                            summarise <br />
                            information
                          </p>
                        </div>
                      </div>
                      <div className="box3_third">
                        <div className="col-lg-3 col-md-3 col-sm-5 ">
                          <span className="box_thirdAll1">03</span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-7 ">
                          <h4 className="box_thirdAll2">
                            Diagnostic Analytics :
                          </h4>
                          <p className="box_thirdAll3">uncover trends</p>
                        </div>
                      </div>
                      <div className="box4_third">
                        <div className="col-lg-3 col-md-3 col-sm-5 ">
                          <span className="box_thirdAll1">04</span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-7 ">
                          <h4 className="box_thirdAll2">
                            Predictive Analytics :
                          </h4>
                          <p className="box_thirdAll3">predict future trends</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 row_third2">
                      <div className="box2_third">
                        <div className="col-lg-3 col-md-3 col-sm-5 ">
                          <span className="box_thirdAll1">02</span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-7 ">
                          <h4 className="box_thirdAll2">
                            Prescriptive Analytics :
                          </h4>
                          <p className="box_thirdAll3">
                            recommend specific actions
                          </p>
                        </div>
                      </div>
                      <div className="box5_third">
                        <div className="col-lg-3 col-md-3 col-sm-5 ">
                          <span className="box_thirdAll1">05</span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-7 ">
                          <h4 className="box_thirdAll2">
                            Artificial Intelligence :
                          </h4>
                          <p className="box_thirdAll3">
                            replicates human intellect through machine learning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <img src={rectangle} alt="" />
                  <div>
                    <div className="third_div_1">
                      <span className="box_thirdAll1">01</span>
                      <h5 className="box_thirdAll2">
                        Descriptive <br /> Analytics :
                      </h5>
                      <p className="box_thirdAll3">
                        summarise <br />
                        information
                      </p>
                      <video
                        className="ThirdVideo1"
                        src={ThirdVideo1}
                        loop
                        autoPlay
                        muted
                      >
                        Your browser does not support HTML video.
                      </video>
                    </div>
                    <div className="third_div_3">
                      <span className="box_thirdAll1_1">03</span>
                      <h5 className="box_thirdAll2_1">
                        Diagnostic
                        <br /> Analytics :
                      </h5>
                      <p className="box_thirdAll3_1">uncover trends</p>
                      <video
                        className="ThirdVideo2"
                        src={ThirdVideo3}
                        loop
                        autoPlay
                        muted
                      >
                        Your browser does not support HTML video.
                      </video>
                    </div>
                    <div className="third_div_4">
                      <span className="box_thirdAll1_10">04</span>
                      <h5 className="box_thirdAll2_10">
                        Predictive
                        <br /> Analytics :
                      </h5>
                      <p className="box_thirdAll3_10">predict future trends</p>
                      <video
                        className="ThirdVideo3"
                        src={ThirdVideo4}
                        loop
                        autoPlay
                        muted
                      >
                        Your browser does not support HTML video.
                      </video>
                    </div>
                  </div>
                  <div>
                    <div className="third_div_4">
                      <span className="box_thirdAll1_4">02</span>
                      <h5 className="box_thirdAll2_4">
                        Prescriptive <br /> Analytics :
                      </h5>
                      <p className="box_thirdAll3_4">
                        recommend specific <br /> actions
                      </p>
                      <video
                        className="ThirdVideo4"
                        src={ThirdVideo2}
                        loop
                        autoPlay
                        muted
                      >
                        Your browser does not support HTML video.
                      </video>
                    </div>
                    <div className="third_div_5">
                      <span className="box_thirdAll1_5">05</span>
                      <h5 className="box_thirdAll2_5">
                        Artificial Intelligence :
                      </h5>
                      <p className="box_thirdAll3_5">
                        replicates human <br /> intellect through <br /> machine
                        learning.
                      </p>
                      <video
                        className="ThirdVideo5"
                        src={ThirdVideo5}
                        loop
                        autoPlay
                        muted
                      >
                        Your browser does not support HTML video.
                      </video>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-md-12"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-1 col-md-12"></div>
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
