
import React from "react";
import "./Videoplayer.css";
import video2 from "../../Home/Videoplayer/Assets/1.mp4";

const Vedioplayer = () => {
  return (
    <div className="container">
    <div className="row">
          <div className="video-container">
            <video className="video1" src={video2} loop autoPlay muted>
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
  </div>
  )
}

export default Vedioplayer;
