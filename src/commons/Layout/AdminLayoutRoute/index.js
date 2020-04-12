import React, { Component } from "react";
import { Route } from "react-router-dom";
import Dashboard from "./../../../components/Dashboard/index";

class AdminLayoutRoute extends Component {
  render() { 
    const { component: Yourcomponent, name, ...remainProsp } = this.props;
    return (
      <Route
        {...remainProsp}
        render={(routeProps) => {
          return (
            <Dashboard name={name}>
              <Yourcomponent {...routeProps} />
            </Dashboard>
          );
        }}
      />
    );
  }
}

export default AdminLayoutRoute;
