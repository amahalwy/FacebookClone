import * as APIUtil from '../util/user_util';

export const RECEIVE_FRIEND_REQUEST = "RECEIVE_FRIEND_REQUEST";
export const RECEIVE_USER_FRIEND_REQUESTS = "RECEIVE_USER_FRIEND_REQUESTS";
export const POST_REQUEST = "POST_REQUEST";

const createFriendRequest = payload => ({
  type: RECEIVE_FRIEND_REQUEST,
  payload
})

const receiveUsersFriendRequests = userId => ({
  type: RECEIVE_USER_FRIEND_REQUESTS,
  userId
})


// const createFriendship = payload => ({
//   type: POST_FRIENDSHIP,
//   payload
// })

// Thunk action creators

export const postFriendRequest = (requestor_id, receiver_id) => dispatch => {
  // debugger
  APIUtil.postFriendRequest(requestor_id, receiver_id)
    .then(payload => dispatch(createFriendRequest(payload)))
}

export const fetchUserFriendRequests = userId => dispatch => (
  APIUtil.fetchUserFriendRequests(userId)
    .then(friend_requests => dispatch(receiveUsersFriendRequests(friend_requests)))
)

// export const postFriendship