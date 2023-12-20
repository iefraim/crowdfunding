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
                    <h4><strong>Thank you to our matchers</strong></h4>

                    <img src="http://zeraabraham.com/wp-content/uploads/2023/12/glassman-logo.png" alt="Glassman Foundation" width="90" height="90" />

                <img src="http://zeraabraham.com/wp-content/uploads/2023/12/Vivage-Beecan.jpg" alt="Viva" width="150" height="150" style={{paddingLeft: 20}} />

            </div>
        </div>
        </div>
    )
};

export default About;
