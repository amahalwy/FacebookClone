import * as APIUtil from '../util/posts_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const REMOVE_POST = "REMOVE_POST"
export const CLEAR_POSTS = "CLEAR_POSTS"
export const RECEIVE_POSTS_ERRORS = "RECEIVE_POSTS_ERRORS";
export const CLEAR_POSTS_ERRORS = "CLEAR_POSTS_ERRORS";

const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

const receiveUserPosts = posts => ({
  type: RECEIVE_USER_POSTS,
  posts
})

const removePost = postId => ({
  type: REMOVE_POST,
  postId
})

const receiveErrors = errors => ({
  type: RECEIVE_POSTS_ERRORS,
  errors
})

const clear = () => ({
  type: CLEAR_POSTS
})

const clearErrs = () => ({
  type: CLEAR_POSTS_ERRORS
})


// Thunks
export const fetchPost = postId => dispatch => (
  APIUtil.fetchPost(postId).then(
    post => dispatch(receivePost(post)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const fetchUserPosts = userId => dispatch => (
  APIUtil.fetchUserPosts(userId).then(
    posts => dispatch(receiveUserPosts(posts)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const createPost = post => dispatch => (
  APIUtil.createPost(post).then(
    post => dispatch(receivePost(post)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const updatePost = (postId, post) => dispatch => (
  APIUtil.updatePost(postId, post).then(
    post => dispatch(receivePost(post)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const deletePost = postId => dispatch => (
  APIUtil.deletePost(postId).then(
    () => dispatch(removePost(postId)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const clearPosts = () => dispatch => (
  dispatch(clear())
)

export const clearErrors = () => dispatch => (
  dispatch(clearErrs())
)