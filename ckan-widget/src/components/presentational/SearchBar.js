import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'
import { packageAutocomplete } from '../../actions'
import MaterialIcon from 'material-icons-react'
import cx from 'classnames'

import styles from '../../assets/bootstrap.module.css'

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
                        className: cx(styles['form-control'], styles['form-control-lg'], styles['border-0'], styles['autocomplete'])
                    }}
                    wrapperStyle={{ zIndex: 1000 }}
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
                    renderInput={inputProps => {
                        return (
                            <div className={styles['autocomplete-wrapper']}>
                                <input {...inputProps} />

                                <button type="button" className={cx(styles['btn'], styles['btn-search'])} onClick={this.handleOnSubmit}>
                                    <MaterialIcon icon="search" size="medium" />
                                </button>
                            </div>
                        )
                    }}
                    renderMenu={children => (
                        <div className={cx(styles['menu'], styles['list-group'])}>
                            {children}
                        </div>
                    )}
                    renderItem={(item, isHighlighted) => (
                        <div className={cx(styles['list-group-item'], styles['list-group-item-light'], styles[`${isHighlighted ? 'active' : ''}`])} key={item.title}>
                            {item.title}
                        </div>
                    )}
                />
            </form>
        )
    }
}

export default SearchBar
