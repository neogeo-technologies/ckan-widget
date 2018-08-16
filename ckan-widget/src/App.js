import React, { Component } from 'react';
import './App.css';
import DatasetSearchBar from './components/container/DatasetSearchBar';
import DatasetInfoList from './components/container/DatasetInfoList';
import FacetList from './components/container/FacetList';


class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <DatasetSearchBar />
         <div className="row">
        <div className="col-md-8">
            <DatasetInfoList />
        </div>
         <div className="col-md-4">
            <FacetList />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
