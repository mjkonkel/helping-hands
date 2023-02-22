import React from 'react';
import Logo from "../assets/Logo.jpeg";

const NoMatch = () => {
  return (
    <div>
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div>
        <h1>Oops, we couldn't find that page.</h1>
      </div>
    </div>
  );
};

export default NoMatch;
