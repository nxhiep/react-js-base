import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { callElearningApi } from '../../services';
import { set as setCourse } from '../actions/course';
import { COURSE_FETCH_BY_CATEGORY } from '../actions/types';

const fetchCourseByCategoryId = (categoryId: number) => {
  return callElearningApi({
    url: `get-course-by-category?categoryId=${categoryId}&offset=0&limit=-1`,
    params: null,
    method: 'post'
  });
};

export function* fetch(action: any) {
  try {
    const response = yield call(fetchCourseByCategoryId, action.categoryId);
    yield put(setCourse(response));
  } catch (err) {
    console.log(err);
  }
}

export function* watchFetch() {
  yield takeLatest(COURSE_FETCH_BY_CATEGORY, fetch);
}

export default function* course() {
  yield fork(watchFetch);
}
