import React, { useState } from "react";
import FormModal from "./FormModal";

// import FormModal from "./FormModal";

const Donate: React.FC = () => {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className="div--box">
      <button
        type="submit"
        className="btn btn-primary btn-lg"
        onClick={() => setIsopen(true)}
      >
        DONATE
      </button>
      <FormModal isOpen={isOpen} closeModal={() => setIsopen(false)} />
    </div>
  );
};

export default Donate;
