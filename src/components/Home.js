// @ts-nocheck
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import React from 'react';
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiArrowRightCircleLine } from 'react-icons/ri';
// import { displayData } from '../redux/home';

const Home = () => {
  // @ts-ignore
  const countryStores = useSelector((state) => state.homeReducer);
  console.log(countryStores);
  // const dispatch = useDispatch();

  // const handleCountry = (e) => {
  //   e.preventDefault();
  //   const countryName = e.target.textContent;
  //   // dispatch(displayItem(countryName));
  //   // @ts-ignore
  //   dispatch(displayData(countryName));
  //   console.log('ok', countryName);
  // };
  return (
    <div>
      <div className="main">Covid-19 Data</div>
      <h2>STATS BY COUNTRY</h2>

      <div className="home-container">
        { Object.entries(countryStores).map((e) => (
          <div key={e.id} id={e.id} className="grid-item">
            <span className="icon"><RiArrowRightCircleLine /></span>
            <span className="grid-child-item">{e[0]}</span>
            <br />
            <span className="cases">
              Total Cases:
              {e[1].today_confirmed}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
