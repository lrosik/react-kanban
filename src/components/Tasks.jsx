import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  state = {
    tasks: [
      { id: 1, task: "Task 1" },
      { id: 2, task: "Task 2" },
      { id: 3, task: "Task 3" },
      { id: 4, task: "Task 4" }
    ]
  };
  render() {
    return (
      <div>
        {this.state.tasks.map(t => (
          <Task key={t.id} task={t.task} />
        ))}
      </div>
    );
  }
}

export default Tasks;
