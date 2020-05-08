import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar is-black" role="navigation" aria-label="main">
      <div className="navbar-brand">
        <Link to="papers" className="navbar-item is-size-4">
          refMag
        </Link>
      </div>
    </nav>
  )
}

export default NavBar;
