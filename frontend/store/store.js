import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';
import thunk from '../thunk/thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) =>
  createStore(RootReducer, preloadedState, composeEnhancer(applyMiddleware(thunk, logger)));

export default configureStore;