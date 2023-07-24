import React, { useContext, useState } from "react";
import Modal from "react-modal";
import jQuery from "jquery";

import ModalCloseButton from "./ModalCloseButton";

import { ModalContext } from "./Donate";
import { DataContext, TeamContext } from "../context/Provider";
import * as yup from "yup";

const FormModal = () => {
  const [error, setError] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);
  const { inputValue, setValue } = useContext(ModalContext);
  const { multiple, id } = useContext(DataContext);
  const teams = useContext(TeamContext);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  //const [showname, setShowname] = useState("");
  const [email, setEmail] = useState("");

  const closeModal = () => {
    setValue(-1);
  };

  const userSchema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
  });

  const inputChange = () => {
    const input = jQuery("#amount").val();
    setValue(input);
  };
  const customStyles = {
    content: {
      width: "75%",

      left: "15%",
    },
  };

  async () => {
    const data = await fetch(url);
    myFunc(data);
  };

  async function formSubmitHandler(e) {
    const input = jQuery("#donationForm").serialize();

    e.preventDefault();
    let dataObject = {
      firstname: firstname,
      lastname: lastname,
      email: email,
    };

    // validating this dataObject concerning Yup userSchema

    const isValid = await userSchema.isValid(dataObject);
    setIsFormValid(isValid);
    debugger;
    if (!isValid) {
      console.log("Form is Invalid");
      return false;
    } else {
      jQuery.post("./data/submission.php", input, (error) => {
        setError(error);
        if (error === "") {
          closeModal();
        }
      });
    }
  }

  return (
    <Modal
      isOpen={!inputValue || inputValue >= 0}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
    >
      <div className="modal-header">
        <ModalCloseButton />
      </div>
      <div className="modal-body">
        <form onSubmit={formSubmitHandler} id="donationForm" noValidate>
          <input type="hidden" name="campaignId" value={id} />
          <input type="hidden" name="multiple" value={multiple} />
          <div className="copysponsorinfo div--box form-group mb-4">
            <label htmlFor="totaldue" style={{ marginRight: "15px" }}>
              Donation Amount:{" "}
            </label>
            <div align="center">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className="amount"
                  onChange={inputChange}
                  value={inputValue}
                />{" "}
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>

              {multiple > 1 && (
                <>
                  x <span id="modalamtduplicate">{multiple}</span> =
                  {inputValue * multiple}
                </>
              )}
              <span id="newtotal"></span>
            </div>
          </div>
          <>
            <h1> {isFormValid ? "valid" : "invalid"}</h1>
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
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
              />
              <p> firstname</p>
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="form-control"
                required
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
              <div className="row">
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
              </div>
              <div className="form-group">
                <label htmlFor="cvv">Security Code: </label>

                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  className="form-control"
                  required
                  autoComplete="off"
                  minLength="3"
                  maxLength="4"
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
                <option value=""></option>
                {teams.map((i) => (
                  <option value={i.id} key={i.id}>
                    {i.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mt-4">
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
