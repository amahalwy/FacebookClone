import usersReducer from './users_reducer';
import friendshipRequestsReducer from './friendship_reducer';
import { combineReducers} from 'redux';

const entitiesReducer = combineReducers({
  users: usersReducer,
  // FRIENDSHIP STUFF
  friendRequests: friendshipRequestsReducer
  // comments: commentsReducer,
  // posts: postsReducer
})

export default entitiesReducer;