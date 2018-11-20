import React, { Component } from 'react'
import DatasetSearchBar from './components/container/DatasetSearchBar'
import DatasetInfoList from './components/container/DatasetInfoList'
import FacetList from './components/container/FacetList'
import DatasetSort from './components/container/DatasetSort'
import TotalDatasets from './components/container/TotalDatasets'
import DatasetsPerPage from './components/container/DatasetsPerPage'
import Pagination from './components/container/Pagination'

class App extends Component {
    render() {
        const { config } = this.props

        return (
        <div className="App">
            <div className="bg-secondary header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <DatasetSearchBar />
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
                                        organizations={config.ckan_organizations}
                                        groups={config.ckan_groups}
                                        tags={config.ckan_tags}
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

export default App;

