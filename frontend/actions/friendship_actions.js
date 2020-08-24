import * as APIUtil from '../util/friendship_util';

export const POST_FRIENDSHIP = "POST_FRIENDSHIP";
export const RECEIVE_USER_FRIENDSHIPS = "RECEIVE_USER_FRIENDSHIPS";

const createFriendship = friendship => ({
  type: POST_FRIENDSHIP,
  friendship
})

const receiveUsersFriendships = friendships => ({
  type: RECEIVE_USER_FRIENDSHIPS,
  friendships
})

// Thunk action creators
export const postFriendship = (user_id, friend_id) => dispatch => (
  APIUtil.postFriendship(user_id, friend_id)
    .then(friendship => dispatch(createFriendship(friendship)))
)

export const fetchFriendships = userId => dispatch => (
  APIUtil.fetchFriendships(userId)
    .then(friendships => dispatch(receiveUsersFriendships(friendships)))
)
