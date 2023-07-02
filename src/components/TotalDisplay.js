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

  return (
    <div>
      {totalDonations < goal && (
        <h6>
          ${totalDonations.toLocaleString()} out of ${goal.toLocaleString()}{" "}
          raised!
        </h6>
      )}
      {totalDonations >= goal && (
        <h6>Goal reached with ${totalDonations.toLocaleString()} raised!</h6>
      )}
      <ProgressBar completed={Math.round((totalDonations / goal) * 100)} />
    </div>
  );
};

export default TotalDisplay;
