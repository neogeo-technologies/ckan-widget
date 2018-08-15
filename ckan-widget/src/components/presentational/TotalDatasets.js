import React, { Component } from 'react'

class TotalDatasets extends Component {
  render() {
    const { total } = this.props

    return(
      <div className='total'>{total} result(s)</div>
    )
  }
}

export default TotalDatasets