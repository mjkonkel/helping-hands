import React from 'react';
// import NavBar from '../components/NavBar'
import Logo from "../assets/Logo.jpeg";

const Home = () => {
    return (
        <div>
        <div className="Logo">
        <img src={Logo} alt="Logo" />
     </div>
    <div>
        <h1>Welcome to Helping Hands!</h1>
        <p>Thank you for visiting Helping Hands where many hands make the workload smaller. Helping Hands is designed so you may provide the individualized help your loved one needs during this time.</p> 
    </div>
    </div>
    );
};

export default Home; 
