import * as APIUtil from '../util/posts_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const REMOVE_POST = "REMOVE_POST"
export const CLEAR_POSTS = "CLEAR_POSTS"

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

const clear = () => ({
  type: CLEAR_POSTS
})


// Thunks
export const fetchPost = postId => dispatch => (
  APIUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)))
    // .catch(err => dispatch(receiveError(err)))
)

export const fetchUserPosts = userId => dispatch => (
  APIUtil.fetchUserPosts(userId)
    .then(posts => dispatch(receiveUserPosts(posts)))
    // .catch(err => dispatch(receiveError(err)))
)

export const createPost = post => dispatch => (
  APIUtil.createPost(post)
    .then(post => dispatch(receiveUserPosts(post)))
    // .catch(err => dispatch(receiveError(err)))
)

export const updatePost = post => dispatch => (
  APIUtil.updatePost(post)
    .then(post => dispatch(receiveUserPosts(post)))
    // .catch(err => dispatch(receiveError(err)))
)

export const deletePost = postId => dispatch => (
  APIUtil.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
    // .catch(err => dispatch(receiveError(err)))
)

export const clearPosts = () => dispatch => (
  dispatch(clear())
)