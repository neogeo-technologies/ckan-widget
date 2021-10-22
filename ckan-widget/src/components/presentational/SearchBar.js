import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'
import { packageAutocomplete } from '../../actions'
import cx from 'classnames'

import styles from '../../css/bootstrap.module.css'
import overrideStyles from '../../css/app.module.css'

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
                            <div className={cx(styles['autocomplete-wrapper'], overrideStyles['autocomplete-wrapper'])}>
                                <input {...inputProps} />
                                <button type="button" className={`${cx(styles['btn'], styles['btn-search'], overrideStyles['btn-search'])} btn-search`} onClick={this.handleOnSubmit}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 24 24" width="36"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                                </button>
                            </div>
                        )
                    }}
                    renderMenu={children => (
                        <div className={cx(styles['menu'], styles['list-group'], overrideStyles['menu'])}>
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
