import React, { createContext, useState } from "react";
import jQuery from "jquery";

import FormModal from "./FormModal";

export const ModalContext = createContext();
const Donate = () => {
  const [inputValue, setValue] = useState(-1);
  const openModal = (e) => {
    e.preventDefault();
    setValue(jQuery("#donationInput").val());
    jQuery("#donationInput").val("");
  };
  return (
    <ModalContext.Provider value={{ inputValue, setValue }}>
      <form onSubmit={openModal} className="div--box">
        <input type="number" min={1} id="donationInput" />
        <button tpye="submit">Donate Now!</button>
      </form>
      <FormModal />
    </ModalContext.Provider>
  );
};

export default Donate;
