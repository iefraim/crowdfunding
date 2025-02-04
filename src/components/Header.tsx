import React, {useContext, useEffect, useState} from "react";
import {DataContext} from "../context/Provider";

const images = [
    "https://zeraabraham.com/wp-content/uploads/2025/02/2.jpg",
    "https://zeraabraham.com/wp-content/uploads/2025/02/3.jpg",
    "https://zeraabraham.com/wp-content/uploads/2025/02/4.jpg",
    "https://zeraabraham.com/wp-content/uploads/2025/02/5.jpg",
    "https://zeraabraham.com/wp-content/uploads/2025/01/CZA-Crowdfunding-5785-2000-x-400-px.jpg"
];

const Header: React.FC = () => {
  const {img_url} = useContext(DataContext);
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
                setFade(true);
            }, 2000); // Duration of fade out
        }, 8000); // Change image every 10 seconds

        return () => clearInterval(interval);
    }, []);
  return (<>
        <section className={`jumbotron text-center header__image ${fade ? "fade-in" : "fade-out"}` } style={{backgroundImage: `url(${images[currentImage]})` }}>

        </section>
      </>

  );
}
export default Header;
