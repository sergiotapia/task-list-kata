import React, { Component } from "react";
import "./App.css";

import Task from "./components/Task/Task";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Task id="3" label="Test" locked={true} />
        <Task id="1" label="Test" checked={false} />
        <Task id="2" label="Test" checked={true} />
      </div>
    );
  }
}

export default App;
