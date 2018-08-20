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
      <div className="App container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <DatasetSearchBar />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
                <TotalDatasets />
                <DatasetsPerPage />
                <DatasetInfoList />
                <Pagination />
          </div>
          <div className="col-lg-4">
              <DatasetSort />
              <FacetList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
