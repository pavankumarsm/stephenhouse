import React from "react";

import "./FromDetails.css";

const FromDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="connect-me1">
          <form className="container mt-4">
            <h2 className="textprimary">Start your Stephen's Pilot today</h2>
            <p className="delivery1">
              We're certain we excel in delivering exceptional results. This
              could be a pivotal shift for your business. Reach out to <br /> us
              today, schedule a call where we'll demonstrate how our solutions
              can address your challenges & boost your ROI.
            </p>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name: <span className="star_color"> *</span>{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="company" className="form-label">
                  Company: <span className="star_color"> *</span>{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  name="company"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Work Email Address: <span className="star_color"> *</span>{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="officeNumber" className="form-label">
                  Office Number: <span className="star_color"> *</span>{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="officeNumber"
                  name="officeNumber"
                />
              </div>
            </div>

            <div className=" mb-3">
              <label htmlFor="message" className="form-label">
                Message: <span className="star_color"> *</span>{" "}
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="1"
              ></textarea>
            </div>

            <button type="submit" className="custombtn">
              Connect me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FromDetails;
