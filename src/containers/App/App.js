import React, { Component } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../components/GlobalLoading/index";
import configStore from "../../redux/configStore";
import Modal from "./../../components/Modal/index";
import { BrowserRouter, Switch } from "react-router-dom";
import { ADMIN_ROUTES } from "../../constants";
import AdminLayoutRoute from "./../../commons/Layout/AdminLayoutRoute/index";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from '../../commons/theme/theme';
const store = configStore();

class App extends Component {
  renderAdminRoute() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        />
      );
    });
    return xhtml;
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <ToastContainer />
            <GlobalLoading />
            <Modal />
            <Switch>{this.renderAdminRoute()}</Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
