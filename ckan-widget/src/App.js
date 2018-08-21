import React, { Component } from 'react';
import './App.css';
import DatasetSearchBar from './components/container/DatasetSearchBar';
import DatasetInfoList from './components/container/DatasetInfoList';
import FacetList from './components/container/FacetList';
import DatasetSort from './components/container/DatasetSort';
import TotalDatasets from './components/container/TotalDatasets'
import DatasetsPerPage from './components/container/DatasetsPerPage'
import Pagination from './components/container/Pagination'


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="bg-secondary">
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
                              <DatasetInfoList />
                              <Pagination />
                          </div>
                          <div className="col-lg-4">
                              <DatasetSort />
                              <FacetList />
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
