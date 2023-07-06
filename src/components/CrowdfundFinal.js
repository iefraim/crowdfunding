import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

//components
import Header from "./Header";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import HeaderText from "./HeaderText";
import DonationModal from "./DonationModal";

//store
import donationStore from "../store/configureStore";
import getDbToStore from "../json/info";

//router
import TeamRouter from "../routers/TeamRouter";

const dispatch = donationStore.dispatch;

donationStore.subscribe(() => {
  console.log(donationStore.getState());
});

setInterval(() => {
  getDbToStore(dispatch);
}, 10000);

getDbToStore(dispatch);

const CrowdfundFinal = () => (
  <div>
    <Header />
    <Provider store={donationStore}>
      <div className="container">
        <HeaderText />
        <HashRouter>
          <TeamRouter>
            <div className="row">
              <LeftColumn />
              <RightColumn />
            </div>
          </TeamRouter>
        </HashRouter>
      </div>
      <DonationModal />
    </Provider>
  </div>
);

export default CrowdfundFinal;
