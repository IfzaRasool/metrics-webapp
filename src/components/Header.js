import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header-container">
      <ul className="headerItem">
        <li>
          <NavLink
            to="/"
            className="nav"
            style={({ isActive }) => (isActive
              ? {
                textDecoration: 'underline',
                color: '#ec4c8a',
              }
              : {})}
          >
            Home

          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className="nav"
            style={({ isActive }) => (isActive
              ? {
                textDecoration: 'underline',
                color: '#ec4c8a',
              }
              : {})}
          >
            About

          </NavLink>
        </li>
      </ul>
    </div>
  </header>

);

export default Header;
