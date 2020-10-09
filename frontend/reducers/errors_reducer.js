import { combineReducers } from 'redux';
import session from './sessions_errors_reducer';
import user from './users_errors_reducer';
import comments from './comments_errors_reducer';
import posts from './posts_errors_reducer';
import friendRequests from './friend_request_errors_reducer';
import friendships from './friendships_errors_reducer';

export default combineReducers({
  session,
  user,
  comments,
  posts,
  friendRequests,
  friendships
})