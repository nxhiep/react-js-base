import { call, put, fork, takeLatest } from 'redux-saga/effects';
import { callElearningApi } from '../../services';
import { set as setCourse } from '../actions/course';
import {
    GET_EXAM_INFO_BY_TOPIC_ID,
    GET_EXAM_QUESTION_BY_PARENT_ID,
} from '../actions/types';

const getInfoExamByTopicId = (topicId: number) => {
  return callElearningApi({
    url: `get-topic-by-id?topicId=${topicId}`,
    params: null,
    method: 'post',
  });
};

const getQuestionByExamId = (examId: number) => {
  return callElearningApi({
    url: `question-by-parent-id?parentId=${examId}&offset=0&limit=-1`,
    params: null,
    method: 'post',
  });
};

export function* fetchInfoExamByTopicId(action: any) {
  try {
    const response = yield call(getInfoExamByTopicId, action.topicId);
    yield put(setCourse(response));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchQuestionByParentId(action: any) {
  try {
    const response = yield call(getQuestionByExamId, action.parentId);
    yield put(setCourse(response));
  } catch (err) {
    console.log(err);
  }
}

export function* watchFetchInfoExamByTopicId() {
  yield takeLatest(GET_EXAM_INFO_BY_TOPIC_ID, fetchInfoExamByTopicId);
}

export function* watchFetchQuestionByParentId() {
  yield takeLatest(GET_EXAM_QUESTION_BY_PARENT_ID, fetchQuestionByParentId);
}

export default function* exam() {
  yield fork(watchFetchInfoExamByTopicId);
  yield fork(watchFetchQuestionByParentId);
}
