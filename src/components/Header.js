import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <header className="header-container">
      <ul className="headerItem">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Details">Details</Link>
        </li>
      </ul>
    </header>
  </div>
);

export default Header;
