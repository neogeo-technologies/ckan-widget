import React, { Component } from 'react';
import { connect } from 'react-redux'


export class TotalDatasets extends Component {
  render() {
    const { total } = this.props;
    const resultName = (total <= 1) ? 'résultat' : 'résultats';

    return (
      <div>
        <h2>
          <strong>{total}</strong>
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
