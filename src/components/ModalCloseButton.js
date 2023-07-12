import React, { useContext } from "react";

import { ModalContext } from "./Donate";
const ModalCloseButton = () => {
  const { setValue } = useContext(ModalContext);
  const closeModal = () => {
    setValue(-1);
  };
  return (
    <button onClick={closeModal} className="btn btn-secondary btn-sm">
      X
    </button>
  );
};

export default ModalCloseButton;
