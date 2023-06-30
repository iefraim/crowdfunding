import React from "react";
import { useDispatch } from "react-redux";

let dispatch;

const donateNow = () => {
  dispatch({ type: "", item: 0 });
};

const DonationPresets = (props) => {
  dispatch = useDispatch();

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
