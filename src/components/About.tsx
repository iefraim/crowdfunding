import React, { useContext } from "react";
import { DataContext } from "../context/Provider";

const About: React.FC = () => {
    const {aboutText} = useContext(DataContext);
    return (
        <div className="div--box">
            <h3>ABOUT ZERA AVRAHAM</h3>
            {aboutText}
        </div>
    )
};

export default About;
