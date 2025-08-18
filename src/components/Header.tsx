import React, {use, useEffect, useState} from "react";
import {CampaignContext} from "./Providers";


const Header: React.FC = () => {
  const {data:{img_url:images}} = use(CampaignContext);
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImage((prevImage) => {
                    console.log("prevImage",prevImage);
                    console.log("images.length", images.length);
                    console.log("nextImage", (prevImage + 1) % images.length);

                    return (prevImage + 1) % images.length});
                setFade(true);
                
            }, 4000); // Duration of fade out
        }, 4000); // Change image every 8 seconds

        return () => clearInterval(interval);
    }, [JSON.stringify(images)]); // Re-run effect if images change
  return (<>
        <section className={`jumbotron text-center header__image ${fade ? "fade-in" : "fade-out"}` } style={{backgroundImage: `url(${images[currentImage]})` }}>

        </section>
      </>

  );
}
export default Header;
