import React from "react";
import "./Group.scss";

import Task from "../Task/Task";

export default class Group extends React.PureComponent {
  render() {
    const { tasks = [] } = this.props;

    return (
      <div className="group">
        {tasks.map(task => (
          <Task
            key={`task-${task.id}`}
            id={task.id}
            label={task.label}
            locked={task.lock}
            checked={task.checked}
          />
        ))}
      </div>
    );
  }
}
