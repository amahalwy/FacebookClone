import Redux from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.user.id },
      entities: {
        users: { [window.currentUser.user.id]: window.currentUser.user }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING
  
  // debugger

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root)
})