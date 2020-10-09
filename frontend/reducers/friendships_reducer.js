import { POST_FRIENDSHIP, RECEIVE_USER_FRIENDSHIPS, CLEAR_FRIENDSHIPS, REMOVE_FRIENDSHIP } from '../actions/friendship_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case POST_FRIENDSHIP:
      return Object.assign({}, oldState, action.friendship)
    case RECEIVE_USER_FRIENDSHIPS:
      return Object.assign({}, oldState, action.friendships)
    case REMOVE_FRIENDSHIP:
      debugger
      let newState = Object.assign({}, oldState);
      delete newState[action.friendshipId];
      return newState;
    case CLEAR_FRIENDSHIPS: 
      return {};
    default:
      return oldState;
  }
}