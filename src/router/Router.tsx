import React, { createContext } from "react";
import { HashRouter, Route, Routes, useParams } from "react-router-dom";

export const TeamLinkContext = createContext("");

const SetTeam: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
  const params = useParams();

  const teamLink = params.teamLink ? params.teamLink : "";

  return (
    <TeamLinkContext.Provider value={teamLink}>
      {children}
    </TeamLinkContext.Provider>
  );
};

const Router: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/:teamLink?" element={<SetTeam>{children}</SetTeam>} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
