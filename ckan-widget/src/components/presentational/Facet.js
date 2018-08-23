import React, { Component } from 'react';


class Facet extends Component {
  render() {
    const facets = this.props.facetsInfo;
    const title = this.props.title;
    const infoList = [];

    for (const f in facets) {
      infoList.push(
        <li className="list-group-item d-flex justify-content-between align-items-center" key={f} onClick={() => this.props.onClick(`${this.props.facetKey}:${facets[f].name}`)}>
          {facets[f].display_name}
          {' '}
          <span className="badge badge-primary">{facets[f].count}</span>
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
