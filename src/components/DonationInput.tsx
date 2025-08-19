import React from "react";
import { CampaignContext } from "./Providers";

const DonationInput: React.FC<{ error?: string; value?: string }> = ({
  error,
  value,
}) => {
  const {
    data: { multiple },
  } = React.use(CampaignContext);
  return (
    <div className="copysponsorinfo div--box form-group mb-4">
      <label>Donation Amount:</label>
      <div className="center input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
        </div>
        <input
          type="number"
          name="amount"
          id="amount"
          min="5"
          value={value}
          className={`amount ${error ? "is-invalid" : ""}`}
        />
        <div className="input-group-append">
          <span className="input-group-text">.00</span>
        </div>
        {error && <span className="invalid-feedback">{error}</span>}
        {multiple > 1 && (
          <div className="multiple-text">
            x <span id="modalamtduplicate">{multiple}</span> = $
            {(parseInt(value ?? "0") || 0) * multiple}
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationInput;
