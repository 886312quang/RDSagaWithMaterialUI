import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { ADMIN_ROUTES } from "./../../../constants/index";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";

class SidleBar extends Component {
 
  toggleDrawer = (value) => {
    const {onToggleSideBar} = this.props;
    if(onToggleSideBar){
      onToggleSideBar(value);
    }
  };
  renderList() {
    const { classes} = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        {ADMIN_ROUTES.map((item) => {
          return (
            <ListItem key={item.path} className={classes.menuItem} button>
              {item.name}
            </ListItem>
          );
        })}
      </div>
    );
    return xhtml;
  }
  render() {

    const { classes,showSideBar } = this.props;
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
