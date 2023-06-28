import React from "react";

const DonationPresets = (props) => {
  const donateNow = () => {
    props.dispatch({ type: "", item: 0 });
  };

  return (
    <div className="mt-4 text-center">
      <div className="col-12 mt-2">
        <button className="btn btn-primary " onClick={donateNow}>
          Donate Now!
        </button>
      </div>
    </div>
  );
};

export default DonationPresets;
