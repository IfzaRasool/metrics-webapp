/* eslint-disable no-console */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiArrowRightCircleLine } from 'react-icons/ri';
// import { displayData } from '../redux/home';
import virusc from './images/virusc.png';

const Home = () => {
  const countryStores = useSelector((state) => state.homeReducer);
  console.log(countryStores);
  // const dispatch = useDispatch();
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
            <Link to={`/DetailCountry/${e[1].id}`} className="grid-child-item" key={e[1].id}>
              <div key={e[1].id} className="grid-item">
                <span className="icon"><RiArrowRightCircleLine /></span>
                <br />
                {e[0]}
                <br />
                <span className="cases">
                  Total Cases:
                  {e[1].today_confirmed}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
