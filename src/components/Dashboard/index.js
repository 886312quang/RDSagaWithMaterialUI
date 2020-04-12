import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Header from "./../Dashboard/Header/index";
import SildeBar from "./../Dashboard/SidleBar/index";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as uiActions from "../../actions/ui";
import cn from "classnames";
class Dashboard extends Component {
  handleToggleSideBar = (value) => {
    const { uiActionCreator } = this.props;
    const { showSideBar, hideSideBar } = uiActionCreator;
    if (value === true) {
      showSideBar();
    } else {
      hideSideBar();
    }
  };
  render() {
    const { classes, children, name, showSideBar } = this.props;
    return (
      <div className={classes.Dashboard}>
        <Header
          name={name}
          showSideBar={showSideBar}
          onToggleSidebar={this.handleToggleSideBar}
        />
        <div className={classes.wrapper}>
          <SildeBar
            showSideBar={showSideBar}
            onToggleSidebar={this.handleToggleSideBar}
          />
          <div className={cn(classes.wrapperContent,{
            [classes.shiftLeft]: showSideBar ===false,
          })}>{children}</div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    uiActionCreator: bindActionCreators(uiActions, dispatch),
  };
};
const mapStateToProps = (state) => {
  return {
    showSideBar: state.ui.showSideBar,
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, withStyles(styles))(Dashboard);
