import React from "react";
import { observer, inject } from "mobx-react";

import "./Header.scss";

@inject("store")
@observer
class Header extends React.Component {
  _deselectGroup = () => {
    const { store } = this.props;
    store.deselectGroup();
  };

  render() {
    const { store } = this.props;

    return (
      <div className="header">
        <h1>{store.title}</h1>
        {store.isGroupSelected === true ? (
          <button onClick={this._deselectGroup}>All Groups</button>
        ) : null}
      </div>
    );
  }
}

export default Header;
