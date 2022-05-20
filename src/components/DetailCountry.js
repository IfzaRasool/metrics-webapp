import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailCountry = () => {
  const countryStore = useSelector((state) => state.homeReducer);
  const countName = useParams();
  const countriesName = countName.countName;

  return (
    <div>
      <main>
        <div className="main-detail-container">
          { Object.entries(countryStore).map((e) => (((e[1].id) === countriesName)
            ? (
              <>
                <div key={e} id={e[1].id} className="main-detail-heading">
                  <br />
                  {e[0]}
                  <br />
                  <span className="cases">
                    {e[1].date}
                  </span>
                </div>
                <div className="detail-container">
                  <div>
                    <span className="span-name">Total Cases</span>
                    <span className="span-data">{e[1].today_confirmed}</span>
                  </div>
                  <div>
                    <span className="span-name">Total Deaths</span>
                    <span className="span-data">{e[1].today_deaths}</span>
                  </div>
                  <div>
                    <span className="span-name">Today Confirmed Cases</span>
                    <span className="span-data">{e[1].today_new_confirmed}</span>
                  </div>
                  <div>
                    <span className="span-name">Today New Deaths</span>
                    <span className="span-data">{e[1].today_new_deaths}</span>
                  </div>
                  <div>
                    <span className="span-name">Today Recovered</span>
                    <span className="span-data">{e[1].today_new_recovered}</span>
                  </div>
                </div>

              </>
            ) : ''
          ))}
        </div>
      </main>
    </div>
  );
};

export default DetailCountry;
