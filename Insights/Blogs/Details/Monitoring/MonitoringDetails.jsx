import React from "react";
import "../LandScape/LandScapDetails.css";

const MonitoringDetails = () => {
  return (
    <div>
      <div className="head-line">
        <h5>Monitoring Costs: A Strategic Approach for CEOs</h5>
      </div>
      <div className="details-in-page">
        <p>
          A robust decision-making process not only clarifies roles and goals
          but also determines the timeframe and cost expectations. CEOs must
          delineate “who to task,” “what metrics to set,” “what timeframe to
          establish,” and “what cost expectations to create.” By embedding these
          parameters into the decision-making flow, CEOs can assert strategic
          control over GenAI project costs.
        </p>

        <p>
          <span className="span-header">
            Monitoring Costs in the Execution of GenAI Strategies:
          </span>{" "}
          CEOs must have a comprehensive dashboard to monitor all GenAI projects
          within their organisations. This includes tracking model training
          costs, inference expenses, fine-tuning expenditures, cloud usage
          costs, employee salaries, operational expenses, investments in
          foundational hardware, and more. Thanks to advancements in Cloud and
          GenAI technologies, dashboard developers can automate weekly reports
          for CEOs and set up alerts for sudden events, such as when a
          customer-facing application unexpectedly consumes significant
          resources, indicating a potential business opportunity. A chatbot can
          also be easily set up to answer CEO’s questions.
        </p>

        <p>
          In conclusion, CEOs must not overlook the intricacies of GenAI costs.
          CEOs must grasp and integrate the multifaceted costs into their
          strategic vision, acknowledging nuances such as inference cost,
          fine-tuning cost, prompt engineering cost, cloud expenses, talent
          costs, and operation costs.{" "}
        </p>

        <p>
          <span>Citation</span> <br /> Technology and analytical insights
          published by Hugo Huang - November 15, 2023 - Harvard Business Review.
        </p>
      </div>
    </div>
  );
};

export default MonitoringDetails;
