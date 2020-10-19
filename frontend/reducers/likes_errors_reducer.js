import {
  RECEIVE_LIKE_ERRORS,
  CLEAR_LIKE_ERRORS,
} from "../actions/like_actions";

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKE_ERRORS:
      return action.errors;
    case CLEAR_LIKE_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};