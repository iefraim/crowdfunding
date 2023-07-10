import React from "react";
import { useSelector } from "react-redux";
import ProgressBar from "@ramonak/react-progress-bar";

const TotalDisplay = () => {
  const donations = useSelector((state) => state.donations);
  const totalDonations = donations.reduce(
    (prev, curr) => prev + parseInt(curr.amount),
    0
  );
  //TODO check all styles before countdown starts and after goal is reached
  //TODO Make progres bar double as thick
  //TODO color on bar should be $primary
  const goal = parseInt(useSelector((state) => state.data.goal));
  const bonusGoal = parseInt(useSelector((state) => state.data.bonus_goal));
  return (
    <div>
      {totalDonations < goal && (
        <div>
          <div className="totalAmount">${totalDonations.toLocaleString()}</div>{" "}
          of
          <div className="goal"> ${goal.toLocaleString()} </div>
        </div>
      )}

      {totalDonations >= goal && totalDonations < bonusGoal && (
        <div>
          <h5>NEW GOAL!</h5>
          <h6>
            ${totalDonations.toLocaleString()} out of $
            {bonusGoal.toLocaleString()} raised!
          </h6>
        </div>
      )}
      {totalDonations >= bonusGoal && (
        <h6>Goal reached with ${totalDonations.toLocaleString()} raised!</h6>
      )}
      <ProgressBar completed={Math.round((totalDonations / goal) * 100)} />
    </div>
  );
};

export default TotalDisplay;
