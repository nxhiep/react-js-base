import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { callElearningApi } from '../../services';
import { set as setTopic } from '../actions/topic';
import { TOPIC_FETCH_BY_PARENT_ID } from '../actions/types';

const fetchTopicByParentId = (parentId: number) => {
  return callElearningApi({
    url: `get-topic-by-parent-id?parentId=${parentId}&offset=0&limit=-1`,
    params: null,
    method: 'post'
  });
};

export function* fetch(action: any) {
  try {
    const response = yield call(fetchTopicByParentId, action.parentId);
    yield put(setTopic(response));
  } catch (err) {
    console.log(err);
  }
}

export function* watchFetch() {
  yield takeLatest(TOPIC_FETCH_BY_PARENT_ID, fetch);
}

export default function* course() {
  yield fork(watchFetch);
}
