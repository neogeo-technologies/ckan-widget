import React, { Component } from "react";

class SelectedFacet extends Component {

  render() {
    const { facet } = this.props
    const name = facet.split(':')[1]

    if (facet !== ''){
      return (
        <li className="list-inline-item btn btn-primary" onClick={e => this.props.onClick(facet)}>
          <span className="mx-2">{name}</span>
          <p className="material-icons">&#9932;</p>
        </li>
      );
    }

    return(null)
  }
}

export default SelectedFacet;
