import { combineReducers } from 'redux';
import reducer_authenticate from './reducer_authenticate';

const rootReducer = combineReducers({
  authenticated: reducer_authenticate
});

export default rootReducer;
