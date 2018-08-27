import React, { Component } from 'react';


class Facet extends Component {
  constructor(props) {
    super(props)
    this.state = { collapsed: true }
  }

  expandFacetList = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    const facets = this.props.facetsInfo;
    const title = this.props.title;
    const collapseClass = this.state.collapsed ? 'collapse' : ''
    let expandArrow = this.state.collapsed ? 'expand_more' : 'expand_less'
    let expandLabel = this.state.collapsed ? 'Expand' : 'Contract'

    let fixedList = []
    let expandableList = []
    let expandControls = []

    if (facets.length > 1){
      expandControls.push(
          <div className="card-footer px-0 py-1">
              <a className="btn btn-link" onClick={this.expandFacetList}><i className="material-icons mr-1">{expandArrow}</i>{expandLabel}</a>
          </div>
      )
    }

    if(facets.length < 9) {
      expandArrow = ''
    }

    for (const facetId in facets) {
      if (facetId < 8) {
        fixedList.push(
          <li className="list-group-item d-flex justify-content-between align-items-center" key={facetId} onClick={() => this.props.onClick(`${this.props.facetKey}:${facets[facetId].name}`)}>
            {facets[facetId].display_name}
            {' '}
            <span className="badge badge-primary">{facets[facetId].count}</span>
          </li>,
        );
      }
    }

    for (const facetId in facets) {
      if (facetId > 7) {
        expandableList.push(
          <li className="list-group-item d-flex justify-content-between align-items-center" key={facetId} onClick={() => this.props.onClick(`${this.props.facetKey}:${facets[facetId].name}`)}>
            {facets[facetId].display_name}
            {' '}
            <span className="badge badge-primary">{facets[facetId].count}</span>
          </li>,
        );
      }
    }

    return (
      <div className="card my-3">
        <div className="card-header bg-secondary text-white">
          <h5 className="card-title mb-auto">
            {title}
          </h5>
        </div>
        <ul className="list-group list-group-facet list-group-flush">
          {fixedList}
        </ul>
        <div className={collapseClass}>
          <ul className="list-group list-group-facet list-group-flush">
            {expandableList}
          </ul>
        </div>
        {expandControls}
      </div>
    );
  }
}

export default Facet;
