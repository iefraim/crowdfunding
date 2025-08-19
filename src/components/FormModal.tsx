import React, { useEffect } from "react";
import { useImmer } from "use-immer";
import { useGetActiveTeam } from "../functions/data";
import FormInput from "./FormInput";
import { CampaignContext } from "./Providers";
import DonationInput from "./DonationInput";

const validateForm = (values: {
  [key: string]: string;
}): { [key: string]: string } => {
  const errors: { [key: string]: string } = {};
  if (!values.amount) {
    errors.amount = "Donation amount is required";
  } else if (parseInt(values.amount, 10) < 5) {
    errors.amount = "Donation amount must be at least $5";
  }
  if (!values.firstname) {
    errors.firstname = "First name is required";
  }
  if (!values.lastname) {
    errors.lastname = "Last name is required";
  }
  if (!values.address) {
    errors.address = "Address is required";
  }
  if (!values.city) {
    errors.city = "City is required";
  }
  if (!values.state) {
    errors.state = "State is required";
  }
  if (!values.zip) {
    errors.zip = "Zip code is required";
  } else if (!/^\d{5}(-\d{4})?$/.test(values.zip)) {
    errors.zip = "Invalid zip code";
  }
  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (
    !/^(\+?1[\s-]?)?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/.test(values.phone)
  ) {
    errors.phone = "Invalid phone number";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.ccnum) {
    errors.ccnum = "Credit card number is required";
  }
  if (!values.ccmonth) {
    errors.ccmonth = "Expiration month is required";
  } else if (
    parseInt(values.ccmonth, 10) < 1 ||
    parseInt(values.ccmonth, 10) > 12
  ) {
    errors.ccmonth = "Invalid expiration month";
  }
  if (!values.ccyear) {
    errors.ccyear = "Expiration year is required";
  } else if (parseInt(values.ccyear, 10) < new Date().getFullYear() % 100) {
    errors.ccyear = "Invalid expiration year";
  }
  if (!values.cvv) {
    errors.cvv = "CVV is required";
  } else if (values.cvv.length < 3 || values.cvv.length > 4) {
    errors.cvv = "Invalid Security";
  }
  return errors;
};

const FormModal: React.FC<{ isOpen: boolean; closeModal: () => void }> = ({
  isOpen,
  closeModal,
}) => {
  const { teams } = React.use(CampaignContext);
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const [submited, setSubmited] = React.useState(false);

  const teamId = useGetActiveTeam()?.id ?? "";

  const [formValues, updateValues] = useImmer<{
    [key: string]: string;
  }>({ team: String(teamId) });
  const handleFormChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const changedElement = e.target;
    const { name, value } = changedElement;
    updateValues((draft) => {
      draft[name] = value;
    });
  };

  const [formErrors, setFormErrors] = React.useState<{ [key: string]: string }>(
    {}
  );
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  useEffect(() => {
    updateValues((draft) => {
      draft.team = String(teamId);
    });
  }, [teamId]);
  React.useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
    setSubmited(false); //reset errors
    setFormErrors({});
    // setError("");
  }, [isOpen]);

  const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    //TODO
    event.preventDefault();
    const errors = validateForm(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setSubmited(true);
      // const ccResponse = await fetch("./data/charge-card.php", {
      //   method: "POST",
      //   body: JSON.stringify(formValues),
      // }); //TODO:move to php
      const ccResponse = await fetch("./data/charge-card.txt");
      const ccMessage = await ccResponse.text();
      if (ccMessage !== "approved") {
        setSubmited(false);
        return setError(ccMessage);
      }
      // const submitResponse = await fetch("./data/submission.txt", {
      //   method: "POST",
      //   body: JSON.stringify(formValues),
      // }); //TODO:move to php
      const submitResponse = await fetch("./data/submission.txt");
      const submitMessage = await submitResponse.text();
      if (submitMessage !== "success") {
        setSubmited(false);
        return setError(submitMessage);
      }
      setSuccess("Thank you for your donation!");
      setTimeout(() => {
        closeModal();
        setSuccess("");
      }, 2000);
    }
  };

  if (success) {
    return (
      <dialog className="form-modal success">
        <p className="alert alert-success mt-4">{success}</p>
      </dialog>
    );
  }

  return (
    <dialog className="form-modal" ref={dialogRef} onClose={closeModal}>
      <div className="modal-header">
        <button onClick={closeModal} className="btn btn-secondary btn-sm">
          X
        </button>
      </div>
      <div className="modal-body">
        <form
          method="dialog"
          onSubmit={formSubmitHandler}
          id="donationForm"
          noValidate
          onChange={handleFormChange}
        >
          <DonationInput error={formErrors.amount} value={formValues.amount} />
          <FormInput
            name="firstname"
            label="First Name:"
            type="text"
            value={formValues.firstname}
            error={formErrors.firstname}
            required
          />
          <FormInput
            name="lastname"
            label="Last Name:"
            type="text"
            value={formValues.lastname}
            error={formErrors.lastname}
            required
          />
          <FormInput
            name="shownname"
            label="To display other name or Anonymous :"
            type="text"
            value={formValues.shownname}
            error={formErrors.shownname}
          />
          <FormInput
            name="address"
            label="Address:"
            type="text"
            value={formValues.address}
            error={formErrors.address}
            required
          />
          <FormInput
            name="city"
            label="City:"
            type="text"
            value={formValues.city}
            error={formErrors.city}
            required
          />
          <FormInput
            name="state"
            label="State:"
            type="text"
            value={formValues.state}
            error={formErrors.state}
            required
          />
          <FormInput
            name="zip"
            label="Billing Zip Code:"
            type="text"
            value={formValues.zip}
            error={formErrors.zip}
            required
          />
          <FormInput
            name="phone"
            label="Phone:"
            type="tel"
            value={formValues.phone}
            error={formErrors.phone}
            required
          />
          <FormInput
            name="email"
            label="Email Address:"
            type="email"
            value={formValues.email}
            error={formErrors.email}
            required
          />
          <div className="ccinfodiv">
            <FormInput
              name="ccnum"
              label="Credit Card Number:"
              type="text"
              value={formValues.ccnum}
              error={formErrors.ccnum}
              required
              max={16}
            />
            <div className="row">
              <FormInput
                name="ccmonth"
                label="Expiration Month:"
                type="number"
                value={formValues.ccmonth}
                error={formErrors.ccmonth}
                required
                min={1}
                max={12}
                classes="col-md-6 col-sm-12"
              />
              <FormInput
                name="ccyear"
                label="Expiration Year:"
                type="number"
                value={formValues.ccyear}
                error={formErrors.ccyear}
                required
                min={new Date().getFullYear() % 100}
                max={30}
                classes="col-md-6 col-sm-12"
              />
            </div>
            <FormInput
              name="cvv"
              label="Security Code:"
              type="text"
              value={formValues.cvv}
              error={formErrors.cvv}
              required
              max={4}
              min={3}
            />
          </div>
          <FormInput
            name="notes"
            label="Message or Dedication (75 characters maximum):"
            type="text"
            value={formValues.notes}
            error={formErrors.notes}
            max={75}
          />
          <div className="form-group">
            <select
              className="form-control"
              name="team"
              id="team"
              value={formValues.team}
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
              disabled={submited}
            >
              DONATE NOW
            </button>
          </div>
          {!!error && <p className="alert alert-danger mt-4">{error}</p>}
        </form>
      </div>
      <div className="modal-footer">
        <button onClick={closeModal} className="btn btn-secondary btn-sm">
          X
        </button>
      </div>
    </dialog>
  );
};

export default FormModal;
