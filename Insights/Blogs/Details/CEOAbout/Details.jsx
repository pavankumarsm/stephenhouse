import React from "react";
import image from "../assets/Image.png";
import "./Details.css";

const Details = () => {
  return (
    <div className="display">
      <div className="details-content-area">
        <div className="text-content">
          <h1>What CEOs Need to Know About the Costs of Adopting GenAI.</h1>
          <p>
            GenAI is poised to revolutionize business models, a trend consistent
            with the historical pattern where core technological innovations
            disrupt prevailing business paradigms.
          </p>
          <p>
            Throughout business history, the advent of pivotal technologies has
            consistently heralded disruptive shifts. Enterprises that fail to
            adapt to these innovations face extinction.
          </p>
          <p>
            This dynamic force is reshaping industries, compelling established
            entities to either evolve or face obsolescence. As this
            transformation unfolds, businesses must navigate the ever-shifting
            landscape, adapting and innovating to harness the power of GenAI,
            ensuring their relevance and competitiveness in this new era.
          </p>
        </div>
        <div className="image-content-area">
          <img src={image} alt="image" />
        </div>
      </div>
      <p className="last-line">
        This exodus highlights a critical issue: The insufficient consideration
        of full lifecycle costs during the strategic planning phase.
      </p>
    </div>
  );
};

export default Details;
