import React, { Component } from 'react';
import { connect } from 'react-redux'


class TotalDatasets extends Component {
  render() {
    const { total } = this.props;
    const resultName = (total === 1) ? 'result' : 'results';

    return (
      <div className="">
        <h2>
          {total}
          {' '}
          {resultName}
        </h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    total: state.packageSearch.total
  }
}

export default connect(mapStateToProps, null)(TotalDatasets)
