import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from '../presentational/SearchBar'
import * as actions from '../../actions'

class DatasetSearchBar extends Component{
    constructor() {
        super()
        this.search = React.createRef()
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = e => {
      e.preventDefault()
      this.props.packageSearch({q: this.search.current.value})
    }

    render(){
        return(
          <SearchBar search={this.search} handleInputChange={this.handleInputChange}/>
        )
    }
}

export default connect(null, actions)(DatasetSearchBar)