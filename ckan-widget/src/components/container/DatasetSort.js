import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sort from '../presentational/Sort'
import * as actions from '../../actions'


export class DatasetSort extends Component{
    handleSort = sort => {
        const {
            search,
            rows,
            facet_search,
            ckanAPI,
            organizations,
            groups,
            tags
        } = this.props
        this.props.packageSearch({
            ckanAPI: ckanAPI,
            q: search,
            sort: sort,
            rows: rows,
            fq: facet_search,
            organizations: organizations,
            groups: groups,
            tags: tags
        })
    }

    render(){
        return (<Sort handleSort={this.handleSort} sort={this.props.sort} />)
    }
}

const mapStateToProps = state => {
    return {
        search: state.packageSearch.search,
        rows: state.packageSearch.rows,
        sort: state.packageSearch.sort,
        facet_search: state.packageSearch.facet_search,
        ckanAPI: state.packageSearch.ckanAPI,
        organizations: state.packageSearch.organizations,
        groups: state.packageSearch.groups,
        tags: state.packageSearch.tags
    }
}

export default connect(mapStateToProps, actions)(DatasetSort);
