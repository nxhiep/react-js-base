import { all } from 'redux-saga/effects';
import { appInfoSaga } from './appInfo';

export default function* rootSaga() {
    yield all([
        ...appInfoSaga,
    ]);
}