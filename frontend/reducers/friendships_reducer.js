import { POST_FRIENDSHIP } from '../actions/friendship_actions';

const friendshipsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case POST_FRIENDSHIP:
      return Object.assign({}, oldState, {friendship: {} })
    default:
      return oldState;
  }
}

export default friendshipsReducer;