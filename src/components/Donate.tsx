import React, { createContext, useState } from "react";

import FormModal from "./FormModal";

export const ModalContext = createContext<{
  inputValue: number;
  setValue: React.Dispatch<React.SetStateAction<number>> | undefined;
  isOpen: boolean;
  setIsopen: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}>({ inputValue: 0, setValue: undefined, isOpen: false, setIsopen: undefined });
const Donate = (): React.JSX.Element | false => {
  const [inputValue, setValue] = useState(0);
  const [isOpen, setIsopen] = useState(false);
  const openModal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsopen(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = parseInt(e.target.value);
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
