import { call, fork, take, put } from "redux-saga/effects";
import { getList } from "./../apis/task";
import * as taskTypes from "./../constants/task";
import { STATUS_CODE } from "./../constants/index";
import { fetchListTaskSuccess, fetchListTaskFailed } from "../actions/task";
function* watchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    const res = yield call(getList);
    const { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
  }
}
function* watchCreateTaskAction() {}

function* rootSaga() {
  yield fork(watchListTaskAction);
  yield fork(watchCreateTaskAction);
}
export default rootSaga;
