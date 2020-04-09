
import * as taskConstant from "./../constants/task";
export const fetchListTask = () => {
  return {
    type: taskConstant.FETCH_TASK,
  };
};
export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstant.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListTaskFailed = (err) => {
  return {
    type: taskConstant.FETCH_TASK_FAILED,
    payload: {
      err,
    },
  };
};
export const filterTask = (keyword) => ({
  type: taskConstant.FILTER_TASK,
  payload: {
    keyword,
  },
});
export const filterTaskSuccess = (data) => ({
  type: taskConstant.FILTER_TASK_SUCCESS,
  payload: {
    data,
  },
});
