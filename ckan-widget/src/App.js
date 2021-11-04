import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from "react-redux";

import DatasetSearchBar from './components/container/DatasetSearchBar'
import DatasetInfoList from './components/container/DatasetInfoList'
import FacetList from './components/container/FacetList'
import DatasetSort from './components/container/DatasetSort'
import TotalDatasets from './components/container/TotalDatasets'
import DatasetsPerPage from './components/container/DatasetsPerPage'
import Pagination from './components/container/Pagination'
import SelectedFacetList from "./components/container/SelectedFacetList";

import styles from './css/bootstrap.module.css'
import overrideStyles from './css/app.module.css'
import './index.css'

class App extends Component {
    render() {
        const {
            config,
            search,
            sort,
            rows,
            facet_search,
            ckanAPI,
            organizations,
            groups,
            tags,
            search_facets
        } = this.props

        return (
        <div className="App">
            { config.header_display && <div className={cx(styles['bg-secondary'], styles['header'])}>
                <div className={styles['container-fluid']}>
                    <div className={styles['row']}>
                        <div className={cx(styles['col-lg-10'], styles['offset-lg-1'])}>
                            <DatasetSearchBar />
                        </div>
                    </div>
                </div>
            </div> }
            <div className={styles['container-fluid']}>
                <div className={styles['row']}>
                    <div className={cx(styles['col-lg-10'], styles['offset-lg-1'])}>
                        <div className={styles['mt-3']}>
                            <ul className={cx(styles['list-inline'], styles['list-search-facets'], overrideStyles['list-search-facets'])}>
                                <SelectedFacetList
                                    ckanAPI={ckanAPI}
                                    search={search}
                                    search_facets={search_facets}
                                    sort={sort}
                                    rows={rows}
                                    organizations={organizations}
                                    groups={groups}
                                    tags={tags}
                                    selected_facets={facet_search} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx(styles['container-fluid'], styles['my-5'])}>
                <div className={styles['row']}>
                    <div className={cx(styles['col-lg-10'], styles['offset-lg-1'])}>
                        <div className={styles['row']}>
                            <div className={ styles[`${config.sidebar_display ? 'col-lg-8' : 'col-lg-12'}`]}>
                                <div className={cx(styles['d-flex'], styles['justify-content-between'])}>
                                    <TotalDatasets />
                                    <DatasetsPerPage />
                                </div>
                                <DatasetInfoList
                                    organizations={config.ckan_organizations}
                                    groups={config.ckan_groups}
                                    tags={config.ckan_tags}
                                    thumbnailsDisplay={config.thumbnails_display}
                                    resultPageSize={config.result_page_size}
                                    dataSort={config.data_sort}
                                    ckanFacets={config.ckan_facets}
                                    ckanAPI={config.ckan_api}
                                    linkToCKANLabel={config.link_to_ckan_label}
                                />
                                <nav className={styles['my-5']}>
                                    <Pagination />
                                </nav>
                            </div>
                            { config.sidebar_display && <div className={styles['col-lg-4']}>
                                <DatasetSort />
                                <FacetList facetDisplay={config.facet_display} />
                            </div> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        search: state.packageSearch.search,
        search_facets: state.packageSearch.search_facets,
        organizations: state.packageSearch.organizations,
        groups: state.packageSearch.groups,
        tags: state.packageSearch.tags,
        rows: state.packageSearch.rows,
        sort: state.packageSearch.sort,
        facet_search: state.packageSearch.facet_search,
        ckanAPI: state.packageSearch.ckanAPI
    }
}

export default connect(mapStateToProps)(App);

