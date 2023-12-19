import React, { useContext } from "react";
import { DataContext } from "../context/Provider";

const About: React.FC = () => {
    const {abouttext} = useContext(DataContext);
    return (
        //make tabbed div

        <div className="div--box">
            <h3>ABOUT CAMPAIGN</h3>
            <div className="aboutText">
                 <div
                dangerouslySetInnerHTML={{__html: abouttext}}
            />
                <div className="text-center ">
            <h3>SPONSORS</h3>


                <img src="http://zeraabraham.com/wp-content/uploads/2023/12/Vivage-Beecan.jpg" alt="Viva" width="100" height="100" />

            </div>
        </div>
        </div>
    )
};

export default About;
