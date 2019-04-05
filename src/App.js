import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "./App.css";
import tasks from "./tasks";

import Summary from "./components/Summary/Summary";
import Group from "./components/Group/Group";

@inject("store")
@observer
class App extends Component {
  _renderGroups = () => {
    const groups = Object.keys(this.props.store.groups).map(group => {
      return {
        title: group,
        completeCount: this.props.store.groups[group].filter(
          task => task.completedAt !== null
        ).length,
        totalCount: this.props.store.groups[group].length
      };
    });

    return groups.map(group => (
      <Summary
        key={`summary-${group.title}`}
        title={group.title}
        completedCount={group.completeCount}
        totalCount={group.totalCount}
      />
    ));
  };

  _renderUI = () => {
    if (this.props.store.showAllGroups) {
      return this._renderGroups();
    }

    return null;
  };

  render() {
    return (
      <div className="App">
        <h1>{this.props.store.pageTitle}</h1>
        <button onClick={this.props.store.viewAll}>All Groups</button>
        {this._renderUI()}
      </div>
    );
  }
}

export default App;
