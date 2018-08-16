import React, { Component } from 'react'
import Facet from '../presentational/Facet'

//Default ckan facets
const FACETS_TITLE = {
    'organization': 'Organizations',
    'groups': 'Groups',
    'tags': 'Tags',
    'res_format': 'Formats',
    'license_id': 'Licenses',
}

export default class FacetList extends Component{

    render(){

        let facetList = Object.values(FACETS_TITLE).map((ft, i) => {
            return <Facet  title={ft} key={i} />
        });

        return facetList;

    }
}
