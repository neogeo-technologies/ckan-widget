import React, { Component } from "react";
import { connect } from 'react-redux'

import SelectedFacet from '../presentational/SelectedFacet'
import * as actions from '../../actions'

export class SelectedFacetList extends Component {

  onClick = facet => {
    const {
      search,
      sort,
      rows,
      selected_facets,
      ckanAPI,
      organizations,
      groups,
      tags
    } = this.props

    let newFacetQuery = selected_facets.replace(`${facet}+`, '')
    newFacetQuery = newFacetQuery.replace(`+${facet}`, '')
    newFacetQuery = newFacetQuery.replace(facet, '')

    this.props.packageSearch({
      ckanAPI: ckanAPI,
      q: search,
      rows: rows,
      sort: sort,
      fq: newFacetQuery,
      organizations: organizations,
      groups: groups,
      tags: tags
    })
  };

  render() {
    let { selected_facets }  = this.props;
    let list = selected_facets.split('+');
    let facetSearch = []

    list.forEach((facet, i) => {
      facetSearch.push(<SelectedFacet facet={facet} onClick={this.onClick} key={i} />);
    });

    return facetSearch;
  }
}

export default connect(null, actions)(SelectedFacetList);
