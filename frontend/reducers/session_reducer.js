import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  GET_CURRENT_USER
} from "../actions/session_actions";

let _nullUser = {
  user: null
}

export default (state = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = Object.assign({});
      newState.user = action.currentUser;
      return newState;
    case GET_CURRENT_USER:
      return Object.assign({}, state)
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};