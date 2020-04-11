import * as taskConstant from "./../constants/task";
export const fetchListTask = (params={}) => {
  return {
    type: taskConstant.FETCH_TASK,
    payload:{
      params,
    }
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

export const addTask = (title, description,actiontask) => {
  return {
    type: taskConstant.ADD_TASK,
    payload: {
      title,
      description,
      actiontask
    },
  };
};
export const addTaskSuccess = (data) => {
  return {
    type: taskConstant.ADD_TASK_SUCCESS,
    payload: {
     data,
    },
  };
};
export const addTaskFailed = (err) => ({
  type: taskConstant.ADD_TASK_FAILED,
  payload: {
    err,
  },
});

export const setTaskEditting = (task) => ({
  type: taskConstant.SET_TASK_EDITTING,
  payload: {
    task,
  },
});

export const updateTask = (title, description,actiontask) => {
  return {
    type: taskConstant.UPDATE_TASK,
    payload: {
      title,
      description,
      actiontask
    },
  };
};
export const updateTaskSuccess = (data) => {
  return {
    type: taskConstant.UPDATE_TASK_SUCCESS,
    payload: {
     data,
    },
  };
};
export const updateTaskFailed = (err) => ({
  type: taskConstant.UPDATE_TASK_FAILED,
  payload: {
    err,
  },
});
export const deleteTask = (id) => {
  return {
    type: taskConstant.DELETE_TASK,
    payload: {
     id
    },
  };
};
export const deleteTaskSuccess = (data) => {
  return {
    type: taskConstant.DELETE_TASK_SUCCESS,
    payload: {
     data,
    },
  };
};
export const deleteTaskFailed = (err) => ({
  type: taskConstant.DELETE_TASK_FAILED,
  payload: {
    err,
  },
});