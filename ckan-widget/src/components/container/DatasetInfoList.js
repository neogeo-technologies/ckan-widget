import React, { Component } from 'react'
import { connect } from 'react-redux'

import DatasetInfo from '../presentational/DatasetInfo'
import Error from '../presentational/Error'
import * as actions from '../../actions'


export class DatasetInfoList extends Component{
    componentDidMount() {
        let {
            resultPageSize,
            dataSort,
            ckanFacets,
            ckanAPI,
            organizations,
            groups,
            tags
        } = this.props

        let q = ''
        let fq = ''
        let fq_list = []

        let fq_organizations = []
        if (organizations.length > 0) {
            organizations.forEach(name => {
                const val = `organization:"${name}"`
                fq_organizations.push(val)
            })
            fq_list.push(`(${fq_organizations.join(' OR ')})`)
        }

        if (groups.length > 0) {
            groups.forEach(name => {
                const val = `groups:"${name}"`
                fq_list.push(val)
            })
        }

        if (tags.length > 0) {
            tags.forEach(name => {
                const val = `tags:"${name}"`
                fq_list.push(val)
            })
        }

        if (ckanFacets !== undefined) {
            for (const facet in ckanFacets) {
                let values = ckanFacets[facet]
                values = values.replace(/\s+/g, '')

                const fqValues = values.split(',')
                for (let i in fqValues) {
                    fq_list.push(`${facet}:${fqValues[i]}`)
                }
            }
        }

        fq = fq_list.join('+')

        // Remove trailing slash
        ckanAPI = ckanAPI.replace(/\/$/, '')
        this.props.packageSearch({
            ckanAPI: ckanAPI,
            rows: resultPageSize,
            sort: dataSort,
            fq: fq,
            q: q,
            firstCall: true,
            organizations: organizations,
            groups: groups,
            tags: tags
        })
    }

    render(){
        const { ckanAPI, linkToCKANLabel, datasets, error, thumbnailsDisplay, search_facets } = this.props

        if (error) {
            return(
                <Error error={error} />
            )
        }

        let components = datasets.map((dataset, i) => {
            return <DatasetInfo ckanAPI={ckanAPI} linkToCKANLabel={linkToCKANLabel} thumbnailsDisplay={thumbnailsDisplay} search_facets={search_facets} {...dataset} key={i} />
        });

        return components
    }

}

const mapStateToProps = state => {
    return {
        datasets: state.packageSearch.datasets,
        search_facets: state.packageSearch.search_facets,
        error: state.packageSearch.error,
        rows: state.packageSearch.rows,
        sort: state.packageSearch.sort,
        facet_search: state.packageSearch.facet_search,
        firstCall: state.packageSearch.firstCall
    }
}

export default connect(mapStateToProps, actions)(DatasetInfoList)
