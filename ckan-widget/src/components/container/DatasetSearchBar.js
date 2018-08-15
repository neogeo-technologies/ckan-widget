import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from '../presentational/SearchBar'
import * as actions from '../../actions'

class DatasetSearchBar extends Component{
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = (event) => {
        let q = event.target.value
        this.props.packageSearch({q: q})
    }

    render(){
        return(
            <SearchBar handleInputChange = {this.handleInputChange}/>
        )
    }
}

export default connect(null, actions)(DatasetSearchBar)