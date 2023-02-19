import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import family from "../assets/family.jpeg"
import family1 from "../assets/family1.jpeg"
import finish from "../assets/finish.jpeg"
import group from "../assets/group.jpeg"
import kids from "../assets/kids.jpeg"
import kids2 from "../assets/kids2.jpeg"
import "../index.css"

const Updates = () => {
    return (
        <Carousel>

            <div className="carousel">
                <img src={kids} alt="kids at walk for the cure" className="photos" />
                <p className="caption">Komen Minnesota Race for the Cure</p>
            </div>
            <div className="carousel">
                <img src={kids2} alt="kids at walk for the cure" className="photos" />
                <p className="caption">Komen Minnesota Race for the Cure</p>
            </div>
            <div className="carousel">
                <img src={family} alt="family at walk for the cure" className="photos" />
                <p className="caption">Komen Minnesota Race for the Cure</p>
            </div>
            <div className="carousel">
                <img src={family1} alt="family at walk for the cure" className="photos" />
                <p className="caption">Komen Minnesota Race for the Cure</p>
            </div>
            <div className="carousel">
                <img src={finish} alt="finish line at walk for the cure" className="photos" />
                <p className="caption">Komen Minnesota Race for the Cure</p>
            </div>
            <div className="carousel">
                <img src={group} alt="group at walk for the cure" className="photos" />
                <p className="caption">Komen Minnesota Race for the Cure</p>
            </div>

        </Carousel>
    );
};

export default Updates; 