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
        <Router>
        <Provider>
            <>
      <Header />
      <div className="container">
        <HeaderText />

            <main className="row">
              <LeftColumn />
              <RightColumn />
            </main>

      </div></>
        </Provider>
</Router>
    </>
  );
};

export default Crowdfund;
