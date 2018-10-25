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

    if (organizations.length > 0) {
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

    if (groups.length > 0) {
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

    if (tags.length > 0) {
      let tags_query = ''
      tags.forEach((name, i) => {
        if (tags_query === '') {
          tags_query = `"${name}"`
        } else {
          tags_query = `${tags_query} AND "${name}"`
        }
      })

      if (q === '') {
        q = `tags:${tags_query}`
      } else {
        q = `${q} AND tags:${tags_query}`
      }
    }

    if (value !== '') {
      if (q === '') {
        q = value
      } else {
        q = `${value} AND ${q}`
      }
    }

    this.props.packageSearch({ ckanAPI, q, rows, sort, fq, organizations, groups, tags })
  }

  render(){
    const {
      search,
      sort,
      rows,
      facet_search,
      ckanAPI,
      organizations,
      groups,
      tags
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
                      organizations={organizations}
                      groups={groups}
                      tags={tags}
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
