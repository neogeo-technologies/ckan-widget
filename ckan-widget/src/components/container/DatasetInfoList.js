import React, { Component } from 'react'
import { connect } from 'react-redux'

import DatasetInfo from '../presentational/DatasetInfo'
import Pagination from '../presentational/Pagination'
import TotalDatasets from '../presentational/TotalDatasets'
import DatasetsPerPage from '../presentational/DatasetsPerPage'
import Error from '../presentational/Error'
import * as actions from '../../actions'


class DatasetInfoList extends Component{
    constructor() {
        super()
        this.handleDatasetsPerPage = this.handleDatasetsPerPage.bind(this)
        this.handlePagination = this.handlePagination.bind(this)
    }

    componentDidMount() {
        this.props.packageSearch()
    }

    render(){
        const { datasets, error } = this.props

        if (error) {
            return(
                <Error error={error} />
            )
        }

        let components = datasets.map((dataset, i) => {
            return <DatasetInfo {...dataset} key={i} />
        });

        components.push(
            <Pagination
                handlePagination={this.handlePagination}
                page={page}
                pageCount={Math.ceil(total/rows)}
                total={total}
                rows={rows}
                key={9999999} />
        )

        return components
    }

}

const mapStateToProps = state => {
    return {
        datasets: state.packageSearch.datasets,
        total: state.packageSearch.total,
        rows: state.packageSearch.rows,
        search: state.packageSearch.search,
        page: state.packageSearch.page,
        sort: state.packageSearch.sort,
        error: state.packageSearch.error
    }
}

export default connect(mapStateToProps, actions)(DatasetInfoList)
