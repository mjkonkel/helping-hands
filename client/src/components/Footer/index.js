import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto p-4">
      <div className="container">
        &copy;{new Date().getFullYear()} by Janelle Cikanek, Sophie Kedrowski, Mitchell Konkel, Rene Maldonado and Tyler Van Meveren 
      </div>
    </footer>
  );
};

export default Footer;
