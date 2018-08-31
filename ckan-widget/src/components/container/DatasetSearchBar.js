import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from '../presentational/SearchBar'
import * as actions from '../../actions'
import SelectedFacetList from '../container/SelectedFacetList'

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

    const fq = facet_search
    let q = ''

    if (organizations !== undefined) {
      organizations.forEach((name, i) => {
        if (q === '') {
          q = `organization:${name}`
        } else {
          if (i === 0) {
            q = `${q} AND organization:${name}`
          } else {
            q = `${q} OR ${name}`
          }
        }
      })
    }

    if (groups !== undefined) {
      groups.forEach((name, i) => {
        if (q === '') {
          q = `groups:${name}`
        } else {
          if (i === 0) {
            q = `${q} AND groups:${name}`
          } else {
            q = `${q} OR ${name}`
          }
        }
      })
    }

    if (tags !== undefined) {
      tags.forEach((name, i) => {
        if (q === '') {
          q = `tags:${name}`
        } else {
          if (i === 0) {
            q = `${q} AND tags:${name}`
          } else {
            q = `${q} OR ${name}`
          }
        }
      })
    }

    if (value !== '') {
      if (q === '') {
        q = value
      } else {
        q = `${q} AND ${value}`
      }
    }

    this.props.packageSearch({ ckanAPI, q, rows, sort, fq })
  }

  render(){
    const {
      search,
      sort,
      rows,
      facet_search,
      ckanAPI
    } = this.props

    return(
        <div className="my-5">
            <SearchBar ckanAPI={ckanAPI} handleInputChange={this.handleInputChange} />
            <div className="mt-3">
                <ul className="list-inline list-search-facets">
                    <SelectedFacetList
                      ckanAPI={ckanAPI}
                      search={search}
                      sort={sort}
                      rows={rows}
                      selected_facets={facet_search} />
                </ul>
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    search: state.packageSearch.search,
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
