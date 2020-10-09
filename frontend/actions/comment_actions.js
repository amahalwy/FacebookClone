import * as APIUtil from '../util/comments_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
})

// 
export const fetchPostComments = postId => dispatch => (
  APIUtil.fetchPostComments(postId).then(
    comments => dispatch(receiveComments(comments)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const deleteComment = commentId => dispatch => (
  APIUtil.deleteComment(commentId).then(
    () => dispatch(removeComment(commentId)),
    err => dispatch(receiveErrors(err.responseJSON)))
)