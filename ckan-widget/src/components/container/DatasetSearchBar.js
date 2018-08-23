import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from '../presentational/SearchBar'
import * as actions from '../../actions'
import SelectedFacetList from '../container/SelectedFacetList'

class DatasetSearchBar extends Component{
   handleInputChange = (event, value) => {
      if (event) {
        event.preventDefault()
      }
      const { sort, rows, facet_search } = this.props
      this.props.packageSearch({ q: value, rows: rows, sort: sort, fq: facet_search })
    }

    render(){
        return(
            <div>
                <SearchBar handleInputChange={this.handleInputChange}/>
                <SelectedFacetList sort={this.props.sort} rows={this.props.rows} selected_facets={this.props.facet_search}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    search: state.packageSearch.search,
    rows: state.packageSearch.rows,
    sort: state.packageSearch.sort,
    facet_search: state.packageSearch.facet_search
  }
}

export default connect(mapStateToProps, actions)(DatasetSearchBar)
