import React, {useContext} from "react";
import {DataContext} from "../context/Provider";
const Header: React.FC = () => {
  const {img_url} = useContext(DataContext);
  return (<>
        <section className="jumbotron text-center header__image " style={{backgroundImage: `url(${img_url})`}}>

        </section>
      </>

  );
}
export default Header;
