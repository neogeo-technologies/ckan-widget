import React, { Component } from 'react'

class SearchBar extends Component{

    render(){
        return(
             <form>
                <input
                  placeholder="Search datasets"
                  ref={input => this.search = input}
                  //add on change event
                  onChange={this.handleInputChange}
                />
                {/*Add autosugestion components here */}
                {/* <Suggestions results={this.state.results} /> */}
            </form>
            )
    }



}

export default SearchBar;