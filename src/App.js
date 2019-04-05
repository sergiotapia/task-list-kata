import React, { Component } from "react";
import "./App.css";
import tasks from "./tasks";

import Group from "./components/Group/Group";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Group tasks={tasks} />
      </div>
    );
  }
}

export default App;
