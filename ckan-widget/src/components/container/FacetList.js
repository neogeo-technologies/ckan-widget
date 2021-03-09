import React, { Component } from "react";
import { connect } from "react-redux";

import Facet from "../presentational/Facet";
import * as actions from "../../actions";

//Default ckan facets
const FACETS_TITLE = {
  organization: 'Organisations',
  groups: 'Thématiques',
  datatype: 'Types',
  support: 'Support',
  res_format: 'Formats',
  license_id: 'Licences',
  tags: 'Tags',
  update_frequency: 'Fréquence de mise-à-jour',
  granularity: 'Granularité de la couverture territoriale'
};

export class FacetList extends Component {
  onClick = ( selectedFacet, facetName) => {
    const {
      rows,
      sort,
      search,
      facet_search,
      ckanAPI,
      organizations,
      groups,
      tags
    } = this.props;

    let facet_type = selectedFacet.split(':')[0]
    let facet_item = selectedFacet.split(':')[1]
    if ( !(facet_type === 'tags' && tags.includes(facet_item)) ) {
      if (!facet_search.includes(facet_item)){
        let fparams = ''

        if (facet_search) {
            fparams = `${facet_search}+${facet_type}:"${facet_item}"`
        } else {
            fparams = `${facet_type}:"${facet_item}"`
        }

        this.props.packageSearch({
          ckanAPI: ckanAPI,
          fq: fparams,
          rows: rows,
          sort: sort,
          q: search,
          organizations: organizations,
          groups: groups,
          tags: tags
        })
      }
    }
  }

  render() {
    let { facets, facetDisplay } = this.props

    const facetsList = [];
    for (let key in FACETS_TITLE) {
      if (facets[key] !== undefined) {
        const title = FACETS_TITLE[key]
        let facetsInfo = facets[key]

        if (facetsInfo.items.length > 0) {
          if (facetDisplay === undefined) {
            facetsList.push(<Facet title={title} key={key} facetsInfo={facetsInfo.items} facetKey={key} onClick={this.onClick} />)
          } else if (facetDisplay.includes(key)) {
            facetsList.push(<Facet title={title} key={key} facetsInfo={facetsInfo.items} facetKey={key} onClick={this.onClick} />)
          }
        }
      }
    }

    return facetsList;
  }
}
const mapStateToProps = state => {
  return {
    facets: state.packageSearch.facets,
    rows: state.packageSearch.rows,
    sort: state.packageSearch.sort,
    search: state.packageSearch.search,
    facet_search: state.packageSearch.facet_search,
    ckanAPI: state.packageSearch.ckanAPI,
    organizations: state.packageSearch.organizations,
    groups: state.packageSearch.groups,
    tags: state.packageSearch.tags
  };
};

export default connect(
  mapStateToProps,
  actions
)(FacetList);
