import React, { Component } from "react";

class Task extends Component {
  render() {
    const { task, onDone } = this.props;

    return (
      <div className="m-3">
        <span className="m-2">{task.task}</span>
        <button
          onClick={() => onDone(task.id)}
          className="btn btn-outline-primary btn-sm"
        >
          Done
        </button>
      </div>
    );
  }
}

export default Task;
