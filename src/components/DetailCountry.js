// @ts-nocheck
/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

const DetailCountry = ({ id }) => {
  const countryStore = useSelector((state) => state.homeReducer);
  console.log(countryStore);

  return (
    <div>
      <span>{id}</span>
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

DetailCountry.propTypes = {
  id: PropTypes.string.isRequired,
  // handleClick: PropTypes.func.isRequired,
};

export default DetailCountry;
