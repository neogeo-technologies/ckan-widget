import React, { Component } from 'react'
import cx from 'classnames'

import DatasetSearchBar from './components/container/DatasetSearchBar'
import DatasetInfoList from './components/container/DatasetInfoList'
import FacetList from './components/container/FacetList'
import DatasetSort from './components/container/DatasetSort'
import TotalDatasets from './components/container/TotalDatasets'
import DatasetsPerPage from './components/container/DatasetsPerPage'
import Pagination from './components/container/Pagination'

import styles from './assets/bootstrap.module.css'

class App extends Component {
    render() {
        const { config } = this.props

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
                                        ckanAPI={config.ckan_api} />
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

export default App;

