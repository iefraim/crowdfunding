import React, { useContext } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import { DonationContext, DataContext } from "../context/Provider";
const Total: React.FC = () => {
  const donations = useContext(DonationContext);
  const { goal, bonus_goal } = useContext(DataContext);
  const bonusGoal = bonus_goal ? bonus_goal : 0; //if not null
    const { multiple } = useContext(DataContext);
  const totalDonations = donations.reduce(
    (prev, curr) => prev + curr.amount * multiple,
    0
  );

  return (
    <>
      {totalDonations < goal && (
        <>
          <div className="total__amount">
            ${totalDonations.toLocaleString()}
          </div>
          of
          <div className="total__goal">${(goal * 1).toLocaleString()}</div>
        </>
      )}

      {totalDonations >= goal  && (
        <>
          <h5 className="initialgoal">INITIAL GOAL OF ${goal.toLocaleString()} REACHED!</h5>
          <h5 className="newgoalwords">BONUS ROUND!</h5>
          {totalDonations < bonusGoal && (
          <div className="newgoal">
            ${totalDonations.toLocaleString()} out of $
            {(bonusGoal * 1).toLocaleString()} raised!
          </div>
          )}
        </>
      )}
      {totalDonations >= bonusGoal && (
          <div className="newgoal">Goal reached: ${totalDonations.toLocaleString()} raised!</div>
      )}
      <ProgressBar
        completed={Math.round((totalDonations / goal) * 100)}
        barContainerClassName="barUncompleted"
      />
    </>
  );
};

export default Total;
