import React, { Component } from 'react'

class SearchBar extends Component{
    render(){
        return(
             <form className="search-item">
                <input
                    placeholder="Search datasets"
                    ref={input => this.search = input}
                    onChange={this.props.handleInputChange}
                />
                {/*Add autosugestion components here */}
                {/* <Suggestions results={this.state.results} /> */}
            </form>
            )
    }
}

export default SearchBar;