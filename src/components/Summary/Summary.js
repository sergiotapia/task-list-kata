import React from "react";
import { observer, inject } from "mobx-react";

import "./Summary.scss";
import group from "../../images/Group.svg";

@inject("store")
@observer
class Summary extends React.Component {
  _pickGroup = () => {
    const { store, title } = this.props;
    store.pickGroup(title);
  };

  render() {
    const { title, completedCount, totalCount } = this.props;

    return (
      <div className="summary" onClick={this._pickGroup}>
        <img
          className="summary__group-icon"
          src={group}
          alt="expand task group"
        />
        <div className="summary__info">
          <p className="summary__info__title">{title}</p>
          <p className="summary__info__totals">
            {completedCount} of {totalCount} tasks complete
          </p>
        </div>
      </div>
    );
  }
}

export default Summary;
