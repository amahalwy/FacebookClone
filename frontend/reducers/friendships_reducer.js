import { POST_FRIENDSHIP, RECEIVE_USER_FRIENDSHIPS } from '../actions/friendship_actions';

const friendshipsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case POST_FRIENDSHIP:
      return Object.assign({}, oldState, action.friendship)
    case RECEIVE_USER_FRIENDSHIPS:
      return Object.assign({}, oldState, action.friendships)
    default:
      return oldState;
  }
}

export default friendshipsReducer;