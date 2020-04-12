import AdminHomePage from "./../containers/AdminHomePage/index";
import TaskBoardPage from "./../containers/Taskboard/index";
import LoginPage from "./../containers/LoginPage/index";
import SignupPage from "./../containers/SignupPage/index";
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

export const ADMIN_ROUTES = [
  {
    path: "/admin",
    name: "AdminPage",
    exact: true,
    component: AdminHomePage,
  },
  {
    path: "/admin/task-board",
    name: "TaskBoard",
    exact: true,
    component: TaskBoardPage,
  },
];

export const ROUTES = [
  {
    name: "Login",
    path: "/login",
    component: LoginPage,
  },
  {
    name: "Signup",
    path: "/Signup",
    component:SignupPage,
    
  },
];
