import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'

class SearchBar extends Component{
    constructor() {
        super()
        this.state = {
            value: '',
            unitedStates: this.getStates()
        }
    }

    getStates = () => {
        return [
            { abbr: 'AL', name: 'Alabama' },
            { abbr: 'AK', name: 'Alaska' },
            { abbr: 'AZ', name: 'Arizona' },
            { abbr: 'AR', name: 'Arkansas' },
            { abbr: 'CA', name: 'California' }
        ]
    }

    getStatesOther = () => {
        return [
            { abbr: 'MK', name: 'Macedonia' },
            { abbr: 'ES', name: 'Espana' },
            { abbr: 'GR', name: 'Greece' },
            { abbr: 'SRB', name: 'Serbia' }
        ]
    }

    render(){
        return(
            <form className="search-item" onSubmit={this.props.handleInputChange}>
                <Autocomplete
                    inputProps={{
                        id: 'datasets-autocomplete',
                        placeholder: 'Search datasets'
                    }}
                    wrapperStyle={{ position: 'relative', display: 'inline-block' }}l
                    value={this.state.value}
                    items={this.state.unitedStates}
                    getItemValue={(item) => item.name}
                    onSelect={(value, item) => {
                        console.log(value)
                        this.setState({ value, unitedStates: [item] })
                        this.props.handleInputChange(null, value)
                    }}
                    onChange={(event, value) => {
                        this.setState({ value })
                        this.setState({ unitedStates: this.getStatesOther() })
                        this.props.handleInputChange(event, value)
                    }}
                    renderMenu={children => (
                        <div className="menu">
                            {children}
                        </div>
                    )}
                    renderItem={(item, isHighlighted) => (
                        <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`} key={item.abbr}>
                            {item.name}
                        </div>
                    )}
                />
            </form>
        )
    }
}

export default SearchBar;
