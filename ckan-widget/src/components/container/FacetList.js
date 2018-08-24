import React, { Component } from "react";
import { connect } from "react-redux";

import Facet from "../presentational/Facet";
import * as actions from "../../actions";

//Default ckan facets
const FACETS_TITLE = {
  organization: "Organizations",
  groups: "Groups",
  tags: "Tags",
  res_format: "Formats",
  license_id: "Licenses"
};

export class FacetList extends Component {

  componentDidMount() {
    this.props.packageSearch();
  }

  onClick = ( selectedFacet, facetName) => {
    const { rows, sort, search, facet_search } = this.props;

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

    this.props.packageSearch({fq: fparams, rows: rows, sort: sort, q: search})
  }

  render() {
    const { facets } = this.props;
    const facetsList = [];
    for(let i in facets) {
      let title = FACETS_TITLE[i];
      let facetsInfo = facets[i];

      facetsList.push(<Facet title={title} key={i} facetsInfo={facetsInfo.items} facetKey={i} onClick={this.onClick} />);
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
    facet_search: state.packageSearch.facet_search
  };
};

export default connect(
  mapStateToProps,
  actions
)(FacetList);
