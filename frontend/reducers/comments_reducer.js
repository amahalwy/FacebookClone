import { 
      RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT 
      } from '../actions/comment_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_COMMENT:
      return Object.assign({}, oldState, {[action.comment.id]: action.comment})
    case RECEIVE_COMMENTS:
      return Object.assign({}, oldState, action.comments)
    case REMOVE_COMMENT:
      let newState = Object.assign({}, oldState);
      delete newState[action.commentId];
      return newState;
    default:
      return oldState;
  }
}