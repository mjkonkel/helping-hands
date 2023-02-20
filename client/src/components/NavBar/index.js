import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';
import React from 'react'
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarHH() {
  return (
    <React.Fragment>

      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/request">request</Link>
          </li>
          <li>
            <Link to="/updates">updates</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </React.Fragment>


  );
}

export default NavbarHH;