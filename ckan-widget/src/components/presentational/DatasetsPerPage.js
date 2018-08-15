import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class DatasetsPerPage extends Component {
  updateRowsState = e => {
    const value = e.target.value
    this.props.updateRows(value)
    this.props.packageSearch({ rows: value })
  }

  render() {
    const { rows } = this.props

    return (
      <div className='datasets-per-page'>
        <label>Datasets per page: </label>
        <select value={rows} onChange={this.updateRowsState}>
          <option value='10'>10</option>
          <option value='25'>25</option>
          <option value='50'>50</option>
          <option value='100'>100</option>
        </select >
      </div>
    )
  }
}

export default connect(null, actions)(DatasetsPerPage)