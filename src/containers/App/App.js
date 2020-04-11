import React from "react";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import configStore from "../../redux/configStore";
import Taskboard from "./../Taskboard/index";
import Modal from "./../../components/Modal/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../components/GlobalLoading/index";
import { BrowserRouter } from "react-router-dom";
const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <GlobalLoading />
        <Taskboard />
        <Modal />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
