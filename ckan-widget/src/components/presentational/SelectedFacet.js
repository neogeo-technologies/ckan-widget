import React, { Component } from "react";

class SelectedFacet extends Component {

  render() {
    const { facet } = this.props
    const name = facet.split(':')[1]

    if (facet !== ''){
      return (
        <div className="badge badge-primary">
          <span className="label label-info">{name}</span>
          <button type="button" className="close" aria-label="Close" onClick={e => this.props.onClick(facet)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }

    return(null)
  }
}

export default SelectedFacet;
