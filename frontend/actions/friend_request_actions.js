import * as APIUtil from '../util/friend_request_util';

export const POST_FRIEND_REQUEST = "POST_FRIEND_REQUEST";
export const RECEIVE_USER_FRIEND_REQUESTS = "RECEIVE_USER_FRIEND_REQUESTS";
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";

const createFriendRequest = payload => ({
  type: POST_FRIEND_REQUEST,
  payload
})

const receiveUsersFriendRequests = userId => ({
  type: RECEIVE_USER_FRIEND_REQUESTS,
  userId
})

const removeFriendRequest = requestId => ({
  type: REMOVE_FRIEND_REQUEST,
  requestId
})

// Thunk action creators
export const postFriendRequest = (requestor_id, receiver_id) => dispatch => {
  APIUtil.postFriendRequest(requestor_id, receiver_id)
    .then(payload => dispatch(createFriendRequest(payload)))
}

export const fetchUserFriendRequests = userId => dispatch => (
  APIUtil.fetchUserFriendRequests(userId)
    .then(friend_requests => dispatch(receiveUsersFriendRequests(friend_requests)))
)

export const deleteFriendRequest = requestId => dispatch => (
  APIUtil.deleteFriendRequest(requestId)
    .then(() => dispatch(removeFriendRequest(requestId)))
)

// TODO fix naming of payloads