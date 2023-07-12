import React, { useContext, useState } from "react";
import Modal from "react-modal";
import jQuery from "jquery";

import ModalCloseButton from "./ModalCloseButton";

import { ModalContext } from "./Donate";
import { DataContext, TeamContext } from "../context/Provider";
//TODO
const FormModal = () => {
  const [error, setError] = useState("");
  const { inputValue, setValue } = useContext(ModalContext);
  const { multiple, id } = useContext(DataContext);
  const teams = useContext(TeamContext);

  const closeModal = () => {
    setValue(-1);
  };
  const inputChange = () => {
    const input = parseInt(jQuery("#amount").val());
    setValue(input);
  };

  const formSubmitHandler = (e) => {
    const input = jQuery("#donationForm").serialize();

    e.preventDefault();
    jQuery.post("./data/submission.php", input, (error) => {
      setError(error);
      if (error === "") {
        closeModal();
      }
    });
  };

  return (
    <Modal
      isOpen={inputValue >= 0}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      <div className="modal-header">
        <ModalCloseButton />
      </div>
      <div className="modal-body">
        <form onSubmit={formSubmitHandler} id="donationForm">
          <input type="hidden" name="campaignId" value={id} />
          <input type="hidden" name="multiple" value={multiple} />
          <div className="copysponsorinfo div--box">
            <label htmlFor="totaldue">Donation Amount: </label>
            <input
              type="number"
              //TODO move style into scss
              style={{ width: "90px" }}
              id="amount"
              name="amount"
              className="amount"
              onChange={inputChange}
              value={inputValue}
            />
            {multiple > 1 && (
              <>
                x <span id="modalamtduplicate">{multiple}</span> =
                {inputValue * multiple}
              </>
            )}
            <span id="newtotal"></span>
          </div>
          <>
            <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input
                className="form-control"
                type="text"
                id="firstname"
                name="firstname"
                autoFocus
                required
                title="Your first name is required."
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="shownname">
                To display other name or Anonymous :
              </label>
              <input
                type="text"
                id="shownname"
                name="shownname"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address: </label>

              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City: </label>

              <input
                type="text"
                required
                id="city"
                name="city"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State: </label>

              <input
                type="text"
                required
                id="state"
                name="state"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Billing Zip Code: </label>

              <input
                type="number"
                id="zip"
                name="zip"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-control"
              />
            </div>
            <div id="ccinfodiv">
              <div className="form-group">
                <label htmlFor="ccnum">Credit Card #</label>

                <input
                  name="ccnum"
                  type="text"
                  required
                  className="form-control"
                  id="ccnum"
                  maxLength="16"
                />
              </div>
              <div className="form-group">
                <label htmlFor="ccmonth">Exp Date:</label>
              </div>
              <div className="form-group col-md-6 col-sm-12">
                <label htmlFor="ccmonth">Exp Month</label>
                <input
                  type="number"
                  min={1}
                  max={12}
                  step={1}
                  name="ccmonth"
                  id="ccmonth"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group col-md-6 col-sm-12">
                <label htmlFor="ccyear">Exp Year</label>
                <input
                  type="number"
                  min={new Date().getFullYear() % 100}
                  max={(new Date().getFullYear() % 100) + 10}
                  step={1}
                  name="ccyear"
                  id="ccyear"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">3 Digit Security Code: </label>

                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  className="form-control"
                  required
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="notes">
                Message or Dedication (75 characters maximum):
              </label>
              <input
                type="text"
                name="notes"
                id="notes"
                maxLength="75"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="team">Select a Team</label>

              <select className="form-control" name="team" id="team">
                {teams.map((i) => (
                  <option value={i.id} key={i.id}>
                    {i.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <button
                type="submit"
                id="submitbtn"
                className=" btn btn-primary "
              >
                DONATE NOW
              </button>
            </div>
            {!!error && <p>{error}</p>}
          </>
        </form>
      </div>
      <div className="modal-footer">
        <ModalCloseButton />
      </div>
    </Modal>
  );
};

export default FormModal;
