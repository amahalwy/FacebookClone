import * as APIUtil from '../util/posts_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const POST_POST = "POST_POST"

const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
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

export const createPost = post => dispatch => (
  APIUtil.createPost(post)
  .then(post => dispatch(receivePost(post)))
)