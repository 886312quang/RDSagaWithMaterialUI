import { toastError } from "../helpers/toastHelper";
import * as taskConstants from "./../constants/task";

const initialState = {
  listTask: [],
  taskEditting: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK: {
      return {
        ...state,
        listTask: [],
      };
    }
    case taskConstants.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case taskConstants.FETCH_TASK_FAILED: {
      const { err } = action.payload;
      toastError(err);
      return {
        ...state,
        listTask: [],
      };
    }
    case taskConstants.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case taskConstants.ADD_TASK: {
      return {
        ...state,
      };
    }
    case taskConstants.ADD_TASK_SUCCESS: {
      const { data } = action.payload.data;
      return {
        ...state,
        listTask: [data.tasks].concat(state.listTask),
      };
    }
    case taskConstants.ADD_TASK_FAILED: {
      const { err } = action.payload;
      toastError(err);
      return {
        ...state,
      };
    }
    case taskConstants.SET_TASK_EDITTING: {
      const { task } = action.payload;
      return {
        ...state,
        taskEditting: task,
      };
    }
    case taskConstants.UPDATE_TASK_SUCCESS: {
      const { data } = action.payload.data;
      const { listTask } = state;
      const index = listTask.findIndex((item) => item._id === data._id );
      console.log("index", index);
      if (index !== -1) {
        const newlist = [
          ...listTask.slice(0, index),
          data,
          ...listTask.slice(index + 1),
        ];
        return {
          ...state,
          listTask: newlist,
        };
      }
      return {
        ...state
      }
    }

    default:
      return state;
  }
};
export default reducer;
