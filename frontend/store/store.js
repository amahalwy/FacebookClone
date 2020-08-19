import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';
import thunk from '../thunk/thunk';

export default ( preloadedState = {} ) => createStore(
  RootReducer, preloadedState, applyMiddleware(thunk, logger)
);