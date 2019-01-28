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
        {this.state.tasks.map(task => (
          <Task key={task.id} task={task} onDone={this.handleDone} />
        ))}
      </div>
    );
  }

  handleDone = id => {
    const tasks = this.state.tasks.filter(t => t.id != id);
    this.setState({ tasks });
  };
}

export default Tasks;
