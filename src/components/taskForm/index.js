import { Box, Grid, Modal, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import styles from "./styles";
class TaskFrom extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modal}>
          <div className={classes.header}>
              <span>ADD NEW TASK</span>
          </div>
          <from>
            <Grid container>
              <Grid item md={12}>
                <TextField
                  id="jobs"
                  label="Jobs"
                  className={classes.TextField}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="jDescribe"
                  label="Describe"
                  className={classes.TextField}
                />
              </Grid>
              <Grid item md={12}>
                <Box display="flex" flexDirection="row-reverse" mt={2}>
                  <Button ml={1} onClick={onClose} type="submit">
                    Save
                  </Button>
                  <Button ml={1} onClick={onClose}>
                    Cancel
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </from>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(TaskFrom);
