import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Add from "@material-ui/icons/LibraryAdd";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchBox from "../../components/SearchBox";
import { STATUSES } from "../../constants/index";
import * as taskActions from "./../../actions/task";
import TaskForm from "./../../components/taskForm/index";
import TaskList from "./../../components/taskList/index";
import styles from "./styles";
class TaskBoard extends Component {
  state = {
    open: false,
  };
  componentDidMount() {
    const { taskActionCreator } = this.props;
    const { fetchListTask } = taskActionCreator;
    fetchListTask();
  }
  renderBoard() {
    const { ListTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFilter = ListTask.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList task={taskFilter} status={status} key={status.value} />
          );
        })}
      </Grid>
    );
    return xhtml;
  }
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActionCreator } = this.props;
    const { filterTask } = taskActionCreator;
    filterTask(value);
  };
  openForm = () => {
    this.setState({
      open: true,
    });
  };
  renderFrom() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }
  renderSearchBox() {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
    return xhtml;
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        {this.renderSearchBox()}
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<Add />}
          onClick={this.openForm}
        >
          Add new task
        </Button>
        {this.renderBoard()}
        {this.renderFrom()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ListTask: state.task.listTask,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskActionCreator: bindActionCreators(taskActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard),
);
