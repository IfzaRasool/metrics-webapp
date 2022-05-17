import React from 'react';

const Details = () => {
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
      <div className="country-container">
        {asiaCountries.map((e) => (
          <div className="asia-country" key={e}>
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
