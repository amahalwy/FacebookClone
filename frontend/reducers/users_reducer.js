import { RECEIVE_USER } from '../actions/user_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, oldState, { [action.user.user.id]: action.user.user });
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.currentUser.user.id]: action.currentUser.user });
    default:
      return oldState;
  }
}

export default usersReducer;