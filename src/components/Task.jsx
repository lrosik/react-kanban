import React, { Component } from "react";

class Task extends Component {
  render() {
    const { task, onDone } = this.props;

    return (
      <div className="card m-2">
        <div className="card-body">
          <h5 className="card-title">{task.task}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={() => onDone(task.id)}
            className="btn btn-outline-primary btn-sm"
          >
            Done
          </button>
        </div>
      </div>
    );
  }
}

export default Task;
