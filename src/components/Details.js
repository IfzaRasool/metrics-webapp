/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';
// import { displayItem } from '../redux/home';
import { displayData } from '../redux/home';

const Details = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const countryName = e.target.textContent;
    // dispatch(displayItem(countryName));
    // @ts-ignore
    dispatch(displayData(countryName));
    console.log('ok', countryName);
  };

  const asiaCountries = [
    'China',
    'India',
    'Indonesia',
    'Pakistan',
    'Bangladesh',
    'Japan',
    'Philippines',
    'Vietnam',
    'Turkey',
    'Iran',
  ];

  return (
    <div>
      <div className="main">Covid-19 Data</div>
      <div className="country-container">
        {asiaCountries.map((e) => (
          <div key={e} className="asia-country" onClick={handleClick}>
            {' '}
            {e}
            {' '}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
