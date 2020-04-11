import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import styles from "./styles"
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from "@material-ui/core/CardActions";
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Fab } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

class TaskItem extends Component {
    render() {
        const { classes, task, status,onClickEdit } = this.props;
        const { _id, title, description } = task;
        return (
            <Box m={2}>
                <Card key={_id} className={classes.card}>
                    <CardContent>
                        <Grid container justify="space-between">
                            <Grid item md={8}>
                                <Typography component="h2">
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item md={4}>
                                {status.label}
                            </Grid>
                        </Grid>
                        <p>{description}</p>
                    </CardContent>
                    <CardActions className={classes.CardActions}>
                        <Fab color="primary" aria-label="edit" className={classes.fab} size="small" onClick={onClickEdit}>
                            <Icon fontSize="small">
                                edit_icon
                            </Icon>
                        </Fab>
                        <Fab color="primary" aria-label="delete" className={classes.fab} size="small">
                            <Icon fontSize="small">
                                delete_icon
                            </Icon>
                        </Fab>
                        
                    </CardActions>
                </Card>
            </Box>
        )
    }
}
export default withStyles(styles)(TaskItem);
