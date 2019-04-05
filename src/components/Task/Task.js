import React from "react";
import cx from "classnames";
import "./Task.scss";

export default class Task extends React.PureComponent {
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
      <div className="task">
        <div className="task__checkbox">
          <input type="checkbox" name={id} id={id} checked={checked} />
          <span className={customCheckboxClasses} />
        </div>
        <p className={labelClasses}>{label}</p>
      </div>
    );
  }
}
