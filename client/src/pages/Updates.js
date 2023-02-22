import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import family from "../assets/family.jpeg"
import family1 from "../assets/family1.jpeg"
import finish from "../assets/finish.jpeg"
import group from "../assets/group.jpeg"
import kids from "../assets/kids.jpeg"
import kids2 from "../assets/kids2.jpeg"

const Updates = () => {
        return (
            <div>
                <div>
                    <h1>Hello!</h1>
                </div>
            <Carousel>
                <div>
                <h1 className="photos">Komen Minnesota Race for the Cure</h1>
                    <img src={family} alt=""/>
                    {/* <h1 className="photos">Komen Minnesota Race for the Cure</h1> */}
                </div>
                <div>
                <img src={family1} alt=""/>
                    <p className="photos">Komen Minnesota Race for the Cure</p>
                </div>
                <div>
                <img src={finish} alt=""/>
                    <p className="photos">Komen Minnesota Race for the Cure</p>
                </div>
                <div>
                    <img src={group} alt=""/>
                    <p className="photos">Komen Minnesota Race for the Cure</p>
                </div>
                <div>
                <img src={kids} alt=""/>
                    <p className="photos">Komen Minnesota Race for the Cure</p>
                </div>
                <div>
                <img src={kids2} alt=""/>
                    <p className="photos">Komen Minnesota Race for the Cure</p>
                </div>
            </Carousel>
            </div>
        );
    };

export default Updates; 