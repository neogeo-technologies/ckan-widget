import React, { Component } from "react";

import SelectedFacet from '../presentational/SelectedFacet'


class SelectedFacetList extends Component {

  onClick = (facetName) => {
    //const { sort, rows, facet_search } = this.props
    //this.props.packageSearch({ rows: rows, sort: sort })

  };

  parseFacets() {


  }

  render() {
    let { selected_facets }  = this.props;
    let list = selected_facets.split('+');
    console.log(list)
    let map = []
    for(let i in list){
       map.push(<SelectedFacet name={list[i]} onClick={this.onClick} />);
    };
    return map;
  }
}

export default SelectedFacetList;
