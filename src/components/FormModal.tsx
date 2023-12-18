import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import jQuery from "jquery";

import ModalCloseButton from "./ModalCloseButton";

import { ModalContext } from "./Donate";
import { DataContext, TeamContext } from "../context/Provider";
import {TeamLinkContext} from "../router/Router";
import useFindTeams from "../functions/useFindTeam";

type ValueTypes = {
  campaignId: number;
  firstname: string;
  lastname: string;
  amount: number;
  shownname?: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  ccnum: string;
  ccmonth: string;
  ccyear: string;
  cvv: string;
  notes?: string;
  team: string|number;
};

type ErrorTypes = {
  firstname?: string;
  lastname?: string;
  amount?: string;
  shownname?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  phone?: string;
  email?: string;
  ccnum?: string;
  ccmonth?: string;
  ccyear?: string;
  cvv?: string;
};

const FormModal: React.FC = () => {
  const [error, setError] = useState("");
  const [submited, setSubmited] = useState(false);
  const { inputValue, setValue, isOpen, setIsopen } = useContext(ModalContext);
  const { multiple, id: undefinedId } = useContext(DataContext);
  const id = undefinedId ? undefinedId : 0;
  const link = useContext(TeamLinkContext);
   const { id :teamID } = useFindTeams({ link });

  if (!setValue || !setIsopen) return false;

  const initialValues: ValueTypes = {
    campaignId: id,
    firstname: "",
    lastname: "",
    amount: inputValue || 0,
    shownname: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    ccnum: "",
    ccmonth: "",
    ccyear: "",
    cvv: "",
    notes: "",
    team: teamID || "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<ErrorTypes>({});
  const teams = useContext(TeamContext);
  //on open/close reset values

  const validate = (values: ValueTypes): ErrorTypes => {
    const errors: ErrorTypes = {};
    if (!values.firstname) {
      errors.firstname = "Required";
    }
    if (!values.lastname) {
      errors.lastname = "Required";
    }
    if (!values.amount) {
      errors.amount = "Required";
    }
    if (values.amount && isNaN(parseInt(values.amount + ""))) {
      errors.amount = "Invalid";
    }
    if (values.amount && values.amount < 5) {
      errors.amount = "Invalid";
    }
    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.city) {
      errors.city = "Required";
    }
    if (!values.zip) {
      errors.zip = "Required";
    }
    if (!values.phone) {
      errors.phone = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.ccnum) {
      errors.ccnum = "Required";
    }
    if (!values.ccmonth) {
      errors.ccmonth = "Required";
    }
    if (!values.ccyear) {
      errors.ccyear = "Required";
    }
    if (!values.cvv) {
      errors.cvv = "Required";
    } else if (values.cvv.length < 3) {
      errors.cvv = "Invalid";
    }
    return errors;
  };
  const closeModal = (): void => {
    setIsopen(false);
  };

  useEffect(() => {
    //on open/close, reset values
   // setFormValues(initialValues);
    setSubmited(false);
    setFormErrors({});
    setError("");
  }, [isOpen]);

  useEffect(() => {

 setFormValues(initialValues);

  }, [teamID]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const name = e.target.name;
    const value = e.target.value as string;
    setFormValues({ ...formValues, [name]: value });
    if (submited) formValidate();
  };

  const customStyles = {
    content: {
      width: "75%",
      left: "15%",
    },
  };

  const formValidate = (): boolean => {
    setFormErrors(validate(formValues));
    const hasBlankValues = Object.values(formErrors).some(
      (value) => !value.trim()
    );

    if (hasBlankValues) {
      const el = document.querySelector(".is-invalid");
      (el?.parentElement ?? el)?.scrollIntoView({ behavior: "smooth" });

      return false;
    }
    return true;
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmited(true);
    if (!formValidate()) return;

    jQuery.post("./data/charge-card.php", formValues, (response) => {
      setError(response);
      if (response === "approved") {
        jQuery.post("./data/submission.php", formValues, (error) => {
          setError(error);
          if (error === "") {
            setFormValues(initialValues);
            setFormErrors({});

            closeModal();
          }
        });
      } else {
        setError(
          "There was a problem with your credit card. Please try again."
        );
      }
    }); //end post
  };
  useEffect(() => {
    //? what for?
    setFormValues(
      (formValues: ValueTypes): ValueTypes => ({
        ...formValues,
        campaignId: id,
      })
    );
  }, [id]);
  useEffect(() => {
    //input changed
    setFormValues(
      (formValues: ValueTypes): ValueTypes => ({
        ...formValues,
        amount: inputValue,
      })
    );
  }, [inputValue]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
    >
      <div className="modal-header">
        <ModalCloseButton />
      </div>
      <div className="modal-body">
        <form onSubmit={formSubmitHandler} id="donationForm" noValidate>
          <div className="copysponsorinfo div--box form-group mb-4">
            <label htmlFor="totaldue" style={{ marginRight: "15px" }}>
              Donation Amount:
            </label>
            <div data-align="center">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className={formErrors.amount ? "amount is-invalid" : "amount"}
                  onChange={handleChange}
                  value={formValues.amount ||""}
                />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
                {formErrors.amount && (
                  <span className="invalid-feedback">{formErrors.amount}</span>
                )}
                <div className="multiple-div">
                {multiple > 1 && (
                  <>
                    x <span id="modalamtduplicate">{multiple}</span> =

                    {isNaN(parseInt(formValues.amount + "")) ? 0 : parseInt(formValues.amount + "") * multiple
                    }
                  </>
              )}
                <span id="newtotal"></span>  </div>
              </div>


            </div>
          </div>
          <>
            <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input
                className={
                  formErrors.firstname
                    ? "form-control is-invalid"
                    : "form-control"
                }
                type="text"
                id="firstname"
                name="firstname"
                autoFocus
                required
                title="Your first name is required."
                value={formValues.firstname}
                onChange={handleChange}
              />
              {formErrors.firstname && (
                <span className="invalid-feedback">{formErrors.firstname}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className={
                  formErrors.lastname
                    ? "form-control is-invalid"
                    : "form-control"
                }
                required
                value={formValues.lastname}
                onChange={handleChange}
              />
              {formErrors.lastname && (
                <span className="invalid-feedback">{formErrors.lastname}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="shownname">
                To display other name or Anonymous :
              </label>
              <input
                type="text"
                id="shownname"
                value={formValues.shownname}
                onChange={handleChange}
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
                value={formValues.address}
                onChange={handleChange}
                className={
                  formErrors.address
                    ? "form-control is-invalid"
                    : "form-control"
                }
                required
              />
              {formErrors.address && (
                <span className="invalid-feedback">{formErrors.address}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="city">City: </label>

              <input
                type="text"
                required
                value={formValues.city}
                onChange={handleChange}
                id="city"
                name="city"
                className={
                  formErrors.city ? "form-control is-invalid" : "form-control"
                }
              />
              {formErrors.city && (
                <span className="invalid-feedback">{formErrors.city}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="state">State: </label>

              <input
                type="text"
                required
                value={formValues.state}
                onChange={handleChange}
                id="state"
                name="state"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Billing Zip Code: </label>

              <input
                type="text"
                id="zip"
                name="zip"
                value={formValues.zip}
                onChange={handleChange}
                className={
                  formErrors.zip ? "form-control is-invalid" : "form-control"
                }
                required
              />
              {formErrors.zip && (
                <span className="invalid-feedback">{formErrors.zip}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                required
                className={
                  formErrors.phone ? "form-control is-invalid" : "form-control"
                }
              />
              {formErrors.phone && (
                <span className="invalid-feedback">{formErrors.phone}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
                className={
                  formErrors.email ? "form-control is-invalid" : "form-control"
                }
              />
              {formErrors.email && (
                <span className="invalid-feedback">{formErrors.email}</span>
              )}
            </div>
            <div id="ccinfodiv">
              <div className="form-group">
                <label htmlFor="ccnum">Credit Card #</label>

                <input
                  name="ccnum"
                  type="text"
                  value={formValues.ccnum}
                  onChange={handleChange}
                  required
                  className={
                    formErrors.ccnum
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="ccnum"
                  maxLength={16}
                />
                {formErrors.ccnum && (
                  <span className="invalid-feedback">{formErrors.ccnum}</span>
                )}
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
                    value={formValues.ccmonth}
                    onChange={handleChange}
                    className={
                      formErrors.ccmonth
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    required
                  />
                  {formErrors.ccmonth && (
                    <span className="invalid-feedback">
                      {formErrors.ccmonth}
                    </span>
                  )}
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="ccyear">Exp Year</label>
                  <input
                    type="number"
                    min={new Date().getFullYear() % 100}
                    max={(new Date().getFullYear() % 100) + 10}
                    step={1}
                    name="ccyear"
                    value={formValues.ccyear}
                    onChange={handleChange}
                    id="ccyear"
                    className={
                      formErrors.ccyear
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    required
                  />
                  {formErrors.ccyear && (
                    <span className="invalid-feedback">
                      {formErrors.ccyear}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cvv">Security Code: </label>

                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formValues.cvv}
                  onChange={handleChange}
                  className={
                    formErrors.cvv ? "form-control is-invalid" : "form-control"
                  }
                  required
                  autoComplete="off"
                  minLength={3}
                  maxLength={4}
                />
                {formErrors.cvv && (
                  <span className="invalid-feedback">{formErrors.cvv}</span>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="notes">
                Message or Dedication (75 characters maximum):
              </label>
              <input
                type="text"
                name="notes"
                value={formValues.notes}
                onChange={handleChange}
                id="notes"
                maxLength={75}
                className="form-control"
              />
            </div>
            <div className="form-group">
              {/*<label htmlFor="team">Select a Team</label>*/}

              <select
                className="form-control"
                name="team"
                id="team"
                defaultValue={`${formValues.team}`}
                onChange={handleChange}
              >
                <option value="">Select a Team</option>
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
            {!!error && <p className="alert alert-danger mt-4">{error}</p>}
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
