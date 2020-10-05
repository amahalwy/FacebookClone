import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  CLEAR_ERRORS,
} from "../actions/session";

const _nullUser = {
  id: null
};

export default (state = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, action.currentUser.user);
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};