import React, { Component } from "react";
import { Route } from "react-router-dom";

class DefaultLayoutRoute extends Component {
  render() {
    const { component: Yourcomponent, name, ...remainProsp } = this.props;
    return (
      <Route
        {...remainProsp}
        render={(routeProps) => {
          return <Yourcomponent {...routeProps} />;
        }}
      />
    );
  }
}

export default DefaultLayoutRoute;
