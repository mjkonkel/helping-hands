// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import React from 'react'
import "../../index.css"

// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarHH() {
  return (
    <React.Fragment>

      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
        
            <Link to="/signup">Sign Up</Link>
         
            <Link to="/login">Login</Link>
         
            <Link to="/request">Request</Link>
     
            <Link to="/updates">Updates</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </React.Fragment>


  );
}


export default NavbarHH;
