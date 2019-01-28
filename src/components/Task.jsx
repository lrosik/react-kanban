import React, { Component } from "react";

class Task extends Component {
  state = {};
  render() {
    return (
      <div className="m-3">
        <span className="m-2">task</span>
        <button className="btn btn-outline-primary btn-sm">Done</button>
      </div>
    );
  }
}

export default Task;
