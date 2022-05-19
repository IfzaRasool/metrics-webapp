const DISPLAY_ITEM = 'DISPLAY_ITEM';
const DISPLAY_COUNTRYITEM = 'DISPLAY_COUNTRYITEM';
const BASE_URL = 'https://api.covid19tracking.narrativa.com/api/2020-03-10';

const homeReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_COUNTRYITEM:
      return (action.payload);
    case DISPLAY_ITEM:
      return (action.payload);

    default:
      return state;
  }
};

export const displayItem = (payload) => ({
  type: DISPLAY_ITEM,
  payload,
});

export const displayCountry = (payload) => ({
  type: DISPLAY_COUNTRYITEM,
  payload,
});

export async function fetchData(dispatch) {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  Object.entries(data).forEach((des) => {
    const allCountry = des[1]['2020-03-10'].countries;
    dispatch(displayCountry(allCountry));
  });
}

export const displayData = (countryName) => async (dispatch) => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  Object.entries(data).forEach((des) => {
    const res = des[1]['2020-03-10'].countries;
    Object.entries(res).forEach((e) => {
      const idName = e[1].id;
      if (idName === countryName) {
        const info = e[1];
        dispatch(displayItem(info));
      }
    });
  });
};
export default homeReducer;
