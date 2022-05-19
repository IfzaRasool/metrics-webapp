// @ts-nocheck
/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';

const DetailCountry = () => {
  const countryStore = useSelector((state) => state.homeReducer);
  console.log(countryStore.date);
  // Object.keys(countryStore);

  return (
    <div>
      <div className="main-detail-container">
        <div className="main-detail-heading">
          <h3>
            {countryStore.name}
            <br />
            {countryStore.date}
          </h3>
        </div>
        <div className="detail-container">
          <div>
            <span className="span-name">Total Cases</span>
            <span className="span-data">{countryStore.today_confirmed}</span>
          </div>
          <div>
            <span className="span-name">Total Deaths</span>
            <span className="span-data">{countryStore.today_deaths}</span>
          </div>
          <div>
            <span className="span-name">Today Confirmed Cases</span>
            <span className="span-data">{countryStore.today_new_confirmed}</span>
          </div>
          <div>
            <span className="span-name">Today New Deaths</span>
            <span className="span-data">{countryStore.today_new_deaths}</span>
          </div>
          <div>
            <span className="span-name">Today Recovered</span>
            <span className="span-data">{countryStore.today_new_recovered}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailCountry;
