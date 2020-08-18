import Redux from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
// import api util functions
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  // let preloadedState = undefined;
  // if (window.currentUser) {
  //   preloadedState = {
  //     session: {
  //       currentUser: window.currentUser
  //     }
  //   };
  // }
  // const store = configureStore(preloadedState);

  const store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root)
})