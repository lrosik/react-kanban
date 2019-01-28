import React, { Component } from "react";
import Task from "./components/Task";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Task />
        <Task />
        <Task />
        <Task />
      </React.Fragment>
    );
  }
}

export default App;
