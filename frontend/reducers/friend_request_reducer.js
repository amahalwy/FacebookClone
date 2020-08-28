import { 
    POST_FRIEND_REQUEST,
    RECEIVE_USER_FRIEND_REQUESTS,
    REMOVE_FRIEND_REQUEST,
    CLEAR_FRIEND_REQUESTS
  } from '../actions/friend_request_actions'

const friendRequestsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case POST_FRIEND_REQUEST:
      return Object.assign({}, oldState, { [action.request.id]: action.request })
    case RECEIVE_USER_FRIEND_REQUESTS:
      return Object.assign({}, oldState, action.requests); 
    case REMOVE_FRIEND_REQUEST:
      let newState = Object.assign({}, oldState);
      delete newState[action.requestId];
      return newState;
    case CLEAR_FRIEND_REQUESTS: 
      return {};
    default:
      return oldState;
  }
}

export default friendRequestsReducer;