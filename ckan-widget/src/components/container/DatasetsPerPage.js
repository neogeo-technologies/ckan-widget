import React, { Component } from 'react'
import { connect } from 'react-redux'
import MaterialIcon from 'material-icons-react'
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
                <MaterialIcon icon="list" />
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
