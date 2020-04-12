import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Header from "./../Dashboard/Header/index";
import SildeBar from "./../Dashboard/SidleBar/index";
import TashBoard from './../../containers/Taskboard/index';
class Dashboard extends Component {
  render() {
    const { classes,children,name} = this.props;
    return (
      <div className={classes.Dashboard}>
        <Header name={name} />
        <SildeBar />
        {children}
      </div>
    );
  }
}
export default withStyles(styles)(Dashboard);
