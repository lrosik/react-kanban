import React, { Component } from "react";
import Task from "./Task";
import "../styles/tasks.css";

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
      <div className="card Tasks p-2">
        <h3>Tasks list title</h3>
        <input
          placeholder="Task name"
          className="form-control"
          type="text"
          value={this.state.newTask}
          onChange={e => this.handleAddInput(e)}
          onKeyUp={e => this.keyPressed(e)}
        />
        <button
          className="btn btn-primary mt-2"
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

  keyPressed = e => {
    if (e.keyCode === 13) this.handleAdd();
  };

  handleAdd() {
    if (this.state.newTask === "") return;

    const newId = this.findMaxId(this.state.tasks) + 1;
    let newTask = { id: newId, task: this.state.newTask };
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }));
    this.setState({ newTask: "" });
  }

  findMaxId(tasks) {
    if (!tasks[0]) return 0;

    let max = tasks[0].id;

    tasks.forEach(element => {
      max = max < element.id ? element.id : max;
    });

    console.log(max);
    return max;
  }
}

export default Tasks;
