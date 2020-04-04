import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import styles from "./styles"


class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
         <TextField 
            label="Search..." 
            onChange={handleChange}
            className={classes.textField}
            autoComplete="off"
        />
       
      </form>
    );
  }
}
export default withStyles(styles)(SearchBox);
