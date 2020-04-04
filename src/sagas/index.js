import { call, fork, take, put, delay } from "redux-saga/effects";
import { getList } from "./../apis/task";
import * as taskTypes from "./../constants/task";
import { STATUS_CODE } from "./../constants/index";
import { fetchListTaskSuccess, fetchListTaskFailed } from "../actions/task";
import { showLoading, hideLoading} from './../actions/ui';
function* watchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const res = yield call(getList);
    const { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}
function* watchCreateTaskAction() {}

function* rootSaga() {
  yield fork(watchListTaskAction);
  yield fork(watchCreateTaskAction);
}
export default rootSaga;
