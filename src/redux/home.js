const DISPLAY_COUNTRYITEM = 'DISPLAY_COUNTRYITEM';
const BASE_URL = 'https://api.covid19tracking.narrativa.com/api/2020-03-10';

const homeReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_COUNTRYITEM:
      return (action.payload);
    default:
      return state;
  }
};

export const displayCountry = (payload) => ({
  type: DISPLAY_COUNTRYITEM,
  payload,
});

export async function fetchData(dispatch) {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  Object.entries(data).forEach((des) => {
    const allCountry = des[1]['2020-03-10'].countries;
    const len = Object.keys(allCountry).length;
    if (len > 0) {
      dispatch(displayCountry(allCountry));
    }
  });
}

export default homeReducer;
