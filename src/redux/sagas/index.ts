import { all, fork } from 'redux-saga/effects';
import { appInfoSaga } from './appInfo';
import course from './course';
import category from './category';
import topic from './topic';

export default function* rootSaga() {
  yield fork(course);
  yield fork(category);
  yield fork(topic);
  yield all([...appInfoSaga]);
}
