import { combineReducers } from 'redux';
import { AppState } from '../appstate';
import appInfoState from './appInfo';
import appValueState from './appValue';
import courseState from './course';
import categoryState from './category';
import topicState from './topic';
import authState from './auth';

const rootReducer = combineReducers<AppState>({
  appValueState: appValueState,
  appInfoState: appInfoState,
  auth: authState,
  categoryState: categoryState,
  courseState: courseState,
  topicState: topicState
});
export default rootReducer;
