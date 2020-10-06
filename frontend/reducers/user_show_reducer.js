import {
  RECEIVE_USER,
  CLEAR_USER,
} from "../actions/user_actions";

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, oldState, action.user);
    case CLEAR_USER:
      return {};
    default:
      return oldState;
  }
};
