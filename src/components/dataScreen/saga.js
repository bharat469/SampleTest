import {put, takeLatest, call} from 'redux-saga/effects';
import * as actionType from './constant';
import {GetWorldDetail} from './api';
import {GENRIC_ERROR} from '../../helpers/constantText';

export function* GetCountryDetailSaga({payload}) {
  try {
    yield put({type: actionType.GET_WORLD_DETAILS_PROGRESS});
    const data = yield call(GetWorldDetail, payload);

    if (data) {
      yield put({type: actionType.GET_WORLD_DETAILS_SUCCESS, payload: data});
    } else {
      yield put({
        type: actionType.GET_WORLD_DETAILS_FAILURE,
        payload: {message: data.message},
      });
    }
  } catch (error) {
    yield put({
      type: actionType.GET_WORLD_DETAILS_FAILURE,
      payload: {message: GENRIC_ERROR},
    });
  }
}

export default function* watchAll() {
  yield takeLatest(actionType.GET_WORLD_DETAILS, GetCountryDetailSaga);
}
