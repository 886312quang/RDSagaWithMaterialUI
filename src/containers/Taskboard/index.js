import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/LibraryAdd';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants/index';
import TaskList from './../../components/taskList/index';
import TaskForm from './../../components/taskForm/index';

const ListTask = [
    {
        id: 1,
        title: "Read Book",
        description: "Read material book",
        status: 0
    },
    {
        id: 2,
        title: "Play Football",
        description: "With my friend",
        status: 1
    },
    {
        id: 3,
        title: "Play game",
        description: "FF20",
        status: 2
    }
]
class TaskBoard extends Component {
    state = {
        open: false
    }
    renderBoard() {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status) => {
                        const taskFilter = ListTask.filter(task => task.status === status.value)
                        return (
                            <TaskList task={taskFilter} status={status} key={status.value} />
                        )
                    })
                }
            </Grid>
        )
        return xhtml;
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    openForm = () => {
        this.setState({
            open: true
        })
    }
    renderFrom() {
        const { open } = this.state;
        let xhtml = null;
        xhtml = (
            <TaskForm open={open} onClose={this.handleClose}/>
        )
        return xhtml;
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskBoard}>
                <Button variant="contained"
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
        )
    }
}
export default withStyles(styles)(TaskBoard);

