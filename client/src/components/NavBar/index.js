import { Outlet, Link } from 'react-router-dom';
import React from 'react'
import "../../index.css"

function NavbarHH() {
  return (
    <React.Fragment>

      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
        
            <Link to="/signup">Sign Up</Link>
         
            <Link to="/login">Login</Link>
         
            <Link to="/request">Requests</Link>
     
            <Link to="/updates">Updates</Link>

          </li>
        </ul>
      </nav>
      <Outlet />
    </React.Fragment>


  );
}


export default NavbarHH;
