import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

let dispatch;

const TeamSwitch = (props) => {
  const params = useParams();
  const teamName = params.teamName === undefined ? "" : params.teamName;
  dispatch({ type: "", item: teamName });
  return props.children;
};

const Router = (props) => {
  dispatch = useDispatch();
  return (
    <Routes>
      <Route
        path="/:teamName?"
        element={<TeamSwitch>{props.children}</TeamSwitch>}
        exact
      />
    </Routes>
  );
};

export default Router;
