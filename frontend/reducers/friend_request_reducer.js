import { 
    POST_FRIEND_REQUEST,
    RECEIVE_USER_FRIEND_REQUESTS,
    REMOVE_FRIEND_REQUEST
  } from '../actions/friend_request_actions'

const friendRequestsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case POST_FRIEND_REQUEST:
      return Object.assign({}, oldState, {
        friendshipRequest: {requestor_id: action.payload.request.requestor_id, receiver_id: action.payload.request.receiver_id} 
      });
    case RECEIVE_USER_FRIEND_REQUESTS:
      return Object.assign({}, oldState, action.userId); 
    case REMOVE_FRIEND_REQUEST:
      let newState = Object.assign({}, oldState);
      delete newState[action.requestId];
      return newState;
    default:
      return oldState;
  }
}

export default friendRequestsReducer;