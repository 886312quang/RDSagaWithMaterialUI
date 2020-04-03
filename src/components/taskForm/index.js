import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import styles from '../../containers/Taskboard/styles';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
class TaskFrom extends Component {
   render() {
      const { open,classes,onClose } = this.props;
      return (
         <div>
            <Dialog
               open={open}
               onClose={onClose}
               aria-labelledby="form-dialog-title">
               <DialogTitle id="form-dialog-title">Add new task</DialogTitle>
               <DialogContent>
                  <form className={classes.root} noValidate autoComplete="off">
                     <TextField id="standard-basic" label="Standard" />
                     <TextField id="filled-basic" label="Filled" variant="filled" />
                     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  </form>
               </DialogContent>
               <DialogActions>
                  <Button onClick={onClose} color="primary">
                     Cancel
   </Button>
                  <Button onClick={onClose} color="primary">
                     OK
   </Button>
               </DialogActions>
            </Dialog>
         </div>
      )
   }
}
export default withStyles(styles)(TaskFrom);
