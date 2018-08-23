import React, { Component } from 'react';


class Facet extends Component {
  render() {
    const facets = this.props.facetsInfo;
    const title = this.props.title;
    console.log(this.props + 'OD FACETS')
    const infoList = [];
    for (const facetId in facets) {
      infoList.push(
        <li className="list-group-item d-flex justify-content-between align-items-center" key={facetId} onClick={() => this.props.onClick(`${this.props.facetKey}:${facets[facetId].name}`)}>
          {facets[facetId].display_name}
          {' '}
          <span className="badge badge-primary">{facets[facetId].count}</span>
        </li>,
      );
    }
    return (
      <div className="card my-3">
        <div className="card-header bg-secondary text-white">
            <h5 className="card-title mb-auto">{title}</h5>
        </div>
          <ul className="list-group list-group-flush">
            {infoList}
          </ul>
      </div>
    );
  }
}

export default Facet;
