import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './home';

const reducer = combineReducers({ homeReducer });

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default store;
