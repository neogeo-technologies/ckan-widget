import React, { Component } from 'react'

import SearchBar from '../presentational/SearchBar'

class DatasetSearchBar extends Component{
    state ={
        query: '',
        results: []
    }

    handleInputChange = () => {
        //add input change event
    }

    render(){
        return(
            //send aditional props and events in search bar
            <SearchBar onChange={this.handleInputChange}/>
        )
    }
}
export default DatasetSearchBar;