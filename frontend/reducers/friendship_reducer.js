import { RECEIVE_FRIENDSHIP, RECEIVE_USER_FRIENDSHIPS } from '../actions/friend_request_actions'

// FRIENDSHIP STUFF
const friendshipRequestsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_FRIENDSHIP:
      return Object.assign({}, oldState, {
        friendshipRequest: {requestor_id: action.payload.requestor.id, receiver_id: action.payload.receiver.id} 
      })
    case RECEIVE_USER_FRIENDSHIPS:
      return Object.assign({}, oldState, {requests: action.userId.requests}) 
    default:
      return oldState;
  }
}

export default friendshipRequestsReducer;