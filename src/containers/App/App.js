import React from "react";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import configStore from "../../redux/configStore";
import Taskboard from "./../Taskboard/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../components/GlobalLoading/index";
const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <GlobalLoading/>
      <Taskboard />
    </Provider>
  );
}

export default App;
