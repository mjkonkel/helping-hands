import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import family from "../assets/family.jpeg";
import family1 from "../assets/family1.jpeg";
import finish from "../assets/finish.jpeg";
import group from "../assets/group.jpeg";
import kids from "../assets/kids.jpeg";
import kids2 from "../assets/kids2.jpeg";
import Logo from "../assets/Logo.jpeg";
import "../index.css";

const Updates = () => {

    return (

        <div>
            <div className="Logo">
                <img src={Logo} alt="Logo" />
            </div>

            <div class="container-fluid">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-1 mx-auto">Updates</h1>
                        <h3>May 14, 2022 Race for the Cure</h3>
                        <p>
                            Thank you for checking in on us. We participated in the Walk for the Cure on Sunday. It is an amazing event, the kids had a lot of fun and it was nice meeting others in our situation. My outpatient surgery has been scheduled for Tuesday with radiation to follow next month. Thank you for all of your support and well wishes it means so much for all of us.
                        </p>
                    </div>
                </div>
            </div>

            <Carousel>

                <div>
                    <img src={kids2} class="d-block w-100" alt="Kids at Race for the cure" />
                    <p className="photos">Will and Gwyn</p>
                </div>
                <div>
                    <img src={family} class="d-block w-100" alt="Family at Race for the cure" />
                    <p className="photos">Komen Minnesota Race for the Cure</p>
                </div>
                <div>

                    <img src={finish} class="d-block w-100" alt="Finish Line" />
                    <p className="photos">Finish Line</p>
                </div>
                <div>
                    <img src={kids} class="d-block w-100" alt="Kids at Race for the cure" />
                    <p className="photos">Back row: Gwyn, Issac, Nolan<br></br>
                        Front row: Josie, Will and Bryce</p>
                </div>

                <div>
                    <img src={group} class="d-block w-100" alt="Group at Race for the cure" />
                    <p className="photos">Komen Minnesota Race for the Cure</p>
                </div>
                <div>
                    <img src={family} class="d-block w-100" alt="Family at Race for the cure" />
                    <p className="photos">Family at Race for the Cure</p>
                </div>
                <div>
                    <img src={family1} class="d-block w-100" alt="Family at Race for the cure" />
                    <p className="photos">Komen Minnesota Race for the Cure</p>
                </div>

            </Carousel >
            
        </div >
      
    );
};

export default Updates; 