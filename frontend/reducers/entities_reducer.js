import { combineReducers} from 'redux';
import friendships from './friendships_reducer'
import users from './users_reducer';
import userShow from './user_show_reducer';
import friendRequests from './friend_request_reducer';
import posts from './posts_reducer';
import comments from './comments_reducer';
import likes from './likes_reducer';

const entitiesReducer = combineReducers({
  comments,
  users,
  userShow,
  friendRequests,
  friendships,
  posts,
  likes,
})

export default entitiesReducer;