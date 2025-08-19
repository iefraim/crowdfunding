import React from "react";
import { CampaignContext } from "./Providers";
import ProgressBar from "./ProgressBar";

const Total: React.FC = () => {
  const {
    donations,
    data: { goal, bonus_goal = 0, multiple },
  } = React.use(CampaignContext);
  const totalDonations = donations.reduce(
    (prev, curr) => prev + curr.amount * curr.multiple,
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

      {totalDonations >= goal && (
        <>
          <h5 className="initialgoal">
            INITIAL GOAL OF ${goal.toLocaleString()} REACHED!
          </h5>
          <h5 className="newgoalwords">BONUS ROUND!</h5>
          {totalDonations < bonus_goal && (
            <div className="newgoal">
              ${totalDonations.toLocaleString()} out of $
              {(bonus_goal * 1).toLocaleString()} raised!
            </div>
          )}
        </>
      )}
      {totalDonations >= bonus_goal && (
        <div className="newgoal">
          Goal reached: ${totalDonations.toLocaleString()} raised!
        </div>
      )}
      <ProgressBar completed={Math.round((totalDonations / goal) * 100)} />
    </>
  );
};

export default Total;
