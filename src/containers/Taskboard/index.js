import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Add from "@material-ui/icons/LibraryAdd";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchBox from "../../components/SearchBox";
import { STATUSES } from "../../constants/index";
import TaskForm from "../taskForm/index";
import * as modalActions from "./../../actions/modal";
import * as taskActions from "./../../actions/task";
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
        {STATUSES.map((actiontask) => {
          const taskFilter = ListTask.filter(
            (task) => task.actiontask === actiontask.value,
          );
          return (
            <TaskList
              task={taskFilter}
              status={actiontask}
              key={actiontask.value}
              onClickEdit={this.handleEditTask}
              onClickDelete={this.showModalDeleteTask}
            />
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
  handleDeleteTask(id){
    const {taskActionCreator} =this.props;
    const {deleteTask} = taskActionCreator;
    deleteTask(id);
  }
  showModalDeleteTask = (task) => {
    const { modalActionCreator, classes } = this.props;
    
    const {
      showModal,
      hideModal,
      changeModalContent,
    } = modalActionCreator;
    showModal();
    changeModalContent(
      <Grid container direction="row" justify="space-around" alignItems="center" mt={4} className={classes.mdDelete}>
        <Grid sm="auto" item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DoneAllIcon />}
            onClick={()=>this.handleDeleteTask(task._id)}
          >
            DELETE
          </Button>
        </Grid>
        <Grid sm="auto" item>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<CloseIcon />}
            onClick={hideModal}
          >
            CANCLE
          </Button>
        </Grid>
      </Grid>,
    );
  };

  handleEditTask = (task) => {
    const { taskActionCreator, modalActionCreator } = this.props;
    const { setTaskEditting } = taskActionCreator;
    setTaskEditting(task);
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreator;
    showModal();
    changeModalTitle("Edtting");
    changeModalContent(<TaskForm />);
  };
  openForm = () => {
    const { modalActionCreator, taskActionCreator } = this.props;
    const { setTaskEditting } = taskActionCreator;
    setTaskEditting(null);
    const {
      showModal,
      changeModalTitle,
      changeModalContent,
    } = modalActionCreator;
    showModal();
    changeModalTitle("Them moi");
    changeModalContent(<TaskForm />);
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
    modalActionCreator: bindActionCreators(modalActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard),
);
