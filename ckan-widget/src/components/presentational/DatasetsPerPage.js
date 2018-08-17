import React, { Component } from 'react'

class DatasetsPerPage extends Component {
  handleOnChange = e => {
    this.props.handleDatasetsPerPage(e.target.value)
  }

  render() {
    return (
      <div className="datasets-per-page">
        <label>Datasets per page: </label>
        <select value={this.props.rows} onChange={this.handleOnChange}>
          <option value='10'>10</option>
          <option value='25'>25</option>
          <option value='50'>50</option>
          <option value='100'>100</option>
        </select>
      </div>
    )
  }
}

export default DatasetsPerPage