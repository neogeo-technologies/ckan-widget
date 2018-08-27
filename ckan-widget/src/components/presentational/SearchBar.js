import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'
import { packageAutocomplete } from '../../actions'


class SearchBar extends Component{
    constructor() {
        super()
        this.state = {
            value: '',
            isOpen: false,
            suggestions: []
        }
    }

    componentDidMount() {
        packageAutocomplete().then(data => {
            const suggestions = data.result
            if (Array.isArray(suggestions) && suggestions.length) {
                this.setState({ suggestions })
            }
        })
    }

    handleOnChange = (event, value) => {
        this.setState({ value })
        packageAutocomplete({ q: value }).then(data => {
            const suggestions = data.result
            if (Array.isArray(suggestions) && suggestions.length) {
                this.setState({ suggestions })
            }
        })
        this.props.handleInputChange(event, value)
    }

    handleOnSubmit = event => {
        const value = this.state.value
        this.props.handleInputChange(event, value)
    }

    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <Autocomplete
                    inputProps={{
                        id: 'datasets-autocomplete',
                        placeholder: 'Search datasets',
                        className: 'form-control form-control-lg border-0'
                    }}
                    wrapperStyle={{ position: 'relative'}}
                    value={this.state.value}
                    items={this.state.suggestions}
                    open={( this.state.value.length >= 1 && this.state.isOpen )}
                    onMenuVisibilityChange={isOpen => this.setState({ isOpen })}
                    autoHighlight={false}
                    getItemValue={(item) => item.name}
                    onSelect={(value, item) => {
                        this.setState({ value, suggestions: [item] })
                        this.props.handleInputChange(null, value)
                    }}
                    onChange={this.handleOnChange}
                    renderMenu={children => (
                        <div className="menu list-group">
                            {children}
                        </div>
                    )}
                    renderItem={(item, isHighlighted) => (
                        <div className={`list-group-item list-group-item-light ${isHighlighted ? 'active' : ''}`} key={item.match_displayed}>
                            {item.match_displayed}
                        </div>
                    )}
                />
            </form>
        )
    }
}

export default SearchBar
