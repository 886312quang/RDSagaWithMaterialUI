import { Box, Grid, withStyles, Radio } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm } from "redux-form";
import renderTextField from "../../components/FormHeplper";
import * as modalActions from "./../../actions/modal";
import * as taskActions from "./../../actions/task";
import styles from "./styles";
import validate from "./validate";
import radioButton from "../../components/FormHeplper/radioBt";
class TaskForm extends Component {
  handleSubmitForm = (data) => {
    const { taskActionCreators } = this.props;
    const { addTask } = taskActionCreators;
    const { title, description,actiontask } = data;
    addTask(title, description,actiontask);
  };
  render() {
    const {
      classes,
      modalActionCreators,
      handleSubmit,
      invalid,
      submitting,
    } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="title"
              label="Title"
              className={classes.TextField}
              margin="normal"
              name="title"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              label="Description"
              multiline
              className={classes.TextField}
              name="description"
              margin="normal"
              component={renderTextField}
            />
          </Grid>
          <Grid>
            <Field name="actiontask" component={radioButton}>
              <Radio value="1" label="Ready" />
              <Radio value="2" label="In Process" />
              <Radio value="3" label="Completed"/>
            </Field>
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Button disabled={invalid || submitting} ml={1} type="submit">
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
    modalActionCreators: bindActionCreators(modalActions, dispatch),
    taskActionCreators: bindActionCreators(taskActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const FORM_NAME = "TASK_MANAGEMENT";
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate: validate,
});
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
