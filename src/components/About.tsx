import React, { useContext } from "react";
import { DataContext } from "../context/Provider";
const decodeHtml
    = (html: string) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
};

const About: React.FC = () => {
    const {abouttext} = useContext(DataContext);
    const decodedHtml = decodeHtml(abouttext);


    return (
        //make tabbed div

        <div className="div--box">
            <h3>ABOUT CAMPAIGN</h3>
            <div className="aboutText">
                 <div
                dangerouslySetInnerHTML={{__html: decodedHtml }}
            />
                <div className="text-center ">
                    <h4><strong>Thank you to our matchers</strong></h4>

                    <img src="https://zeraabraham.com/wp-content/uploads/2023/12/glassman-logo.png" alt="Glassman Foundation" width="90" height="90" />

                <img src="https://zeraabraham.com/wp-content/uploads/2023/12/Vivage-Beecan.jpg" alt="Viva" width="150" height="150" style={{paddingLeft: 20}} />

            </div>
        </div>
        </div>
    )
};

export default About;
