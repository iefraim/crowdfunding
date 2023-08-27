import React, { createContext, useState } from "react";
import jQuery from "jquery";

import FormModal from "./FormModal";

export const ModalContext = createContext();
const Donate = () => {
  const [inputValue, setValue] = useState("");
  const [isOpen, setIsopen] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    setIsopen(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(value);
  };
  return (
    <ModalContext.Provider value={{ inputValue, setValue, isOpen, setIsopen }}>
      <form onSubmit={openModal} className="div--box">
        <input
          type="number"
          min={1}
          id="donationInput"
          onChange={handleChange}
          value={inputValue}
        />
        <button type="submit" className="btn btn-primary btn-sm">
          DONATE
        </button>
      </form>
      <FormModal />
    </ModalContext.Provider>
  );
};

export default Donate;
