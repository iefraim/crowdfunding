import React, { createContext, useState } from "react";
import jQuery from "jquery";

import FormModal from "./FormModal";

export const ModalContext = createContext();
const Donate = () => {
  const [inputValue, setValue] = useState(-1);
  const openModal = () => {
    setValue(parseInt(0 + jQuery("#donationInput").val()));
    jQuery("#donationInput").val("");
  };
  return (
    <ModalContext.Provider value={{ inputValue, setValue }}>
      <input type="number" min={1} id="donationInput" />
      <button onClick={openModal}>Donate Now!</button>
      <FormModal />
    </ModalContext.Provider>
  );
};

export default Donate;
