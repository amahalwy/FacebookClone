import usersReducer from './users_reducer';
import { combineReducers} from 'redux';

const entitiesReducer = combineReducers({
  users: usersReducer,
  // comments: commentsReducer,
  // posts: postsReducer
})

export default entitiesReducer;
