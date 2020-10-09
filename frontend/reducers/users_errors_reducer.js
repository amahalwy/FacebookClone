import {
  RECEIVE_USER_ERRORS,
  CLEAR_USER_ERRORS,
} from "../actions/user_actions";

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case CLEAR_USER_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};