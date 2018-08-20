import React, { Component } from 'react';

class TotalDatasets extends Component {
  render() {
    const { total } = this.props;
    const resultName = (total === 1) ? 'result' : 'results';

    return(
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

export default TotalDatasets
