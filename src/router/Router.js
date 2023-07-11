import React, { createContext } from "react";
import { HashRouter, Route, Routes, useParams } from "react-router-dom";

export const TeamLinkContext = createContext(undefined);

const SetTeam = ({ children }) => {
  const { teamName } = useParams();
  return (
    <TeamLinkContext.Provider value={teamName}>
      {children}
    </TeamLinkContext.Provider>
  );
};

const Router = ({ children }) => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/:teamName?"
          element={<SetTeam>{children}</SetTeam>}
          exact
        />
      </Routes>
    </HashRouter>
  );
};

export default Router;
