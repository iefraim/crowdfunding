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

const Crowdfund: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <HeaderText />
        <Router>
          <Provider>
            <main className="row">
              <LeftColumn />
              <RightColumn />
            </main>
          </Provider>
        </Router>
      </div>
    </>
  );
};

export default Crowdfund;
