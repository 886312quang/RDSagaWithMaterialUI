import AdminHomePage from "./../containers/AdminHomePage/index";
import TaskBoardPage from "./../containers/Taskboard/index";
export const API_ENDPOINT = "http://localhost:9999/api";

export const STATUSES = [
  {
    value: 1,
    label: "READY",
  },
  {
    value: 2,
    label: "In Progress",
  },
  {
    value: 3,
    label: "Complete",
  },
];
export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const ROUTES = [
  {
    path: "/",
    name: "AdminPage",
    exact: true,
    component: AdminHomePage,
  },
  {
    path: "/",
    name: "TaskBoardPage",
    exact: true,
    component: TaskBoardPage,
  },
];
