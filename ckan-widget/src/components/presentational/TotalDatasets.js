import React, { Component } from 'react';

class TotalDatasets extends Component {
  render() {
    const { total } = this.props;
    const resultName = (total === 1) ? 'result' : 'results';

    return (
      <div className="datasets-total">
        {total}
        {' '}
        {resultName}
      </div>
    );
  }
}

export default TotalDatasets;
