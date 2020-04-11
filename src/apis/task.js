import qs from 'query-string';
import axiosService from "./../commons/axiosService";
import { API_ENDPOINT } from "./../constants/index";

const url = "tasks";

export const getList = (params = {}) => {
  let queryParams = '';
  if(Object.keys(params).length>0){
    queryParams = `?${qs.stringify(params)}`;
  }

  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

export const addTaskApi = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`,data);
};

export const updateTaskApi = (data,taskID) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${taskID}`,data);
};
