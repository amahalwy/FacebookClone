import { POST_FRIENDSHIP } from '../actions/friendship_actions';

const friendshipsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case POST_FRIENDSHIP:

    default:
      return oldState;
  }
}

export default friendshipsReducer;