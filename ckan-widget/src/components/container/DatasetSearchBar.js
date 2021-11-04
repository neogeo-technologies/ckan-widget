import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from '../presentational/SearchBar'
import * as actions from '../../actions'

import styles from '../../css/bootstrap.module.css'

export class DatasetSearchBar extends Component{
  handleInputChange = (event, value) => {
    const {
      organizations,
      groups,
      tags,
      sort,
      rows,
      facet_search,
      ckanAPI
    } = this.props

    if (event) {
      event.preventDefault()
    }

    let fq = facet_search
    let fq_list = []
    if (organizations.length > 0) {
        organizations.forEach(name => {
            const val = `organization:"${name}"`
            if (facet_search.indexOf(val) === -1) {
                fq_list.push(val)
            }
        })
    }
    if (groups.length > 0) {
        groups.forEach(name => {
            const val = `groups:"${name}"`
            if (facet_search.indexOf(val) === -1) {
                fq_list.push(val)
            }
        })
    }
    if (tags.length > 0) {
        tags.forEach(name => {
          const val = `tags:"${name}"`
          if (facet_search.indexOf(val) === -1) {
              fq_list.push(val)
          }
        })
    }
    fq += fq_list.join('+')

    let q
    if (value !== '') {
        q = value
    } else {
        q = ''
    }

    this.props.packageSearch({ ckanAPI, q, rows, sort, fq, organizations, groups, tags })
  }

  render(){
    const {
      ckanAPI,
      organizations,
    } = this.props

    return(
        <div className={styles['my-5']}>
            <SearchBar ckanAPI={ckanAPI} organizations={organizations} handleInputChange={this.handleInputChange} />
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    search: state.packageSearch.search,
    search_facets: state.packageSearch.search_facets,
    organizations: state.packageSearch.organizations,
    groups: state.packageSearch.groups,
    tags: state.packageSearch.tags,
    rows: state.packageSearch.rows,
    sort: state.packageSearch.sort,
    facet_search: state.packageSearch.facet_search,
    ckanAPI: state.packageSearch.ckanAPI
  }
}

export default connect(mapStateToProps, actions)(DatasetSearchBar)
