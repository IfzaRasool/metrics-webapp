// @ts-nocheck
/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';

const DetailCountry = () => {
  const countryStore = useSelector((state) => state.homeReducer);
  console.log(countryStore);
  return (
    <div>
      {' '}
      <div className="country-container">
        {countryStore.map((e) => (
          <div key={e} className="asia-country">
            {' '}
            {e}
            {' '}
          </div>
        ))}
      </div>
      DetailCountry

    </div>
  );
};

export default DetailCountry;
