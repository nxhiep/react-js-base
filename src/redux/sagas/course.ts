import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { callElearningApi } from '../../services';
import { set as setCourse } from '../actions/course';
import {
  COURSE_FETCH_BY_CATEGORY_ID,
  COURSE_FETCH_BY_COURSE_ID,
} from '../actions/types';

const getCourseByCategoryId = (categoryId: number) => {
  return callElearningApi({
    url: `get-course-by-category?categoryId=${categoryId}&offset=0&limit=-1`,
    params: null,
    method: 'post',
  });
};

const getCourseByCourseId = (courseId: number) => {
  return callElearningApi({
    url: `get-course-by-id?courseId=${courseId}`,
    params: null,
    method: 'post',
  });
};

export function* fetchCourseByCategoryId(action: any) {
  try {
    const response = yield call(getCourseByCategoryId, action.categoryId);
    yield put(setCourse(response));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchCourseByCourseId(action: any) {
  try {
    const response = yield call(getCourseByCourseId, action.courseId);
    yield put(setCourse(response));
  } catch (err) {
    console.log(err);
  }
}

export function* watchFetchCourseByCategoryId() {
  yield takeLatest(COURSE_FETCH_BY_CATEGORY_ID, fetchCourseByCategoryId);
}

export function* watchFetchCourseByCourseId() {
  yield takeLatest(COURSE_FETCH_BY_COURSE_ID, fetchCourseByCourseId);
}

export default function* course() {
  yield fork(watchFetchCourseByCategoryId);
  yield fork(watchFetchCourseByCourseId);
}
