import React from "react";
import "./FirstPage.css";
import blurImg from "./Assets/Why Analytics Blurred Image.png";
import vector2 from "./Assets/Vector 2.png";
import videowithLamp from "./Assets/Video with Lamp.mp4";

const FirstPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="First_1">
            <img src={blurImg} alt="" />
            <video src={videowithLamp} loop autoPlay muted>
              Your browser does not support HTML video.
            </video>
          </div>

          <div className="row">
            <h1 className="First_1-1">
              At <span>Stephen’s</span> Analytics
            </h1>
            <img src={vector2} alt="Vector 2" className="First_1-2" />
          </div>
          <hr className="First_hrTag" />
        </div>
      </div>
    </>
  );
};

export default FirstPage;
