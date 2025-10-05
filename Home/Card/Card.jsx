import React from "react";
import "./Card.css";
import cardimg1 from "../../Home/Card/Assets/1.mp4";
import cardimg2 from "../../Home/Card/Assets/2.mp4";
import cardimg3 from "../../Home/Card/Assets/3.mp4";

const Card = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "whitesmoke" }}>
      <div className="row d-flex justify-content-center g-2 align-items-stretch pt-5">
        <div className="col-4 mb-4 mx-0">
          <div className="card border-0">
            <video
              src={cardimg1}
              className="card-img-top"
              alt="..."
              loop
              autoPlay
              muted
            />
            <div className="card-body1">
              <h5 className="card-title">Improve Decision Making</h5>
              <p className="card-text mt-4">
                AI algorithms can uncover patterns, trends, and correlations
                that may be difficult for humans to identify manually. This
                leads to more accurate and comprehensive data analysis,
                providing deeper insights and enabling data-driven
                decision-making.
              </p>
            </div>
          </div>
        </div>

        <div className="col-4 mb-4">
          <div className="card border-0">
            <video
              src={cardimg2}
              className="card-img-top"
              alt="..."
              loop
              autoPlay
              muted
            />
            <div className="card-body1">
              <h5 className="card-title">Automate Repetitive Tasks</h5>
              <p className="card-text mt-4">
                AI automates repetitive and time-consuming tasks. Thus, data
                experts can focus on interpreting results, formulating
                strategies, and generating innovative ideas. Automation also
                reduces the risk of human error, leading to more reliable and
                consistent results.
              </p>
            </div>
          </div>
        </div>

        <div className="col-4 mb-4">
          <div className="card border-0">
            <video
              src={cardimg3}
              className="card-img-top"
              alt="..."
              loop
              autoPlay
              muted
            />
            <div className="card-body1">
              <h5 className="card-title">Identify New Opportunities</h5>
              <p className="card-text mt-4">
                It can uncover hidden opportunities and potential areas for the
                growth of new business. AI algorithms can identify market
                trends, customer segments, and emerging patterns that may not be
                apparent through traditional analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
