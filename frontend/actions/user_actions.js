import * as APIUtil from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})

// Thunk action creators

export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId)
  .then(user => dispatch(receiveUser(user)))
)

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers()
  .then(users => dispatch(receiveAllUsers(users)))
)