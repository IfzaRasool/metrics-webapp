/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RiArrowRightCircleLine } from 'react-icons/ri';
import { displayData } from '../redux/home';
import virusc from './images/virusc.png';

const Home = () => {
  const countryStores = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <main className="main-container">
        <div className="main">
          <img src={virusc} alt="logo" className="logo" />
          <h2 className="covid-heading">Covid-19 Tracking Cases</h2>
        </div>
        <h2 className="stats-heading">STATS BY COUNTRY</h2>

        <div className="home-container">
          { Object.entries(countryStores).map((e) => (
            <div key={e} id={e[1].id} className="grid-item" onClick={() => dispatch(displayData(e[1].id))}>
              <span className="icon"><RiArrowRightCircleLine /></span>
              <br />
              <Link to="/DetailCountry" className="grid-child-item">{e[0]}</Link>
              <br />
              <span className="cases">
                Total Cases:
                {e[1].today_confirmed}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
