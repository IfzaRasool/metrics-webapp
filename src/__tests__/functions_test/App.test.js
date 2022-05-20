import deepFreeze from 'deep-freeze';
import homeReducer, { displayCountry } from '../../redux/home';

describe('test reducer and action functions', () => {
  const prevState = [];
  const newState = [
    {
      id: 'pakistan',
      name: 'pakistan',
      today_confirmed: '10',
    },
    {
      id: 'india',
      name: 'india',
      today_confirmed: '20',
    },
    {
      id: 'turkey',
      name: 'turkey',
      today_confirmed: '0',
    },
  ];

  it('test home action', () => {
    deepFreeze(prevState);
    expect(homeReducer(prevState, displayCountry(newState))).toEqual(newState);
  });
});
