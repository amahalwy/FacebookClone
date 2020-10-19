import {
   POST_LIKE, REMOVE_LIKE, CLEAR_LIKES
  } from '../actions/like_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case POST_LIKE:
      return Object.assign({}, oldState, action.like);
    case REMOVE_LIKE:
      let newState = Object.assign({}, oldState);
      delete newState[action.likeId];
      return newState;
    case CLEAR_LIKES:
      return {};
    default:
      return oldState;
  }
}