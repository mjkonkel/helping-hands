import React from 'react';
import logo from './logo.png';
// import NavBar from '../components/NavBar'
function Header() {
    // Import result is the URL of your image
    return <img src={logo} alt="Logo" />;
  }
const Home = () => {
return (
    <div>
        <h1>Welcome to Helping Hands!</h1>
        <p>Thank you for visiting Helping Hands where many hands make the workload smaller. Helping Hands is designed so you may provide the individualized help your loved one needs during this time.</p> 
    </div> 
);
};

export default Home; 