import * as APIUtil from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"
export const CLEAR_USERS = "CLEAR_USERS";
export const CLEAR_USER = "CLEAR_USER";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})

const clear = () => ({
  type: CLEAR_USERS
})

const clearUser = () => ({
  type: CLEAR_USER,
});

// Thunk action creators
export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
    // .catch(err => dispatch(receiveError(err)))
)

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers()
    .then(users => dispatch(receiveAllUsers(users)))
    // .catch(err => dispatch(receiveError(err)))
)

export const updateUserPhoto = (userId, formData) => dispatch => (
  APIUtil.updateUserPhoto(userId, formData)
    .then(user => dispatch(receiveUser(user)))
    // .catch(err => dispatch(receiveError(err)))
)

export const clearUsers = () => dispatch => (
  dispatch(clear())
)

export const clearShow = () => dispatch => (
  dispatch(clearUser())
)