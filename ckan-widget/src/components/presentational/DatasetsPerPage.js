import React, { Component } from 'react'

class DatasetsPerPage extends Component {
  handleOnChange = e => {
    this.props.handleDatasetsPerPage(e.target.value)
  }

  render() {
    return (
      <div className="">
          <div className="input-group">
              <div className="input-group-prepend">
                <label for="datasets_per_page" className="input-group-text">Datasets per page: </label>
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

export default DatasetsPerPage
