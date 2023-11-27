import React, { useContext } from "react";
import { DataContext } from "../context/Provider";


const HeaderText: React.FC = () => {
    const {aboutHeader} = useContext(DataContext);
    return  (
        <div className="col-sm-12 headline mt-4 ">
        <h1 className="headerText__h1">
            Every contribution makes a difference. You make a difference!
            <br />
            <span className="headline-big headerText--big">
      {aboutHeader}
      </span>
        </h1>
    </div>
}
)};

export default HeaderText;
