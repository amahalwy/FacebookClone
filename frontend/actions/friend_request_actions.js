import * as APIUtil from '../util/user_util';

export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const RECEIVE_USER_FRIENDSHIPS = "RECEIVE_ALL_FRIENDSHIPS";

const createFriendship = payload => ({
  type: RECEIVE_FRIENDSHIP,
  payload
})

const receiveUsersFriendships = userId => ({
  type: RECEIVE_USER_FRIENDSHIPS,
  userId
})

// Thunk action creators

export const postFriendRequest = (requestor_id, receiver_id) => dispatch => {
  APIUtil.postFriendRequest(requestor_id, receiver_id)
    .then(payload => dispatch(createFriendship(payload)))
}

export const fetchUserFriendships = userId => dispatch => (
  APIUtil.fetchUserFriendships(userId)
    .then(friend_requests => dispatch(receiveUsersFriendships(friend_requests)))
)