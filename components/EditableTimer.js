import PropTypes from "prop-types";
import React from "react";

import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default class EditableTimer extends React.Component {
  state = {
    editFormOpen: false
  };

  render() {
    const { id, title, project, elapsed, isRunning } = this.props;
    const { editFormOpen } = this.state;

    if (editFormOpen) {
      return (
        <TimerForm
          id={id}
          title={title}
          project={project}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <Timer
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          isRunning={isRunning}
          onEditPress={this.handleEditPress}
          onRemovePress={this.handleRemovePress}
          onStartPress={this.handleStartPress}
          onStopPress={this.handleStopPress}
        />
      );
    }
  }

  handleEditPress = () => {
    this.openForm();
  };

  handleRemovePress = () => {
    const { onDeleteTimer, id } = this.props;
    onDeleteTimer(id);
  };

  handleStartPress = () => {
    const { onStartPress, id } = this.props;
    onStartPress(id);
  };

  handleStopPress = () => {
    const { onStopPress, id } = this.props;
    onStopPress(id);
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = timer => {
    const { onFormSubmit } = this.props;

    onFormSubmit(timer);
    this.closeForm();
  };

  openForm = () => {
    this.setState(() => ({ editFormOpen: true }));
  };

  closeForm = () => {
    this.setState(() => ({ editFormOpen: false }));
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    elapsed: PropTypes.number.isRequired,
    isRunning: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    onDeleteTimer: PropTypes.func.isRequired,
    onStartPress: PropTypes.func.isRequired,
    onStopPress: PropTypes.func.isRequired
  };
}
