import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from '../presentational/SearchBar'
import * as actions from '../../actions'

export class DatasetSearchBar extends Component{
   handleInputChange = (event, value) => {
      if (event) {
        event.preventDefault()
      }
      const { sort, rows } = this.props
      this.props.packageSearch({ q: value, rows: rows, sort: sort })
    }

    render(){
        return(
          <SearchBar handleInputChange={this.handleInputChange}/>
        )
    }
}

const mapStateToProps = state => {
  return {
    rows: state.packageSearch.rows,
    sort: state.packageSearch.sort
  }
}

export default connect(mapStateToProps, actions)(DatasetSearchBar)
