import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  state = {
    newTask: "",
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
        <input
          placeholder="Task name"
          className="form-control m-2 w-25"
          type="text"
          value={this.state.newTask}
          onChange={e => this.handleAddInput(e)}
        />
        <button
          className="btn btn-primary m-2"
          onClick={() => this.handleAdd()}
        >
          Add
        </button>
        {this.state.tasks.map(task => (
          <Task key={task.id} task={task} onDone={this.handleDone} />
        ))}
      </div>
    );
  }

  handleDone = id => {
    const tasks = this.state.tasks.filter(t => t.id !== id);
    this.setState({ tasks });
  };

  handleAddInput = e => {
    this.setState({ newTask: e.target.value });
  };

  handleAdd() {
    const newId = this.findMaxId(this.state.tasks) + 1;
    const newTask = { id: newId, task: this.state.newTask };
    this.setState(pState => ({
      tasks: [...pState.tasks, newTask]
    }));
  }

  findMaxId(tasks) {
    let max = tasks[0].id;

    tasks.forEach(element => {
      max = max < element.id ? element.id : max;
    });

    console.log(max);
    return max;
  }
}

export default Tasks;
