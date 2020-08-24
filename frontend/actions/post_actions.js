import * as APIUtil from '../util/posts_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const POST_POST = "POST_POST"

const receivePost = postId => ({
  type: RECEIVE_POST,
  postId
})

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

const createPost = post => ({
  type: POST_POST,
  post
})

// Thunks

export const fetchPost = postId => dispatch => (
  APIUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)))
)

export const fetchPosts = () => dispatch => (
  APIUtil.fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
)

export const postPost = post => dispatch => (
  APIUtil.postPost(post)
  .then(post => dispatch(receivePost(post)))
)