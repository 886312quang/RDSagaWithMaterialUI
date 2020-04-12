import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import styles from "./styles";
import {withRouter} from 'react-router';
const menuId = "primary-search-account-menu";
const mobileMenuId = "primary-search-account-menu-mobile";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMoreAnchorEl: null,
      isMobileMenuOpen: false,
      anchorEl: null,
      isMenuOpen: false,
    };
  }
  handleMobileMenuOpen = (e) => {
    this.setState({
      mobileMoreAnchorEl: e.currentTarget,
    });
  };
  handleProfileMenuOpen = (e) => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };
  handleMobileMenuClose = () => {
    this.setState({
      mobileMoreAnchorEl: null,
    });
  };
  handleMenuClose = () => {
    this.setState({
      anchorEl: null,
    });
  };
  handleLogout = () => {
    const { history} = this.props;
    if(history){
      history.push('/login');
    }
  }
  renderMenu = () => {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
      </Menu>
    );
  };
  renderMobileMenu = () => {
    const { mobileMoreAnchorEl } = this.state;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    return (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  };

hanldeToggleSideBar= () =>{
  const {showSideBar,onToggleSidebar} = this.props;
  if(onToggleSidebar){
    onToggleSidebar(!showSideBar);
  }
}
  render() {
    const { classes, name } = this.props;
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={this.hanldeToggleSideBar}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              {name}
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {this.renderMobileMenu()}
        {this.renderMenu()}
      </div>
    );
  }
}
export default withStyles(styles)(withRouter(Header));
