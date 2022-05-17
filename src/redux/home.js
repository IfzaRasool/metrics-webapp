/* eslint-disable no-console */
const DISPLAY_ITEM = 'DISPLAY_ITEM';
const BASE_URL = 'https://api.covid19tracking.narrativa.com/api/2020-03-10';

const homeReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_ITEM:
      return action.payload;

    default:
      return state;
  }
};

export const displayItem = (payload) => ({
  type: DISPLAY_ITEM,
  payload,
});

export async function fetchData(dispatch) {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  console.log('okok');
  console.log(data);
  dispatch(displayItem);
}

export default homeReducer;
