import * as APIUtil from '../util/like_util';

export const POST_LIKE = "POST_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";
export const CLEAR_LIKES = "CLEAR_LIKES";
export const CLEAR_LIKE_ERRORS = "CLEAR_LIKE_ERRORS";

const createLike = like => ({
  type: POST_LIKE,
  like
})

const receiveErrors = errors => ({
  type: RECEIVE_LIKE_ERRORS,
  errors
})

const removeLike = likeId => ({
  type: REMOVE_LIKE,
  likeId
})

const clear = () => ({
  type: CLEAR_LIKES  
})

const clearErrs = () => ({
  type: CLEAR_LIKE_ERRORS
})

export const postLike = (ownerId, postId) => dispatch => (
  APIUtil.postLike(ownerId, postId).then(
    like => dispatch(createLike(like)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
)

export const deleteLike = likeId => dispatch => (
  APIUtil.deleteLike(likeId).then(
    () => dispatch(removeLike(likeId)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
)

export const clearLikes = () => dispatch => (
  dispatch(clear())
)

export const clearLikeErrors = () => dispatch => (
  dispatch(clearErrs())
)
