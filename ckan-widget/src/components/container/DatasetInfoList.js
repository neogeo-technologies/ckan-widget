import React, { Component } from 'react'
import { connect } from 'react-redux'

import DatasetInfo from '../presentational/DatasetInfo'
import Error from '../presentational/Error'
import * as actions from '../../actions'


export class DatasetInfoList extends Component{
    componentDidMount() {
        let {
            organization_ids,
            group_ids,
            tag_ids,
            resultPageSize,
            dataSort,
            ckanFacets,
            ckanAPI
        } = this.props
        let q = ''
        let fq = ''

        if (organization_ids !== undefined) {
            organization_ids.forEach(id => {
                this.props.organizationShow({ ckanAPI, id })
            });
        }

        if (group_ids !== undefined) {
            group_ids.forEach(id => {
                this.props.groupShow({ ckanAPI, id })
            });
        }

        if (tag_ids !== undefined) {
            tag_ids.forEach(id => {
                this.props.tagShow({ ckanAPI, id })
            });
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
        this.props.packageSearch({ ckanAPI: ckanAPI, rows: resultPageSize, sort: dataSort, fq: fq, q: q, firstCall: true })
    }

    componentWillReceiveProps(nextProps) {
        const {
            ckanAPI,
            rows,
            sort,
            facet_search,
            organizations,
            groups,
            tags,
            firstCall
        } = nextProps
        const fq = facet_search
        let q = ''
        let reRender = false

        if (organizations.length > 0) {
            reRender = true
            organizations.forEach((name, i) => {
                if (i === 0) {
                    q = `organization:${name}`
                } else {
                    q = `${q} OR ${name}`
                }
            })
        }

        if (groups.length > 0) {
            reRender = true
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
            reRender = true
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

        if (firstCall && reRender) {
            this.props.packageSearch({ ckanAPI, rows, sort, fq, q })
        }
    }

    render(){
        const { ckanAPI, datasets, error, thumbnailsDisplay } = this.props

        if (error) {
            return(
                <Error error={error} />
            )
        }

        let components = datasets.map((dataset, i) => {
            return <DatasetInfo ckanAPI={ckanAPI} thumbnailsDisplay={thumbnailsDisplay} {...dataset} key={i} />
        });

        return components
    }

}

const mapStateToProps = state => {
    return {
        datasets: state.packageSearch.datasets,
        error: state.packageSearch.error,
        organizations: state.packageSearch.organizations,
        groups: state.packageSearch.groups,
        tags: state.packageSearch.tags,
        rows: state.packageSearch.rows,
        sort: state.packageSearch.sort,
        facet_search: state.packageSearch.facet_search,
        firstCall: state.packageSearch.firstCall
    }
}

export default connect(mapStateToProps, actions)(DatasetInfoList)
