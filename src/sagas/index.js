import { call, delay, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { hideModal } from "../actions/modal";
import { addTaskFailed, addTaskSuccess, fetchListTask, fetchListTaskFailed, fetchListTaskSuccess } from "../actions/task";
import { hideLoading, showLoading } from "./../actions/ui";
import { addTaskApi, getList } from "./../apis/task";
import { STATUS_CODE } from "./../constants/index";
import * as taskTypes from "./../constants/task";
function* watchListTaskAction() {
  while (true) {
    const action = yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const { params } = action.payload;
    const res = yield call(getList, params);
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
function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(
    fetchListTask({
      q: keyword,
    }),
  );
}
function* addTaskSaga({ payload }) {
  const { title, description, actiontask } = payload;
  yield put(showLoading());
  const resp = yield call(addTaskApi, {
    title,
    description,
    actiontask,
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(addTaskSuccess({ data }));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}
function* rootSaga() {
  yield fork(watchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
}
export default rootSaga;
