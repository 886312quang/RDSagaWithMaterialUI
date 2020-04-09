import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import loadingIcon from "../../assets/images/loading-1.gif";
import styles from "./styles";
import {  compose } from "redux";
import { connect } from "react-redux";

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img src={loadingIcon} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}
const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};

const withConnect = connect(mapStateToProps, null);
export default compose(withStyles(styles), withConnect)(GlobalLoading);
