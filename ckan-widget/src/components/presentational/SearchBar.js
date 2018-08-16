import React, { Component } from 'react'

class SearchBar extends Component{
    render(){
        return(
            <form className="search-item" onSubmit={this.props.handleInputChange}>
                <input
                    placeholder="Search datasets"
                    ref={this.props.search}
                    onChange={this.props.handleInputChange}
                />
                {/*Add autosugestion components here */}
                {/* <Suggestions results={this.state.results} /> */}
            </form>
            )
    }
}

export default SearchBar;
