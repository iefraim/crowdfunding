import React, { useContext } from "react";

import { ModalContext } from "./Donate";
const ModalCloseButton = () => {
  const { setIsopen } = useContext(ModalContext);
  const closeModal = () => {
    setIsopen(false);
  };
  return (
    <button onClick={closeModal} className="btn btn-secondary btn-sm">
      X
    </button>
  );
};

export default ModalCloseButton;
