import * as taskApis from "./../apis/task";
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

export const fetchListTaskRequest = () => {
  return (dispatch) => {
    dispatch(fetchListTask());
    taskApis
      .getList()
      .then((res) => {
        const { data } = res;
        dispatch(fetchListTaskSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchListTaskFailed(err));
      });
  };
};
