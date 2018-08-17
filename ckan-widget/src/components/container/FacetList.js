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

class FacetList extends Component {

  componentDidMount() {
    this.props.packageSearch();
  }
    onClick = (data) => {
      this.props.packageSearch({q: data})
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
    facets: state.packageSearch.facets
  };
};

export default connect(
  mapStateToProps,
  actions
)(FacetList);
