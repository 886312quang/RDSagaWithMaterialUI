import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Header from "./../Dashboard/Header/index";
import SildeBar from "./../Dashboard/Header/index";
class Dashboard extends Component {
  render() {
    const { classes,children } = this.props;
    return (
      <div className={classes.Dashboard}>
        <Header />
        <SildeBar />
        {children}
      </div>
    );
  }
}
export default withStyles(styles)(Dashboard);
