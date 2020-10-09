import {
  RECEIVE_REQUEST_ERRORS,
  CLEAR_REQUEST_ERRORS,
} from "../actions/friend_request_actions";

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REQUEST_ERRORS:
      return action.errors;
    case CLEAR_REQUEST_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};