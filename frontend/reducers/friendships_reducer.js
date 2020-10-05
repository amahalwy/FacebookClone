import { POST_FRIENDSHIP, RECEIVE_USER_FRIENDSHIPS, CLEAR_FRIENDSHIPS } from '../actions/friendship_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case POST_FRIENDSHIP:
      return Object.assign({}, oldState, action.friendship)
    case RECEIVE_USER_FRIENDSHIPS:
      return Object.assign({}, oldState, action.friendships)
    case CLEAR_FRIENDSHIPS: 
      return {};
    default:
      return oldState;
  }
}