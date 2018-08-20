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
        const { rows } = this.props

        this.props.packageSearch({ rows: rows })
    }

    handleDatasetsPerPage = rows => {
        const { search, sort } = this.props

        this.props.packageSearch({ q: search, sort: sort, rows: rows })
    }

    handlePagination = page => {
        const { search, rows, sort } = this.props
        const start = page * rows

        this.props.packageSearch({ q: search, start: start, rows: rows, page: page, sort: sort })
    }

    render(){
        const { datasets, total, rows, page, error } = this.props
        let components = [
            <TotalDatasets total={total} key={9999} />,
            <DatasetsPerPage handleDatasetsPerPage={this.handleDatasetsPerPage} rows={rows} key={99999} />
        ]

        if (error) {
            components.push(<Error error={error} key={999999}/>)
        }

        datasets.forEach((dataset, i) => {
            components.push(<DatasetInfo {...dataset} key={i} />)
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
