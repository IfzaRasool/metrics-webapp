import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>All stat</h1>
    <div className="home-container">
      <div className="grid-item">
        <Link to="/Details">Asia</Link>
      </div>
      <div className="grid-item">Africa</div>
      <div className="grid-item">North America</div>
      <div className="grid-item">South America</div>
      <div className="grid-item">Antarctica</div>
      <div className="grid-item">Europe</div>
      <div className="grid-item">Australia</div>
      <div className="grid-item">country</div>
    </div>
  </div>
);

export default Home;
