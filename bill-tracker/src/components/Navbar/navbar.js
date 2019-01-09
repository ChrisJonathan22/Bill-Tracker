import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                  <a className="navbar-brand"><NavLink exact to = '/'>Logo</NavLink></a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarColor01">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <a className="nav-link"><NavLink exact to = '/'>Home</NavLink><span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link"><NavLink to = '/add'>Add</NavLink></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link"><NavLink to = '/bills'>Bills</NavLink></a>
                        </li>
                      </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;