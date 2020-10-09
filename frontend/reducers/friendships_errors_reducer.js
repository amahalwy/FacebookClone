import {
  RECEIVE_FRIENDSHIP_ERRORS,
  CLEAR_FRIENDSHIP_ERRORS,
} from "../actions/friendship_actions";

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FRIENDSHIP_ERRORS:
      return action.errors;
    case CLEAR_FRIENDSHIP_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};