import { combineReducers} from 'redux';
import friendshipsReducer from './friendships_reducer'
import usersReducer from './users_reducer';
import friendRequestsReducer from './friend_request_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  friendRequests: friendRequestsReducer,
  friendships: friendshipsReducer
  // comments: commentsReducer,
  // posts: postsReducer
})

export default entitiesReducer;