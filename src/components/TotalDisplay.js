import React from "react";
import { useSelector } from "react-redux";
import ProgressBar from "@ramonak/react-progress-bar";

const TotalDisplay = () => {
  const donations = useSelector((state) => state.donations);
  const totalDonations = donations.reduce(
    (prev, curr) => prev + parseInt(curr.amount),
    0
  );
  const goal = parseInt(useSelector((state) => state.data.goal));
  const bonusGoal = parseInt(useSelector((state) => state.data.bonus_goal));
  //TODO between first and second goal add a line that says 'new goal: _____
  //TODO after after second goal write 'we've reach our goal
  return (
    <div>
      {totalDonations < goal && (
        <h6>
          ${totalDonations.toLocaleString()} out of ${goal.toLocaleString()}{" "}
          raised!
        </h6>
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
