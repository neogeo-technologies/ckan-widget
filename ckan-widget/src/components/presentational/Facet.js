import React, { Component } from "react";


class Facet extends Component {
  render() {
    const facets = this.props.facetsInfo;
    const title = this.props.title;
    const infoList = [];
    for(let f in facets) {
      infoList.push(
        <li key={f} onClick={() => this.props.onClick(this.props.facetKey + ':' + facets[f].name)}>
          {facets[f].display_name} {facets[f].count}
        </li>
      );

    }
    return (
      <div className="facet-item">
        <h3>{title}</h3>
        <div>
          <ul>
            {infoList}
          </ul>
        </div>
      </div>
    );
  }
}

export default Facet;
