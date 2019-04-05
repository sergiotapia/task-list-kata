import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "./App.css";

import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import Group from "./components/Group/Group";

@inject("store")
@observer
class App extends Component {
  _renderGroups = () => {
    return this.props.store.groupSummaries.map(group => (
      <Summary
        key={`summary-${group.title}`}
        title={group.title}
        completedCount={group.completedCount}
        totalCount={group.totalCount}
      />
    ));
  };

  _renderTasksForGroup = () => {
    return <Group tasks={this.props.store.tasksForGroup} />;
  };

  _renderUI = () => {
    if (this.props.store.isGroupSelected) {
      return this._renderTasksForGroup();
    } else {
      return this._renderGroups();
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this._renderUI()}
      </div>
    );
  }
}

export default App;
