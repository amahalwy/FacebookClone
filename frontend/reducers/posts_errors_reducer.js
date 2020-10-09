import {
  RECEIVE_POSTS_ERRORS,
  CLEAR_POSTS_ERRORS,
} from "../actions/post_actions";

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS_ERRORS:
      return action.errors;
    case CLEAR_POSTS_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};