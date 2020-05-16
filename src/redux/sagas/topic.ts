import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { callElearningApi } from '../../services';
import {
  set as setTopic,
  fetchOnProgress as fetchTopicOnProgress,
  fetchSuccess as fetchTopicSuccess,
} from '../actions/topic';
import {
  set as setLesson,
  fetchOnProgress as fetchLessonOnProgress,
  fetchSuccess as fetchLessonSuccess,
} from '../actions/lesson';
import {
  set as setAssignment,
  fetchOnProgress as fetchAssignmentOnProgress,
  fetchSuccess as fetchAssignmentSuccess,
} from '../actions/assignment';
import {
  TOPIC_FETCH_BY_PARENT_ID,
  TOPIC_FETCH_BY_TOPIC_ID,
} from '../actions/types';

const getTopicByParentId = (parentId: number) => {
  return callElearningApi({
    url: `get-topic-by-parent-id?parentId=${parentId}&offset=0&limit=-1`,
    params: null,
    method: 'post',
  });
};

const getTopicByTopicId = (topicId: number) => {
  return callElearningApi({
    url: `get-topic-by-id?topicId=${topicId}`,
    params: null,
    method: 'post',
  });
};

export function* fetchTopicByParentId(action: any) {
  try {
    const response = yield call(getTopicByParentId, action.parentId);
    yield put(setTopic(response));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchTopicByTopicId(action: any) {
  try {
    yield put(fetchLessonOnProgress());
    yield put(fetchTopicOnProgress());
    yield put(fetchAssignmentOnProgress());
    const response = yield call(getTopicByTopicId, action.topicId);
    if (response.type === 1) {
      //fetch current lesson
      yield put(setLesson(response));
      yield put(fetchLessonSuccess());

      // fetch assignment of current lesson
      const assignment = yield call(getTopicByParentId, action.topicId);
      yield put(setAssignment(assignment));
      yield put(fetchAssignmentSuccess());

      // fetch topic-part in the right hand side
      const topic = yield call(getTopicByParentId, response.parentId);
      yield put(setTopic(topic));
      yield put(fetchTopicSuccess());
    } else if (response.type === 2) yield put(setAssignment(response));
    else put(setTopic(response));
  } catch (err) {
    console.log(err);
  }
}

export function* watchFetchByParentId() {
  yield takeLatest(TOPIC_FETCH_BY_PARENT_ID, fetchTopicByParentId);
}

export function* watchFetchByTopicId() {
  yield takeLatest(TOPIC_FETCH_BY_TOPIC_ID, fetchTopicByTopicId);
}

export default function* course() {
  yield fork(watchFetchByParentId);
  yield fork(watchFetchByTopicId);
}
