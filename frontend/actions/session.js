import * as APIUtil from '../util/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const clear = () => ({
  type: CLEAR_ERRORS
})

// Thunk action creators
export const signup = user => dispatch => (
  APIUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const login = user => dispatch => (
  APIUtil.login(user).then(
    user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveErrors(err.responseJSON)))
  )
);

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(() => dispatch(logoutCurrentUser()))
)

export const clearErrors = () => dispatch => (
  dispatch(clear())
)