import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import styles from '../../css/bootstrap.module.css'

export class DatasetsPerPage extends Component {
  handleOnChange = e => {
    const {
      search,
      sort,
      facet_search,
      ckanAPI,
      organizations,
      groups,
      tags
    } = this.props

    this.props.packageSearch({ ckanAPI: ckanAPI,
      q: search,
      sort: sort,
      rows: e.target.value,
      fq: facet_search,
      organizations: organizations,
      groups: groups,
      tags: tags
     })
  }

  render() {
    return (
      <div className={styles['ml-0']}>
        <div className={styles['input-group']}>
          <div className={styles['input-group-prepend']}>
            <label htmlFor="datasets_per_page" title="Results per page" className={styles['input-group-text']}>
               <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" fill="rgba(0, 0, 0, 0.54)" /></svg>
            </label>
          </div>
          <select id="datasets_per_page" className={styles['custom-select']} value={this.props.rows} onChange={this.handleOnChange}>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    search: state.packageSearch.search,
    sort: state.packageSearch.sort,
    facet_search: state.packageSearch.facet_search,
    rows: state.packageSearch.rows,
    ckanAPI: state.packageSearch.ckanAPI,
    organizations: state.packageSearch.organizations,
    groups: state.packageSearch.groups,
    tags: state.packageSearch.tags
  }
}

export default connect(mapStateToProps, actions)(DatasetsPerPage)
