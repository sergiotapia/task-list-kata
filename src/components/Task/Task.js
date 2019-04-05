import React from "react";
import { inject } from "mobx-react";
import cx from "classnames";
import "./Task.scss";

@inject("store")
class Task extends React.PureComponent {
  _handleClick = () => {
    const { id, store } = this.props;
    store.toggleTask(id);
  };

  render() {
    const { id, label, checked = false, locked = false } = this.props;

    const labelClasses = cx("task__label", {
      "task__label--checked": checked,
      "task__label--locked": locked
    });

    const customCheckboxClasses = cx("task__checkbox__custom-checkbox", {
      "task__checkbox__custom-checkbox--locked": locked
    });

    return (
      <div className="task" onClick={this._handleClick}>
        <div className="task__checkbox">
          <input type="checkbox" name={id} id={id} checked={checked} />
          <span className={customCheckboxClasses} />
        </div>
        <p className={labelClasses}>{label}</p>
      </div>
    );
  }
}

export default Task;
