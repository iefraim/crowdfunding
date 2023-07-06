import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";

let dispatch;

const closeModal = () => dispatch({ type: "", item: -1 });

const formSubmitHandler = (e) => {
  e.preventDefault();
  const input = $("#donationForm").serialize();
  // console.log(input);
  $.post("./data/submission.php", input, (data) => {
    console.log(data);
    if (data == "true") {
      dispatch({ type: "ERROR", item: "" });
      dispatch({ type: "", item: -1 });
    } else {
      dispatch({
        type: "ERROR",
        item: "there was an error with your donation",
      });
    }
  });
};

const DonationModal = () => {
  dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const multiple = useSelector((state) => state.data.multiple);
  return (
    <Modal
      isOpen={useSelector((state) => state.modalInput) >= 0}
      onRequestClose={closeModal}
    >
      <div>
        <div>
          <div>
            <div className="modal-header">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-dismiss="modal"
                onClick={closeModal}
              >
                X
              </button>
              {!!error && <p className="error">{error}</p>}
            </div>
            <div className="modal-body">
              <form
                noValidate
                style={{ width: "100%" }}
                onSubmit={formSubmitHandler}
                id="donationForm"
              >
                <input type="hidden" name="campaignId" value="5" />
                <input type="hidden" name="multiple" value={multiple} />
                <div className="copysponsorinfo donatebox">
                  <label htmlFor="totaldue">Donation Amount: </label>
                  <input
                    type="number"
                    style={{ width: "90px" }}
                    id="totaldue"
                    name="amount"
                    className="totaldue"
                  />
                  {multiple > 1 && (
                    <>
                      x <span id="modalamtduplicate">{multiple}</span>
                    </>
                  )}
                  <span id="newtotal"></span>
                </div>
                <input type="hidden" name="childnames" id="childnames" />
                <input type="hidden" name="nokids" id="nokids" value="0" />
                <div
                  className="row"
                  style={{ paddingTop: "20px", display: " none" }}
                  id="divmonthlyoptions"
                >
                  <div className="col-md-6" align="center">
                    <button
                      type="button"
                      id="donatemonthly"
                      className="btn btn-default btn-bloc btn-donate-type"
                      value="monthly"
                    >
                      DONATE MONTHLY
                    </button>
                  </div>
                  <div className="col-md-6" align="center">
                    <button
                      type="button"
                      id="donateonce"
                      className="btn btn-default btn-bloc btn-donate-type"
                      value="once"
                    >
                      PAY IN FULL
                    </button>
                  </div>
                  <input
                    type="hidden"
                    id="payment-spread"
                    name="payment-spread"
                  />
                </div>

                <div id="ccinfo">
                  <div className="form-group">
                    <label htmlFor="firstname">First Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      id="firstname"
                      name="firstname"
                      autoFocus
                      required="required"
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
                    <label htmlFor="lastname" style={{ zIndex: " 1000" }}>
                      To display other name or Anonymous :
                    </label>
                    <input
                      type="text"
                      id="adultnames"
                      name="adultnames"
                      className="form-control"
                      autoComplete="user-othername"
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
                    <label htmlFor="cvv">City: </label>

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
                    <label htmlFor="cvv">Billing Zip Code: </label>

                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone:</label>{" "}
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address:</label>{" "}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-control"
                    />
                  </div>
                  <div
                    className="form-group"
                    id="paymentChoiceDiv"
                    style={{ display: " none" }}
                  >
                    <label htmlFor="payment">Pay with: </label>
                    <select
                      name="payment"
                      id="paymentChoice"
                      required
                      className="form-control"
                    >
                      <option>Select</option>
                      <option defaultValue="Credit">Credit Card</option>
                      <option value="Later">Pay Later</option>
                    </select>
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
                      <select
                        name="ccmonth"
                        id="ccmonth"
                        className="form-control"
                        required
                      >
                        <option></option>

                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6 col-sm-12">
                      <select
                        name="ccyear"
                        id="ccyear"
                        className="form-control"
                        required
                      >
                        <option></option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                      </select>
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
                    <label>
                      Message or Dedication (75 characters maximum):{" "}
                    </label>{" "}
                    <input
                      type="text"
                      name="notes"
                      id="notes"
                      maxLength="75"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Select a Team</label>

                    <select className="form-control" name="team" id="team">
                      {useSelector((state) => state.teams).map((i) => (
                        <option value={i.id} key={i.id}>
                          {i.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div
                    id="errormsg"
                    style={{ marginBottom: "5px", fontSize: "16px" }}
                  ></div>
                  <div className="form-group">
                    <button
                      type="submit"
                      id="submitbtn"
                      className=" btn btn-primary "
                    >
                      {" "}
                      DONATE NOW
                    </button>
                    <input type="hidden" name="noadults" value="1" />
                    <input type="hidden" id="authcode" name="authcode" />
                    <input type="hidden" name="tnxid" id="tnxid" />
                    <input
                      type="hidden"
                      name="eventid"
                      id="eventid"
                      value="37"
                    />
                    <input
                      type="hidden"
                      name="description"
                      id="description"
                      value="CrowdFunding Campaign"
                    />
                  </div>
                  <input type="hidden" name="fromwordpress" />{" "}
                  <input type="hidden" name="formmode" value="consumer" />{" "}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-dismiss="modal"
                onClick={closeModal}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DonationModal;
