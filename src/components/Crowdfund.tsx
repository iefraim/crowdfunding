import React from "react";
import Providers from "./Providers";
import { HashRouter, Routes, Route } from "react-router";

const Crowdfund: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/:teamLink?" element={<Providers />} />
      </Routes>
    </HashRouter>
  );
};

export default Crowdfund;
