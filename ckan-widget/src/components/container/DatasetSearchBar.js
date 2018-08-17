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
      this.props.packageSearch({q: value})
    }

    render(){
        return(
          <SearchBar handleInputChange={this.handleInputChange}/>
        )
    }
}

export default connect(null, actions)(DatasetSearchBar)