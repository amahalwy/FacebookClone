import { 
    POST_FRIEND_REQUEST,
    RECEIVE_USER_FRIEND_REQUESTS,
  } from '../actions/friend_request_actions'

// FRIENDSHIP STUFF
const friendRequestsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case POST_FRIEND_REQUEST:
      return Object.assign({}, oldState, {
        friendshipRequest: {requestor_id: action.payload.request.requestor_id, receiver_id: action.payload.request.receiver_id} 
      })
    case RECEIVE_USER_FRIEND_REQUESTS:
      return Object.assign({}, oldState, action.userId) 
    default:
      return oldState;
  }
}

export default friendRequestsReducer;