import { Box, Grid, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox'
import React, { Component } from "react";
import styles from "./styles";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as modalActions from "./../../actions/modal";
import { reduxForm, Field } from "redux-form";
import renderTextField from "../../components/FormHeplper";
class TaskForm extends Component {
  handleSubmitForm = (data) => {
    console.log("data:", data);
  };
  render() {
    const { classes, modalActionsCreator, handleSubmit } = this.props;
    const { hideModal } = modalActionsCreator;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="title"
              label="Title"
              className={classes.TextField}
              margin="normal"
              name="Title"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Description"
              multiline
              className={classes.TextField}
              name="Description"
              margin="normal"
              component={renderTextField}
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
const withConnect = connect(mapDispatchToProps, mapStateToProps);
const FORM_NAME = "TASK_MANAGEMENT";
const withReduxForm = reduxForm({
  form: FORM_NAME,
});
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
