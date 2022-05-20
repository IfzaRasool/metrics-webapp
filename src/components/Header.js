import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header-container">
      <ul className="headerItem">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/DetailCountry">About</Link>
        </li>
      </ul>
    </div>
  </header>

);

export default Header;
