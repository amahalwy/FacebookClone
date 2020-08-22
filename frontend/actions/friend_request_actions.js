import * as APIUtil from '../util/user_util';

export const RECEIVE_FRIEND_REQUEST = "RECEIVE_FRIEND_REQUEST";
export const RECEIVE_USER_FRIEND_REQUESTS = "RECEIVE_USER_FRIEND_REQUESTS";
export const POST_REQUEST = "POST_REQUEST";

const createFriendRequest = payload => ({
  type: RECEIVE_FRIEND_REQUEST,
  payload
})

const receiveUsersFriendships = userId => ({
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

export const fetchUserFriendships = userId => dispatch => (
  APIUtil.fetchUserFriendships(userId)
    .then(friend_requests => dispatch(receiveUsersFriendships(friend_requests)))
)

// export const postFriendship