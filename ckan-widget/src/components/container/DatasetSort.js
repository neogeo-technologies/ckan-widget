import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sort from '../presentational/Sort'
import * as actions from '../../actions'


class DatasetSort extends Component{
    handleSort = sort => {
        const { search, rows } = this.props
        this.props.packageSearch({ q: search, sort: sort, rows: rows })
    }

    render(){
        return (<Sort handleSort={this.handleSort} sort={this.props.sort} />)
    }
}

const mapStateToProps = state => {
    return {
        search: state.packageSearch.search,
        rows: state.packageSearch.rows,
        sort: state.packageSearch.sort
    }
}

export default connect(mapStateToProps, actions)(DatasetSort);
