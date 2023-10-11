import React, { createContext } from "react";
import { HashRouter, Route, Routes, useParams } from "react-router-dom";

export const TeamLinkContext = createContext("");

const SetTeam = ({ children }: { children: JSX.Element }): JSX.Element => {
  const params = useParams();
  const teamLink = params.teamLink ? params.teamLink : "";
  return (
    <TeamLinkContext.Provider value={teamLink}>
      {children}
    </TeamLinkContext.Provider>
  );
};

const Router = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/:teamLink?" element={<SetTeam>{children}</SetTeam>} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
