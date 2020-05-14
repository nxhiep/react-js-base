import { AppInfoState } from './reducers/appInfo';
import { AppValueState } from './reducers/appValue';
import { CourseState } from './reducers/course';
import { CategoryState } from './reducers/category';
import { TopicState } from './reducers/topic';

export interface AppState {
  appValueState: AppValueState;
  appInfoState: AppInfoState;
  courseState: CourseState;
  categoryState: CategoryState;
  topicState: TopicState;
}
