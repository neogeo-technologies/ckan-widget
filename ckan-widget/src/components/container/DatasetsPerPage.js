import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'

class DatasetsPerPage extends Component {
  handleOnChange = e => {
    const { search, sort } = this.props

    this.props.packageSearch({ q: search, sort: sort, rows: e.target.value })
  }

  render() {
    return (
      <div className="ml-0">
        <div className="input-group">
          <div className="input-group-prepend">
            <label htmlFor="datasets_per_page" title="Results per page" className="input-group-text"><i className="material-icons">list</i></label>
          </div>
          <select id="datasets_per_page" className="custom-select" value={this.props.rows} onChange={this.handleOnChange}>
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
    sort: state.packageSearch.sort
  }
}

export default connect(mapStateToProps, actions)(DatasetsPerPage)
