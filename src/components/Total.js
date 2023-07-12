import React, { useContext } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import { DonationContext, DataContext } from "../context/Provider";
//TODO
const Total = () => {
  const donations = useContext(DonationContext);
  const { goal, bonus_goal } = useContext(DataContext);
  const totalDonations = donations.reduce(
    (prev, curr) => prev + parseInt(curr.amount),
    0
  );

  return (
    <>
      {totalDonations < goal && (
        <div>
          <div className="totalAmount">${totalDonations.toLocaleString()}</div>{" "}
          of
          <div className="goal"> ${parseInt(goal).toLocaleString()} </div>
        </div>
      )}

      {totalDonations >= goal && totalDonations < bonus_goal && (
        <div>
          <h5>NEW GOAL!</h5>
          <h6>
            ${totalDonations.toLocaleString()} out of $
            {parseInt(bonus_goal).toLocaleString()} raised!
          </h6>
        </div>
      )}
      {totalDonations >= bonus_goal && (
        <h6>Goal reached with ${totalDonations.toLocaleString()} raised!</h6>
      )}
      <ProgressBar completed={Math.round((totalDonations / goal) * 100)} />
    </>
  );
};

export default Total;
