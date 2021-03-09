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
      selected_facets,
      ckanAPI,
      organizations,
      groups,
      tags
    } = this.props

    let facet_type = facet.split(':')[0]
    let facet_item = facet.split(':')[1]
    if (facet_type === 'tags' && tags.includes(facet_item)) {

      tags = tags.filter( tag => tag !== facet_item)

      search = search.replace(`"${facet_item}" AND`, '')
                    .replace(`AND "${facet_item}"`, '')
                    .replace(` AND tags:"${facet_item}"`, '')
                    .replace(`tags:"${facet_item}" `, '')
    } else {
      selected_facets = selected_facets.replace(`${facet}+`, '')
                                      .replace(`+${facet}`, '')
                                      .replace(facet, '')
    }

    this.props.packageSearch({
      ckanAPI: ckanAPI,
      q: search,
      rows: rows,
      sort: sort,
      fq: selected_facets,
      organizations: organizations,
      groups: groups,
      tags: tags
    })
  };

  render() {
    let { selected_facets, search_facets, tags }  = this.props
    let list = selected_facets.split('+');
    let facetSearch = []

    list.forEach((facet, i) => {
      let facet_item = facet.split(':')[1]
      if (facet_item !== undefined) {
        facet_item = facet_item.replace(/"/g, '')
      }

      if (! tags.includes(facet_item)) {
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
