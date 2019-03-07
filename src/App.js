import React, { Component } from "react";
import Tasks from "./components/Tasks";
import "./styles/app.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav>NavBar</nav>
        <div className="scrolling-container">
          <Tasks />
          <Tasks />
          <Tasks />
          <Tasks />
          <Tasks />
          <Tasks />
        </div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
