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

        if (organizations.length > 0) {
            organizations.forEach((name, i) => {
                if (i === 0) {
                    q = `organization:${name}`
                } else {
                    q = `${q} OR ${name}`
                }
            })
        }

        if (groups.length > 0) {
            groups.forEach((name, i) => {
                if (q === '') {
                    q = `groups:${name}`
                } else {
                    if (i === 0) {
                        q = `${q} AND groups:${name}`
                    } else {
                        q = `${q} OR ${name}`
                    }
                }
            })
        }

        if (tags.length > 0) {
            let tags_query = ''
            tags.forEach((name, i) => {
                if (tags_query === '') {
                    tags_query = `"${name}"`
                } else {
                    tags_query = `${tags_query} AND "${name}"`
                }
            })

            if (q === '') {
                q = `tags:${tags_query}`
            } else {
                q = `${q} AND tags:${tags_query}`
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
