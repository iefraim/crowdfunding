import React, { createContext } from "react";
import { HashRouter, Route, Routes, useParams } from "react-router-dom";

export const TeamContext = createContext(undefined);

const SetTeam = ({ children }) => {
  const { teamName } = useParams();
  return (
    <TeamContext.Provider value={teamName}>{children}</TeamContext.Provider>
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
