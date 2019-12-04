import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <p className="logo" data-toggle="collapse" data-target=".navbar-collapse.show"><Link className="navbar-brand" exact to = '/'>Bill Tracker</Link></p>
              <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link className="nav-link" exact to = '/'>Home</Link><span className="sr-only">(current)</span>
                  </li>
                  <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link className="nav-link" to = '/add'>Add</Link>
                  </li>
                  <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link className="nav-link" to = '/bills'>Bills</Link>
                  </li>
                </ul>
              </div>
          </nav>
      </div>
  );
}

export default Navbar;