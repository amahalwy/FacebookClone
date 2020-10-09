import * as APIUtil from '../util/friendship_util';

export const POST_FRIENDSHIP = "POST_FRIENDSHIP";
export const RECEIVE_USER_FRIENDSHIPS = "RECEIVE_USER_FRIENDSHIPS";
export const CLEAR_FRIENDSHIPS = "CLEAR_FRIENDSHIPS";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";
export const RECEIVE_FRIENDSHIP_ERRORS = "RECEIVE_FRIENDSHIP_ERRORS";
export const CLEAR_FRIENDSHIP_ERRORS = "CLEAR_FRIENDSHIP_ERRORS";

const createFriendship = friendship => ({
  type: POST_FRIENDSHIP,
  friendship
})

const receiveUsersFriendships = friendships => ({
  type: RECEIVE_USER_FRIENDSHIPS,
  friendships
})

const removeFriendship = friendshipId => ({
  type: REMOVE_FRIENDSHIP,
  friendshipId
})

const receiveErrors = errors => ({
  type: RECEIVE_FRIENDSHIP_ERRORS,
  errors
});

const clear = () => ({
  type: CLEAR_FRIENDSHIPS
})

const clearErrs = () => ({
  type: CLEAR_FRIENDSHIP_ERRORS
})

// Thunk action creators
export const postFriendship = (user_id, friend_id) => dispatch => (
  APIUtil.postFriendship(user_id, friend_id).then(
    friendship => dispatch(createFriendship(friendship)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const fetchFriendships = userId => dispatch => (
  APIUtil.fetchFriendships(userId).then(
    friendships => dispatch(receiveUsersFriendships(friendships)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const deleteFriendship = friendshipId => dispatch => (
  APIUtil.deleteFriendship(friendshipId).then(
    () => dispatch(removeFriendship(friendshipId)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const clearFriendships = () => dispatch => (
  dispatch(clear())
)

export const clearErrors = () => dispatch => (
  dispatch(clearErrs())
)
