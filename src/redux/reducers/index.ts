import { combineReducers } from 'redux';
import { AppState } from '../appstate';
import appInfoState from './appInfo';
import appValueState from './appValue';
import courseState from './course';
import categoryState from './category';
import topicState from './topic';
import lessonState from './lesson';
import assignmentState from './assignment';
import authState from './auth';
import ExamState from './examInfo';

const rootReducer = combineReducers<AppState>({
  appValueState: appValueState,
  appInfoState: appInfoState,
  auth: authState,
  categoryState: categoryState,
  courseState: courseState,
  topicState: topicState,
  lessonState: lessonState,
  assignmentState: assignmentState,
  examState: ExamState
});

export default rootReducer;
