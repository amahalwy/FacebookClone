import * as APIUtil from '../util/friendship_util';

export const POST_FRIENDSHIP = "POST_FRIENDSHIP";
export const RECEIVE_USER_FRIENDSHIPS = "RECEIVE_USER_FRIENDSHIPS";

const createFriendship = payload => ({
  type: POST_FRIENDSHIP,
  payload
})

const receiveUsersFriendships = userId => ({
  type: RECEIVE_USER_FRIENDSHIPS,
  userId
})

// Thunk action creators
export const postFriendship = (user_id, friend_id) => dispatch => (
  APIUtil.postFriendship(user_id, friend_id)
    .then(payload => dispatch(createFriendship(payload)))
)

export const fetchFriendships = userId => dispatch => (
  APIUtil.fetchFriendships(userId)
    .then(userId => dispatch(receiveUsersFriendships(userId)))
)

// TODO fix naming of payloads