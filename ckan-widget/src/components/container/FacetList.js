import React, { Component } from "react";
import { connect } from "react-redux";

import Facet from "../presentational/Facet";
import * as actions from "../../actions";

//Default ckan facets
const FACETS_TITLE = {
  organization: 'Organizations',
  groups: 'Groups',
  datatype: 'Types',
  support: 'Support',
  res_format: 'Formats',
  license_id: 'Licenses',
  tags: 'Tags',
  update_frequency: 'Update frequency'
};

export class FacetList extends Component {
  onClick = ( selectedFacet, facetName) => {
    const { rows, sort, search, facet_search, ckanAPI } = this.props;

    let fparams = '';
    if(facet_search){
        if(facet_search.includes(selectedFacet)){
            fparams = facet_search;
        }else{
            fparams = facet_search + '+' + selectedFacet;
        }
    }else{
        fparams = selectedFacet;
    }

    this.props.packageSearch({ ckanAPI: ckanAPI, fq: fparams, rows: rows, sort: sort, q: search })
  }

  render() {
    let { facets, facetDisplay } = this.props

    const facetsList = [];
    for (let key in FACETS_TITLE) {
      if (facets[key] !== undefined) {
        const title = FACETS_TITLE[key]
        let facetsInfo = facets[key]

        if (facetDisplay === undefined) {
          facetsList.push(<Facet title={title} key={key} facetsInfo={facetsInfo.items} facetKey={key} onClick={this.onClick} />)
        } else if (facetDisplay.includes(key)) {
          facetsList.push(<Facet title={title} key={key} facetsInfo={facetsInfo.items} facetKey={key} onClick={this.onClick} />)
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
    ckanAPI: state.packageSearch.ckanAPI
  };
};

export default connect(
  mapStateToProps,
  actions
)(FacetList);
