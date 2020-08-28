import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import sessionErrorsReducer from './sessions_errors_reducer';

const RootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: sessionErrorsReducer
})

export default RootReducer;