// @ts-nocheck
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Home from '../../components/Home';
import DetailCountry from '../../components/DetailCountry';

describe('test snapshots for all components', () => {
  const myHome = [];
  const Detail = [];
  it('renders home page correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home>
            {myHome.forEach(() => renderer.create(<Home />).toJSON())}
          </Home>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Detail page correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <DetailCountry>
            {Detail.forEach(() => renderer.create(<DetailCountry />).toJSON())}
          </DetailCountry>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
