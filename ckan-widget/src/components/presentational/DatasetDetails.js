import React, { Component } from 'react'

class DatasetDetails extends Component {
    renderResources = resources => {
        let items = []
        resources.forEach((resource, i) => {
            items.push(
                <li key={i}>
                    <span>{resource.format}</span>
                    <strong>{resource.name}</strong>
                    <span>Modification date: {this.formatDate(resource.last_modified)}</span>
                </li>
            )
        })

        return items
    }

    formatDate = date => {
        const d = new Date(date)
        return d.toUTCString()
    }

    render() {
        const { name, notes, resources, dataset_creation_date, dataset_modification_date, dataset_publication_date } = this.props
        const orgName = this.props.organization.name
        return(
            <div className="dataset-body">
                <p>{notes}</p>
                <p>Created on: {dataset_creation_date}</p>
                <p>Publication date: {dataset_publication_date}</p>
                <p>Modification date: {dataset_modification_date}</p>
                <p>Organization: {orgName}</p>
                <h1>Resources</h1>
                <ul className="list-inline">
                    { this.renderResources(resources) }
                </ul>
                <p>
                    <a className="btn btn-success" href={`https://trouver.datasud.fr/dataset/${name}`}>Display this dataset in Datasud.fr</a>
                </p>
            </div>
        )
    }
}

export default DatasetDetails