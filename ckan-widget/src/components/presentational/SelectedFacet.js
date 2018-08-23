import React, { Component } from "react";

class SelectedFacet extends Component {

  render() {
    return (
      <a href="#" onClick={() => this.props.onClick('Test')}>
        <span className="label label-info">{this.props.name}</span>
      </a>
    );
  }
}

export default SelectedFacet;
