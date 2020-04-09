import { Box, Grid, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import styles from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActions from "./../../actions/modal";
class TaskForm extends Component {
  render() {
    const { classes, modalActionsCreator } = this.props;
    const { hideModal } = modalActionsCreator;
    return (
      <form>
        <Grid container>
          <Grid item md={12}>
            <TextField id="jobs" label="Jobs" className={classes.TextField} />
          </Grid>
          <Grid item md={12}>
            <TextField
              id="Describe"
              label="Describe"
              className={classes.TextField}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Button ml={1} type="submit">
                Save
              </Button>
              <Button ml={1} onClick={hideModal}>
                Cancel
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionsCreator: bindActionCreators(modalActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskForm),
);
