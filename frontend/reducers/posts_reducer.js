import { RECEIVE_POST, RECEIVE_POSTS, POST_POST} from '../actions/post_actions';

const postsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_POST:
      return Object.assign({}, oldState, )
    case RECEIVE_POSTS:
      return Object.assign({}, oldState, action.posts)
    case POST_POST:
      return Object.assign({})
    default:
      return oldState;
  }
}

export default postsReducer;