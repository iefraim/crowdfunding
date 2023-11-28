import React, { useContext } from "react";
import { DataContext } from "../context/Provider";

const HeaderText: React.FC = () => {
  const { aboutheader } = useContext(DataContext);
  return (
    <div className="col-sm-12 headline mt-4 ">
      <h1 className="headerText__h1">
          Writing the Next Chapter of a Storied Community

        <br />
        <span className="headline-big headerText--big">  Every contribution makes a difference. You make a difference!</span>
      </h1>
    </div>
  );
};

export default HeaderText;
