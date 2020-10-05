import * as APIUtil from '../util/friendship_util';

export const POST_FRIENDSHIP = "POST_FRIENDSHIP";
export const RECEIVE_USER_FRIENDSHIPS = "RECEIVE_USER_FRIENDSHIPS";
export const CLEAR_FRIENDSHIPS = "CLEAR_FRIENDSHIPS"

const createFriendship = friendship => ({
  type: POST_FRIENDSHIP,
  friendship
})

const receiveUsersFriendships = friendships => ({
  type: RECEIVE_USER_FRIENDSHIPS,
  friendships
})

const clear = () => ({
  type: CLEAR_FRIENDSHIPS
})

// Thunk action creators
export const postFriendship = (user_id, friend_id) => dispatch => (
  APIUtil.postFriendship(user_id, friend_id)
    .then(friendship => dispatch(createFriendship(friendship)))
    // .catch(err => dispatch(receiveError(err)))
)

export const fetchFriendships = userId => dispatch => (
  APIUtil.fetchFriendships(userId)
    .then(friendships => dispatch(receiveUsersFriendships(friendships)))
    // .catch(err => dispatch(receiveError(err)))
)

export const clearFriendships = () => dispatch => (
  dispatch(clear())
)
