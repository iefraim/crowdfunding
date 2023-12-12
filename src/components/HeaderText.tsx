import React, { useContext } from "react";
import { DataContext } from "../context/Provider";

const HeaderText: React.FC = () => {
  const { aboutheader } = useContext(DataContext);
  return (
    <div className="col-sm-12 headline mt-4 text-center">
      <h1 className="headline-big headerText--big">
          Writing the Next Chapter of a Storied Community

      </h1>
     <h2 className="headerText__h1">
     Every contribution makes a difference. You make a difference!
     </h2>
    </div>
  );
};

export default HeaderText;
