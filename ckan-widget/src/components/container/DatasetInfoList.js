import React, { Component } from 'react'
import { connect } from 'react-redux'

import DatasetInfo from '../presentational/DatasetInfo'
import Error from '../presentational/Error'
import * as actions from '../../actions'


export class DatasetInfoList extends Component{
    componentDidMount() {
        const { ckanAPI, resultPageSize, dataSort, ckanFacet } = this.props
        let fq = ''

        if (ckanFacet !== undefined) {
            for (const facet in ckanFacet) {
                let values = ckanFacet[facet]
                values = values.replace(/\s+/g, '')

                const fqValues = values.split(',')

                for (let i in fqValues) {
                    if (fq === '') {
                        fq = `${facet}:${fqValues[i]}`
                    } else {
                        fq = `${fq}+${facet}:${fqValues[i]}`
                    }
                }
            }
        }

        this.props.packageSearch({ ckanAPI: ckanAPI, rows: resultPageSize, sort: dataSort, fq: fq })
    }

    render(){
        const { datasets, error, thumbnailsDisplay } = this.props

        if (error) {
            return(
                <Error error={error} />
            )
        }

        let components = datasets.map((dataset, i) => {
            return <DatasetInfo thumbnailsDisplay={thumbnailsDisplay} {...dataset} key={i} />
        });

        return components
    }

}

const mapStateToProps = state => {
    return {
        datasets: state.packageSearch.datasets,
        error: state.packageSearch.error,
        ckanAPI: state.packageSearch.ckanAPI
    }
}

export default connect(mapStateToProps, actions)(DatasetInfoList)
