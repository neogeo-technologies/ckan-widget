import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from '../presentational/SearchBar'
import * as actions from '../../actions'

class DatasetSearchBar extends Component{
    constructor() {
      super()
      this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = (event, value) => {
      if (event) {
        event.preventDefault()
      }
      const { rows } = this.props
      this.props.packageSearch({ q: value, rows: rows })
    }

    render(){
        return(
          <SearchBar handleInputChange={this.handleInputChange}/>
        )
    }
}

const mapStateToProps = state => {
  return {
    rows: state.packageSearch.rows
  }
}

export default connect(mapStateToProps, actions)(DatasetSearchBar)