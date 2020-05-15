import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { callElearningApi } from '../../services';
import { set as setTopic } from '../actions/topic';
import { set as setLesson } from '../actions/lesson';
import { set as setAssignment } from '../actions/assignment';
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
    const response = yield call(getTopicByTopicId, action.topicId);
    console.log(response);
    if (response.type === 1) yield put(setLesson(response));
    else if (response.type === 2) yield put(setAssignment(response)); 
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
