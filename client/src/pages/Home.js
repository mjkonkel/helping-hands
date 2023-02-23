import React from 'react';
import Logo from "../assets/Logo.jpeg";
import "../index.css"

const Home = () => {
    return (
        <div>
            <div className="Logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div class="container-fluid">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-1 mx-auto">Welcome to Helping Hands!</h1>
                        <p className="homeText">Thank you for visiting Helping Hands where many hands make the workload smaller.<br></br>
                        Helping Hands is designed so you may provide the individualized help your loved one needs during this difficult time.<br></br><br></br>
This app is designed for friends and family to help a loved one going through a significant medical condition. It answers the question let me know if I can help. <br></br>Helping Hands is designed to allow a family to ask for and accept help without embarrassment or creating additional burdens. <br></br><br></br>Friends and family want to help however are often unsure of what to do. By making small changes to ways people typically help can make a big impact on the support provided. Helping Hands is meant to make asking for and providing help easier and more effective.</p><br></br>
                    
                    Login or Sign Up!
                    <p>In order to view your loved one's requests and updates please use the navigation bar above to sign up or login.</p><br></br>
                    Requests
<p>Once you are logged in you may navigate to the Request page to see what you can do to help your loved one.</p><br></br>
Updates<p>Check out the Updates page to see updates on your loved one's medical condition and photos.</p>
            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 
