import React, { Component } from 'react'
import { connect } from 'react-redux'

import DatasetInfo from '../presentational/DatasetInfo'
import Error from '../presentational/Error'
import * as actions from '../../actions'


export class DatasetInfoList extends Component{
    componentDidMount() {
        let {
            organizations,
            groups,
            tags,
            resultPageSize,
            dataSort,
            ckanFacets,
            ckanAPI
        } = this.props
        let fq = ''

        if (organizations !== undefined) {
            for (let i in organizations) {
                if (fq === '') {
                    fq = `organization:${organizations[i]}`
                } else {
                    fq = `${fq}+organization:${organizations[i]}`
                }
            }
        }

        if (groups !== undefined) {
            for (let i in groups) {
                if (fq === '') {
                    fq = `groups:${groups[i]}`
                } else {
                    fq = `${fq}+groups:${groups[i]}`
                }
            }
        }

        if (tags !== undefined) {
            for (let i in tags) {
                if (fq === '') {
                    fq = `tags:${tags[i]}`
                } else {
                    fq = `${fq}+tags:${tags[i]}`
                }
            }
        }

        if (ckanFacets !== undefined) {
            for (const facet in ckanFacets) {
                let values = ckanFacets[facet]
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

        // Remove trailing slash
        ckanAPI = ckanAPI.replace(/\/$/, '')
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
        error: state.packageSearch.error
    }
}

export default connect(mapStateToProps, actions)(DatasetInfoList)
