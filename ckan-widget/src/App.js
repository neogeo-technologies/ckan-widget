import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DatasetSearchBar from './components/container/DatasetSearchBar';
import DatasetInfoList from './components/container/DatasetInfoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DatasetSearchBar />
        <DatasetInfoList />
      </div>
    );
  }
}

export default App;
