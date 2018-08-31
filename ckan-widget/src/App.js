import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import DatasetSearchBar from './components/container/DatasetSearchBar';
import DatasetInfoList from './components/container/DatasetInfoList';
import FacetList from './components/container/FacetList';
import DatasetSort from './components/container/DatasetSort';
import TotalDatasets from './components/container/TotalDatasets'
import DatasetsPerPage from './components/container/DatasetsPerPage'
import Pagination from './components/container/Pagination'
import * as actions from './actions'


class App extends Component {
    render() {
        const { config } = this.props

        return (
        <div className="App">
            <div className="bg-secondary">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <DatasetSearchBar />
                            <i className="material-icons text-light header-icon">search</i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="d-flex justify-content-between">
                                    <TotalDatasets />
                                    <DatasetsPerPage />
                                </div>
                                    <DatasetInfoList
                                        organization_ids={config.ckan_organizations}
                                        group_ids={config.ckan_groups}
                                        tag_ids={config.ckan_tags}
                                        thumbnailsDisplay={config.thumbnails_display}
                                        resultPageSize={config.result_page_size}
                                        dataSort={config.data_sort}
                                        ckanFacets={config.ckan_facets}
                                        ckanAPI={config.ckan_api} />
                                <nav className="my-5">
                                    <Pagination />
                                </nav>
                            </div>
                            <div className="col-lg-4">
                                <DatasetSort />
                                <FacetList facetDisplay={config.facet_display} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default connect(null, actions)(App);

