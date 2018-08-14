import React, { Component } from 'react'

import DatasetInfo from '../presentational/DatasetInfo'


class DatasetInfoList extends Component{

    //TODO: add unique "key" prop.

    render(){
        //get list of datasets from dataset search here
        let datasets = [1,2];
        let datasetsList = datasets.map(function(name){
            return <DatasetInfo />
        });

        return datasetsList
    }

}

export default DatasetInfoList;