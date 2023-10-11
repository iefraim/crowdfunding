import React, { useContext } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import { DonationContext, DataContext } from "../context/Provider";
const Total = () => {
  const donations = useContext(DonationContext);
  const { goal, bonus_goal } = useContext(DataContext);
  const totalDonations = donations.reduce(
    (prev, curr) => prev + curr.amount * 1,
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

      {totalDonations >= goal && totalDonations < bonus_goal && (
        <>
          <h5>INITIAL GOAL OF ${goal} REACHED!</h5>
          <h5>NEW GOAL!</h5>
          <h6>
            ${totalDonations.toLocaleString()} out of $
            {(bonus_goal * 1).toLocaleString()} raised!
          </h6>
        </>
      )}
      {totalDonations >= bonus_goal && (
        <h6>Goal reached with ${totalDonations.toLocaleString()} raised!</h6>
      )}
      <ProgressBar
        completed={Math.round((totalDonations / goal) * 100)}
        barContainerClassName="barUncompleted"
      />
    </>
  );
};

export default Total;
