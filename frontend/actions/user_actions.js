import * as APIUtil from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"
export const CLEAR_USERS = "CLEAR_USERS";
export const CLEAR_USER = "CLEAR_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

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

const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

const clearErrs = () => ({
  type: CLEAR_USER_ERRORS
})

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

// Thunk action creators
export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers().then(
    users => dispatch(receiveAllUsers(users)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const updateUserPhoto = (userId, formData) => dispatch => (
  APIUtil.updateUserPhoto(userId, formData).then(
    user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const clearUsers = () => dispatch => (
  dispatch(clear())
)

export const clearShow = () => dispatch => (
  dispatch(clearUser())
)

export const clearErrors = () => dispatch => (
  dispatch(clearErrs())
)

export const getCurrentUser = userId => dispatch => (
  APIUtil.fetchUser(userId).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
)