import React from "react";
import { Provider } from "react-redux";
import Taskboard from "./../Taskboard/index";
import configStore from "../../redux/configStore";

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <Taskboard />
    </Provider>
  );
}

export default App;
