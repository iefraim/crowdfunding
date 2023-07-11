import React, { createContext } from "react";
import { HashRouter, Route, Routes, useParams } from "react-router-dom";

export const TeamLinkContext = createContext(undefined);

const SetTeam = ({ children }) => {
  const { teamLink } = useParams();
  return (
    <TeamLinkContext.Provider value={teamLink}>
      {children}
    </TeamLinkContext.Provider>
  );
};

const Router = ({ children }) => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/:teamLink?"
          element={<SetTeam>{children}</SetTeam>}
          exact
        />
      </Routes>
    </HashRouter>
  );
};

export default Router;
