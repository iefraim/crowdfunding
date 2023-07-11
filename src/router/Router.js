import React from "react";
import { HashRouter } from "react-router-dom";

const Router = ({ children }) => {
  return <HashRouter>{children}</HashRouter>;
};

export default Router;
