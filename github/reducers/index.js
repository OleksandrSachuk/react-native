import { combineReducers } from 'redux';
import topReposReducer from './topReposReducer';

const rootReducer = combineReducers({
  topRepos: topReposReducer,
});

export default rootReducer;
