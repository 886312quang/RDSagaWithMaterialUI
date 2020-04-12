import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { ADMIN_ROUTES } from "./../../../constants/index";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import { NavLink } from "react-router-dom";
import { ListItemSecondaryAction } from "@material-ui/core";

class SidleBar extends Component {
  toggleDrawer = (value) => {
    const { onToggleSideBar } = this.props;
    if (onToggleSideBar) {
      onToggleSideBar(value);
    }
  };
  renderList() {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map((item) => {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuLinkActive}
              >
                <ListItem className={classes.menuItem} button>
                  {item.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  }
  render() {
    const { classes, showSideBar } = this.props;
    return (
      <Drawer
        open={showSideBar}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={() => this.toggleDrawer(false)}
      >
        {this.renderList()}
      </Drawer>
    );
  }
}
export default withStyles(styles)(SidleBar);
