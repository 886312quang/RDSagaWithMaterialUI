import React, { Component } from 'react'
import Box from '@material-ui/core/Box';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/styles';
import TaskItem from './../taskItems/index';
class TaskList extends Component {
    render() {
        const { classes, task, status } = this.props;
        return (
            <Grid item md={4} xs={12} key={status.value}>
                <Box m={3}>
                    <div className={classes.status}>{status.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {
                        task.map((task) => {
                            return (
                                <TaskItem task={task} status={status} key={task.id}/>    
                            )
                        })
                    }
                </div>
            </Grid>
        )
    }
}
export default withStyles(styles)(TaskList);