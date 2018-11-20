import React, { Component } from "react";
import MaterialIcon from 'material-icons-react';

class SelectedFacet extends Component {

  render() {
    const { facet, search_facets } = this.props

    const facetType = facet.split(':')[0]
    let name = facet.split(':')[1]
    if (name !== undefined) {
      name = name.replace(/"/g, "")
    }

    let facetTitle = ''
    const selectedFacetType = search_facets[facetType]

    if ( selectedFacetType !== undefined) {
      const itemsFacetType = selectedFacetType.items

      itemsFacetType.forEach((type, i) => {
        if (type.name === name) {
          facetTitle = type.display_name
        }
      })
    }

    if (facetTitle !== ''){
      return (
        <li className="list-inline-item btn btn-primary" onClick={e => this.props.onClick(facet)}>
          <span className="mx-2">{facetTitle}</span>
          <MaterialIcon icon="close" size="tiny" />
        </li>
      );
    }

    return(null)
  }
}

export default SelectedFacet;
