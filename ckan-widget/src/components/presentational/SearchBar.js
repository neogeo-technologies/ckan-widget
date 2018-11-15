import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'
import { packageAutocomplete } from '../../actions'
import MaterialIcon from 'material-icons-react'


class SearchBar extends Component{
    constructor() {
        super()
        this.state = {
            value: '',
            isOpen: false,
            suggestions: []
        }
    }

    handleOnChange = (event, value) => {
        const { ckanAPI, organizations } = this.props
        this.setState({ value })

        if (value.length > 3) {
            packageAutocomplete({ ckanAPI, q: value, organization: organizations }).then(data => {
                const suggestions = data.result
                if (Array.isArray(suggestions) && suggestions.length) {
                    this.setState({ suggestions })
                }
            })
        } else {
            this.setState({ suggestions: [] })
        }
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
                        placeholder: 'Rechercher...',
                        className: 'form-control form-control-lg border-0 autocomplete'
                    }}
                    wrapperStyle={{ position: 'relative', zIndex: 1000, width: '90%', display: 'inline-block' }}
                    value={this.state.value}
                    items={this.state.suggestions}
                    open={( this.state.value.length >= 1 && this.state.isOpen )}
                    onMenuVisibilityChange={isOpen => this.setState({ isOpen })}
                    autoHighlight={false}
                    getItemValue={(item) => item.title}
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
                        <div className={`list-group-item list-group-item-light ${isHighlighted ? 'active' : ''}`} key={item.title}>
                            {item.title}
                        </div>
                    )}
                />

                <button type="button" className="btn btn-search" onClick={this.handleOnSubmit}>
                    <MaterialIcon icon="search" size="medium" />
                </button>
            </form>
        )
    }
}

export default SearchBar
