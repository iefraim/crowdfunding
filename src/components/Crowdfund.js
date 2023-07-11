import React from "react";

//components
import Header from "./Header";
import HeaderText from "./HeaderText";
import RightColumn from "./RightColumn";
import LeftColumn from "./LeftColumn";

//context
import Provider from "../context/Provider";

//router
import Router from "../router/Router";

const Crowdfund = () => {
  return (
    <>
      <Header />
      <div className="container">
        <HeaderText />
        <Router>
          <Provider>
            <div className="row">
              <RightColumn />
              <LeftColumn />
            </div>
          </Provider>
        </Router>
      </div>
    </>
  );
};

export default Crowdfund;
