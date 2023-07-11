import React, { useContext } from "react";
import Modal from "react-modal";

import { ModalContext } from "./Donate";
//TODO
const FormModal = () => {
  const { inputValue, setValue } = useContext(ModalContext);

  const closeModal = () => {
    setValue(-1);
  };

  return (
    <Modal
      isOpen={inputValue >= 0}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      {inputValue}
    </Modal>
  );
};

export default FormModal;
