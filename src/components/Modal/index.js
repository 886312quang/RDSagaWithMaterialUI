import { withStyles, Modal } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActions from "./../../actions/modal";
import styles from "./styles";
class commonModal extends Component {
  render() {
    const { open, classes, component, modalActionsCreator, title } = this.props;
    const { hideModal } = modalActionsCreator;
    return (
      <Modal
        open={open}
        onClose={hideModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      
        <div className={classes.modal}>
          <div className={classes.header}>
              <span className={classes.titlel}>{title}</span>
            </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    modalActionsCreator: bindActionCreators(modalActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(commonModal),
);
