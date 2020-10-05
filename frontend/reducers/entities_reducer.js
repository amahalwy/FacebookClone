import { combineReducers} from 'redux';
import friendshipsReducer from './friendships_reducer'
import usersReducer from './users_reducer';
import friendRequestsReducer from './friend_request_reducer';
import postsReducer from './posts_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  friendRequests: friendRequestsReducer,
  friendships: friendshipsReducer,
  posts: postsReducer,
})

export default entitiesReducer;