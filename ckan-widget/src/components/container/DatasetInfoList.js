import React, { Component } from 'react'
import { connect } from 'react-redux'

import DatasetInfo from '../presentational/DatasetInfo'
import * as actions from '../../actions'


class DatasetInfoList extends Component{

    componentDidMount() {
        this.props.packageSearch()
    }

    render(){
        //get list of datasets from dataset search here
        let datasets = this.props.datasets
        let total = this.props.total
        let resultName = (total == 1) ? 'result' : 'results';

        const TotalDatasets = () => {
            return <div className="datasets-total">{ total } {resultName}</div>
        }

        let datasetsList = datasets.map((dataset, i) => {
            return <DatasetInfo  {...dataset} key={i} />
        });

        datasetsList.unshift(TotalDatasets())

        return datasetsList
    }

}

const mapStateToProps = state => {
    return {
        datasets: state.packageSearch.datasets,
        total: state.packageSearch.total
    }
}

export default connect(mapStateToProps, actions)(DatasetInfoList)