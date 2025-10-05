import React from "react";
import "./FourthPage.css";

const FourthPage = () => {
  return (
    <>
      <div className="container-fluid Fourth-container">
        <div className="row">
          <div className="col-lg-2 col-md-12 col-sm-12 Fourth3"></div>
          <div className="col-lg-8 col-md-12 col-sm-12 Fourth3">
            <div className="Fourth4">
              <h1>Understanding Flow Charts & Diagrams</h1>
              <p className="Fourth5">
                Familiarise the analytical flow chart{" "}
                <span>
                  Learn more{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-arrow-up-right font-weight-bold"
                    viewBox="0 0 17 17"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </span>
              </p>
              <p className="Fourth6">
                Our primary focus is to produce in-depth resources that explore
                trends, best practices, & strategies in analytics. Provide
                valuable insights into how businesses can leverage analytics to
                gain a competitive edge in industry.
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12 Fourth3"></div>
        </div>
      </div>
    </>
  );
};

export default FourthPage;
