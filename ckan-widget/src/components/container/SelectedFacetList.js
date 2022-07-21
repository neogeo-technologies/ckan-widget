import React, { Component } from "react"
import { connect } from 'react-redux'

import SelectedFacet from '../presentational/SelectedFacet'
import * as actions from '../../actions'

export class SelectedFacetList extends Component {

  onClick = facet => {
    let {
      search,
      sort,
      rows,
      ckanAPI,
      organizations,
      groups,
      tags,
      queries,
    } = this.props

    const [facet_type, facet_item] = facet
    delete queries[facet_type];
    
    let newQueryString = organizations && organizations.length > 0 ? 
                          `(${organizations.map((org) => `organization:${org}`).join(' OR ')})` : '';
    if (facet_type === 'tags' && tags.includes(facet_item)) {
      tags = tags.filter( tag => tag !== facet_item)
      
      search = search.replace(`"${facet_item}" AND`, '')
      .replace(`AND "${facet_item}"`, '')
      .replace(` AND tags:"${facet_item}"`, '')
      .replace(`tags:"${facet_item}" `, '')
    } else {
      for (const [key, value] of Object.entries(queries)) {
        newQueryString += `+${key}:"${value}"`;
      }
    }

    this.props.packageSearch({
      ckanAPI: ckanAPI,
      q: search,
      rows: rows,
      sort: sort,
      fq: newQueryString,
      organizations: organizations,
      groups: groups,
      tags: tags,
      queries: queries,
    })
  };

  render() {
    let { queries, search_facets, tags } = this.props

    let facetSearch = []
    Object.entries(queries).forEach((facet, i) => {
      if (!tags.includes(facet)) {
        facetSearch.push(<SelectedFacet facet={facet} search_facets={search_facets} onClick={this.onClick} key={i} />);
      }
    });

    if (tags.length > 0) {
      tags.forEach((tag, i) => {
        facetSearch.push(<SelectedFacet facet={`tags:${tag}`} search_facets={search_facets} onClick={this.onClick} key={`tags:${i}`} />)
      })
    }

    return facetSearch
  }
}

export default connect(null, actions)(SelectedFacetList)
