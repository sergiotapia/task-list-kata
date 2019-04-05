import React from "react";
import "./Group.scss";

import Task from "../Task/Task";

export default class Group extends React.PureComponent {
  render() {
    const { title, tasks = [] } = this.props;

    return (
      <div className="group">
        <div className="group__header">
          <h1>{title}</h1>
          <button className="group__header__button">All Groups</button>
        </div>

        {tasks.map(task => (
          <Task
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
