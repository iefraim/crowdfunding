import React, { useContext } from "react";

import { ModalContext } from "./Donate";
const ModalCloseButton = (): React.JSX.Element | false => {
  const { setIsopen } = useContext(ModalContext);
  if (!setIsopen) return false;
  const closeModal = (): void => {
    setIsopen(false);
  };
  return (
    <button onClick={closeModal} className="btn btn-secondary btn-sm">
      X
    </button>
  );
};

export default ModalCloseButton;
