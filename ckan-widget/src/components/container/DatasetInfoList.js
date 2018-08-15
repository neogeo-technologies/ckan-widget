import React, { Component } from 'react'
import { connect } from 'react-redux'

import DatasetInfo from '../presentational/DatasetInfo'
import Pagination from '../presentational/Pagination'
import TotalDatasets from '../presentational/TotalDatasets'
import DatasetsPerPage from '../presentational/DatasetsPerPage'
import * as actions from '../../actions'


class DatasetInfoList extends Component{

    componentDidMount() {
        const { rows } = this.props
        this.props.packageSearch({rows: rows})
    }

    render(){
        //get list of datasets from dataset search here
        const { datasets, total, rows } = this.props

        let datasetsList = datasets.map((dataset, i) => {
            return <DatasetInfo  {...dataset} key={i} />
        });

        datasetsList.unshift(<TotalDatasets total={total} key={9999} />)
        datasetsList.unshift(<DatasetsPerPage rows={rows} key={99999}/>)
        datasetsList.push(<Pagination key={999999} />)

        return datasetsList
    }

}

const mapStateToProps = state => {
    return {
        datasets: state.packageSearch.datasets,
        total: state.packageSearch.total,
        rows: state.packageSearch.rows
    }
}

export default connect(mapStateToProps, actions)(DatasetInfoList)
