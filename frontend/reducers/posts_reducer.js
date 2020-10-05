import {
   RECEIVE_POST, RECEIVE_USER_POSTS, REMOVE_POST, CLEAR_POSTS
  } from '../actions/post_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_POST:
      return Object.assign({}, oldState, {[action.post.id]: action.post });
    case RECEIVE_USER_POSTS:
      return Object.assign({}, oldState, action.posts);
    case REMOVE_POST:
      let newState = Object.assign({}, oldState);
      delete newState[action.postId];
      return newState;
    case CLEAR_POSTS:
      return {};
    default:
      return oldState;
  }
}