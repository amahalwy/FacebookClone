import * as APIUtil from '../util/friend_request_util';

export const POST_FRIEND_REQUEST = "POST_FRIEND_REQUEST";
export const RECEIVE_USER_FRIEND_REQUESTS = "RECEIVE_USER_FRIEND_REQUESTS";
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";
export const CLEAR_FRIEND_REQUESTS = "CLEAR_FRIEND_REQUESTS"
export const RECEIVE_REQUEST_ERRORS = "RECEIVE_REQUEST_ERRORS";
export const CLEAR_REQUEST_ERRORS = "CLEAR_REQUEST_ERRORS";

const createFriendRequest = request => ({
  type: POST_FRIEND_REQUEST,
  request
})

const receiveUsersFriendRequests = requests => ({
  type: RECEIVE_USER_FRIEND_REQUESTS,
  requests
})

const removeFriendRequest = requestId => ({
  type: REMOVE_FRIEND_REQUEST,
  requestId
})

const receiveErrors = errors => ({
  type: RECEIVE_REQUEST_ERRORS,
  errors
});

const clear = () => ({
  type: CLEAR_FRIEND_REQUESTS
})

const clearErrs = () => ({
  type: CLEAR_REQUEST_ERRORS
})

// Thunk action creators
export const postFriendRequest = (requestor_id, receiver_id) => dispatch => {
  APIUtil.postFriendRequest(requestor_id, receiver_id).then(
    request => dispatch(createFriendRequest(request)),
    err => dispatch(receiveErrors(err.responseJSON)))
}

export const fetchUserFriendRequests = userId => dispatch => (
  APIUtil.fetchUserFriendRequests(userId).then(
    requests => dispatch(receiveUsersFriendRequests(requests)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const deleteFriendRequest = requestId => dispatch => (
  APIUtil.deleteFriendRequest(requestId).then(
    () => dispatch(removeFriendRequest(requestId)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const clearFriendRequests = () => dispatch => (
  dispatch(clear())
)

export const clearErrors = () => dispatch => (
  dispatch(clearErrs())
)