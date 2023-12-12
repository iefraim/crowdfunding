import React, { useContext } from "react";
import { DataContext } from "../context/Provider";

const About: React.FC = () => {
    const {abouttext} = useContext(DataContext);
    return (
        <div className="div--box">
            <h3>ABOUT CAMPAIGN</h3>
            <div className="aboutText"
                dangerouslySetInnerHTML={{__html: abouttext}}
            />

        </div>
    )
};

export default About;
