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

    let fparams = '';
    const fqValues = selectedFacet.split(':')
    if(facet_search){
        if(facet_search.includes(selectedFacet)){
            fparams = facet_search;
        }else{
          fparams = `${facet_search}+${fqValues[0]}:"${fqValues[1]}"`
        }
    }else{
      fparams = `${fqValues[0]}:"${fqValues[1]}"`;
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
