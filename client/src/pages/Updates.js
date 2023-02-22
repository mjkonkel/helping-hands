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
                <h1>Updates</h1>
                <h3>Race for the Cure</h3>
                <p>
                    We participated in the Walk for the Cure on Sunday. It is an amazing event, the kids had a lot of fun. My outpatient surgery has been scheduled for Tuesday with radiation to follow next month. Thank you for all of your support it means so much for all of us.
                </p>
            </div>

            <Carousel>
                <div>
                    <img src={finish} />
                    <p className="photos">Komen Minnesota Race for the Cure</p>

                </div>

                <div>
                    <img src={kids} />
                    <p className="photos">Komen Minnesota Race for the Cure</p>
                </div>
                <div>
                    <img src={kids2} />
                    <p className="photos">Komen Minnesota Race for the Cure</p>
                </div>
                <div>
                    <img src={group} />
                    <p className="photos">Komen Minnesota Race for the Cure</p>
                </div>
                <div>
                    <img src={family} />
                    <p className="photos">Komen Minnesota Race for the Cure</p>
                </div>
                <div>
                    <img src={family1} />
                    <p className="photos">Komen Minnesota Race for the Cure</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Updates; 